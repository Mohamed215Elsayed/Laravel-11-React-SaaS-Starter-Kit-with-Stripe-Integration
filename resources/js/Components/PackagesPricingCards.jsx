import { usePage } from "@inertiajs/react";
export default function PackagesPricingCards({ packages, features }) {
    const { csrf_token } = usePage().props;
    /*===================================*/
    return (
        <section className="bg-gray-900">
            <div className="py-8 px-4">
                <div className="text-center mb-8">
                    <h2 className="mb-4 text-4xl font-extrabold text-white">
                        The more credits you Choose, the bigger Savings you will
                        make
                    </h2>
                </div>      
                <div className="y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    {packages.map((p) => (
                        <div
                            key={p.id}
                            className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-10 dark:bg-gray-800 dark:text-white"
                        >
                            <h3 className="mb-4 text-2xl font-semibold">
                                {p.name}
                            </h3>
                            <div className=" flex justify-center items-baseline my-8">
                                <span className="mr-2 font-extrabold text-5xl">
                                    ${p.price}
                                </span>
                                <span className="text-2xl dark:text-gray-400">
                                    /{p.credits} credits
                                </span>
                            </div>
                            <ul
                                role="list"
                                className="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400"
                            >
                                {p.features &&
                                    p.features.map((f) => (
                                        <li
                                            className="flex items-center space-x-3"
                                            key={f.id}
                                        >
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                            <span>{f.name}</span>
                                        </li>
                                    ))}
                            </ul>
                            <form
                                method="POST"
                                action={route("credit.buy", p)}
                                className="w-full"
                            >
                                <input
                                    type="hidden"
                                    name="_token"
                                    value={csrf_token}
                                    autoComplete="off"
                                />

                                <button
                                    type="submit"
                                    className="w-full px-5 py-3 font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                >
                                    Get Started
                                </button>
                            </form>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
