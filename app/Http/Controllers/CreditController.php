<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Package;
use App\Models\Feature;
use App\Models\Transaction;
use App\Http\Resources\PackageResource;
use App\Http\Resources\FeatureResource;
use Illuminate\Support\Facades\Auth;
// use Illuminate\Support\Facades\Session;
// use Stripe\Stripe;
// // use Stripe\Checkout\Session;
use Stripe\StripeClient;
class CreditController extends Controller
{
    public function index()
    {
        $packages = Package::all();
        $features = Feature::where('active', true)->get();
    return inertia('Credit/Index',
    ['packages' => PackageResource::collection($packages),
    'features' =>FeatureResource::collection($features),
    'success' => session('success'),
    'error' =>session('error')
    ]);
    }
    public function buyCredits(Package $package){
        // $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET'));//here change and in env
        $stripe = new StripeClient(env('STRIPE_SECRET'));
        $checkout_session =  $stripe->checkout->sessions->create([
            'line_items' => [
                [
                    'price_data' => [
                        'currency' => 'usd',
                        'product_data' => [
                            'name' => $package->name.'-'.
                            $package->credits.'Credits',
                        ],
                        'unit_amount' => $package->price*100,
                    ],
                    'quantity' => 1,
                ],
            ],
            'mode' => 'payment',
            'success_url' => route('credit.success',[],true),
            'cancel_url' => route('credit.cancel',[],true),
        ]);
        // status price credits session_id user_id package_id
        // Transaction::create([
        //     'status' => 'pending',
        //     'price ' =>$package->price,
        //     'credits' => $package->credits,
        //     'session_id' => $checkout_session->id,
        //     'user_id' => Auth::id(),
            // 'package_id' =>$package->id 
        // ]);
        
$transaction = Transaction::create([
        'status' => 'pending',
        'price' => $package->price,
        'credits' => $package->credits,
        'session_id' => $checkout_session->id,
        'user_id' => Auth::id(),
        'package_id' => $package->id,
    ]);

        return redirect($checkout_session->url);

    }
    public function success(){
        return to_route('credit.index')->with('success','U have Successfully bought new credits');
    }
    public function cancel(){
        return to_route('credit.index')->with('error','There was an error in payment,please try again!.');
    }
    public function webhook(){
        $endpoint_secret = env('STRIPE_WEBHOOK_KEY');
        $payload = @file_get_contents('php://input');
        $sig_header =  $_SERVER('HTTP_STRIPE_SIGNATURE');
        $event = null;
        try{
            $event = \Stripe\Webhook::constructEvent(
                    $payload,
                    $sig_header,
                    $endpoint_secret
            );
        }
        catch(\UnexpectedValueException $e){
            //invalid payload
            return response('',400);
        }
        catch(\Stripe\Exception\SignatureVerificationException $e){
            //invalid signature
            return response('',400);
        }
        // handle the event
        switch($event->type){
            case 'checkout.session.completed':
                $session = $event->data->object;
                $transaction = Transaction::where('session_id',$session->id)->first();
                if($transaction && $transaction->status == 'pending'){
                    $transaction->status = 'paid';
                    $transaction->save();
                    $transaction->user()->availableCredits += $transaction->credits;
                    $transaction->user()->save();
                }
                $transaction->status = 'completed';
                $transaction->save();
                break;
            default:
                // Unexpected event type
                echo 'Unexpected event type'.$event->type;

        }
        return response('');

    }
}
