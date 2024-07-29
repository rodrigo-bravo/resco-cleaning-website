import Link from "next/link";

const MainSection = () => {
    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 pt-10 lg:pt-10 md:pt-20 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Jacksonville’s Expert in Commercial Cleaning Solutions</h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                    Discover Why RESCO is a Top Choice for Commercial Cleaning Services
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-2">
                    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-between items-center mb-5 text-gray-500">
                            <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                Service Highlight
                            </span>
                            <span className="text-sm">6 weeks ago</span>
                        </div>
                        <div className="py-3 sm:py-4 rounded-xl">
                            <img
                            src="/images/jacksonville2.png"
                            alt=""
                            className="absoulte w-full h-[20%] object-cover"
                            />
                        </div>
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Areas We Serve</h2>
                        <p className="mb-5 font-light text-gray-500">We proudly serve various neighborhoods and areas across Jacksonville, including:</p>
                        <ul className="mb-5 font-light text-gray-500">
                        <li>Downtown Jacksonville</li>
                        <li>Riverside</li>
                        <li>San Marco</li>
                        <li>Mandarin</li>
                        <li>Arlington</li>
                        <li>Jacksonville Beach</li>
                        </ul>
                            <p className="mb-5 font-light text-gray-500">If you are unsure whether we cover your area, please do not hesitate to <Link href={'/contact'} className="underline">reach out to us</Link>!</p>
                    </article>
                    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-between items-center mb-5 text-gray-500">
                            <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                                  Jacksonville
                            </span>
                            <span className="text-sm">22 weeks ago</span>
                        </div>
                        <h2 className="pb-3 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Custom Office Cleaning Solutions for Jacksonville’s Business Sector
                        </h2>
                        <p className="mb-5 font-light text-gray-500 dark:text-gray-400"> 
                        Our skilled professionals are committed to delivering top-notch cleaning services with a personal touch unique to a local business. We recognize the specific needs and challenges faced by Jacksonville’s businesses, from managing the effects of the humid climate to accommodating the diverse schedules of local companies. Our team is dedicated to providing a level of service that mirrors our strong ties to the Jacksonville community.
                        </p>
                        <div className="py-3 sm:py-4 rounded-xl">
                            <img
                            src="/images/jacksonville.png"
                            alt=""
                            className="absoulte w-full h-[20%] object-cover"
                            />
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default MainSection;
