import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/react';
export default function Dashboard({ auth , usedfeatures}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rtl:text-right">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Feature</th>
                                        <th scope="col" className="px-6 py-3">Credits</th>
                                        <th scope="col" className="px-6 py-3">Date</th>
                                        <th scope="col" className="px-6 py-3">Additional Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usedfeatures.data.map((used_feature) => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                        key={used_feature.id}
                                        >
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{used_feature.feature.name}</th>
                                            <td className="px-6 py-4">{used_feature.credits}</td>
                                            <td className="px-6 py-4">{used_feature.created_at}</td>
                                            <td className="px-6 py-4">{JSON.stringify(used_feature)}</td>
                                        </tr>   
                                        
                                    ))}
                                    {!usedfeatures.data.length && (
                                        <tr>
                                            <td colSpan="4" className="px-6 py-4 text-center"> U haven't used any features yet.</td>
                                        </tr>
                                    )}
                                </tbody>

                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
