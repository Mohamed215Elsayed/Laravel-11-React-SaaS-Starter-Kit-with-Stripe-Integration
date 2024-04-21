<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PackageResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        //name price credits
        return [
            'id' => $this->id,
            'name' => $this->name,
            'price' => $this->price,
            'credits' => $this->credits
        ];
    }
}
