import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head} from "@inertiajs/react";
import PackagesPricingCards from "@/Components/PackagesPricingCards"; 
export default function Index({auth,packages,features,success,error}) {
    const availableCredits = auth.user.available_credits;
/*===================================*/
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Your Credits
                </h2>
            }
        >
            <Head title="Your Credits" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {success && (
                        <div className="bg-emerald-500 mb-3 py-3 px-5 text-white overflow-hidden shadow-sm sm:rounded-lg">
                            {success}
                        </div>
                    )}
                    {error && (
                        <div className="bg-red-500 mb-3 py-3 px-5 text-white overflow-hidden shadow-sm sm:rounded-lg">
                            {error}
                        </div>
                    )}

                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg relative">
                        <div className="flex flex-col gap-3 items-center p-4">
                            <img
                                src="/coin.jpeg"
                                className="w-10 h-10 rounded-full border-2 border-gray-500 object-cover"
                                alt="My Avatar"
                            />

                            <h3 className="text-white text-2xl font-bold">
                                You have {availableCredits} credits.
                            </h3>
                        </div>
                    </div>

                    <PackagesPricingCards
                        packages={packages.data}
                        features={features.data}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
