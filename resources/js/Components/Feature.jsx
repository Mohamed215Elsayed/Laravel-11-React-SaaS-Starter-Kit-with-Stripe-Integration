import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
export default function Feature({ feature, answer, children }) {
    const { auth } = usePage().props;
    const available_credits = auth.user.available_credits;
    /*======================================*/
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {feature.name}
                </h2>
            }
        >
            <Head title="feature 1"/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {answer !== null && (
                        <div className="bg-emerald-500 mb-3 py-3 px-5 text-white overflow-hidden shadow-sm sm:rounded-lg">
                            Result of calculation: {answer}
                        </div>
                    )}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {available_credits !== null &&
                                feature.required_credits >
                                    available_credits && (
                                    <div className=" mb-3 py-3 px-5 overflow-hidden shadow-sm sm:rounded-lg absolute left-0 top-0 right-0 bottom-0 z-20  flex flex-col items-center justify-center bg-white/70 gap-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                                            />
                                        </svg>
                                        <div>
                                            You don't have enough credits to use
                                            this feature GO {""}
                                            {/* <Link href='/' className="underline">Buy more credits</Link> */}
                                            <Link
                                                href={route("credit.index")}
                                                className="underline"
                                            >
                                                Buy more credits
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            <div className="p-8 text-gray-400 border-b pb-4">
                                <p>{feature.description}</p>
                                <p className="text-sm italic text-right">
                                    Requires {feature.required_credits} Credits
                                </p>
                            </div>

                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
