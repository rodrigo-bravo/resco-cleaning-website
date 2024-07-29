import Link from "next/link";

const MainSection = () => {
    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 pt-10 lg:pt-10 md:pt-20 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Expert Cleaning Services in Kissimmee</h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Expert Solutions for Homes and Businesses in Kissimmee and Sorrounding Areas
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-2">
                    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-between items-center mb-5 text-gray-500">
                            <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                Service Highlight
                            </span>
                            <span className="text-sm">2 weeks ago</span>
                        </div>
                        <div className="py-3 sm:py-4 rounded-xl">
                            <img
                            src="/images/kissimmee1.jpg"
                            alt=""
                            className="absoulte w-full h-[20%] object-cover"
                            />
                        </div>
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Areas We Serve</h2>
                            <p className="mb-5 font-light text-gray-500">In addition to Kissimmee, RESCO proudly serves the surrounding areas, including::</p>
                            <ul className="mb-5 font-light text-gray-500">
                                <li>Celebration</li>
                                <li>St. Cloud</li>
                                <li>Poinciana</li>
                                <li>Davenport</li>
                            </ul>
                            <p className="mb-5 font-light text-gray-500">If you are unsure whether we cover your area, please do not hesitate to <Link href={'/contact'} className="underline">reach out to us</Link>!</p>
                    </article>
                    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-between items-center mb-5 text-gray-500">
                            <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                                 Kissimmee 
                            </span>
                            <span className="text-sm">3 weeks ago</span>
                        </div>
                        <h2 className="pb-3 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Residential & Commerical Cleaning
                        </h2>
                        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                        Our dedication to delivering high-quality cleaning and transparent communication ensures that every job meets the highest standards. We build long-lasting relationships with our clients based on trust and exceptional service.
                        </p>
                        <p className="py-3 mb-5 font-light text-gray-500 dark:text-gray-400"> 
                        In Kissimmee, RESCO offers comprehensive residential and commercial cleaning services tailored to meet the unique needs of our local community. Our residential cleaning ensures that your home remains a pristine sanctuary, with services ranging from routine housekeeping to deep cleans that address every corner. For businesses, we provide efficient and flexible commercial cleaning solutions that maintain a professional and welcoming environment, accommodating various schedules to minimize disruption. Whether you are looking to refresh your home or enhance the cleanliness of your office, RESCO delivers meticulous care with a commitment to quality and reliability.
                        </p>
                        <div className="py-3 sm:py-4 rounded-xl">
                            <img
                            src="/images/kissimmee2.png"
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
