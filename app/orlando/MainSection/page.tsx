import Link from "next/link";

const MainSection = () => {
    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 pt-10 lg:pt-10 md:pt-20 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Orlando Services</h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Discover why RESCO is Orlando’s trusted choice for professional cleaning services. From homes to businesses, we bring a local touch to every job.
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
                            src="/images/orlando1.jpg"
                            alt=""
                            className="absoulte w-full h-[20%] object-cover"
                            />
                        </div>
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Areas We Serve</h2>
                            <p className="mb-5 font-light text-gray-500">We proudly serve various neighborhoods and areas across Orlando, including:</p>
                            <ul className="mb-5 font-light text-gray-500">
                                <li>Downtown Orlando</li>
                                <li>Lake Eola Heights</li>
                                <li>Winter Park</li>
                                <li>College Park</li>
                                <li>Dr. Phillips</li>
                                <li>Hunters Creek</li>
                            </ul>
                        <p className="mb-5 font-light text-gray-500">If you are unsure whether we cover your area, please do not hesitate to <Link href={'/contact'} className="underline">reach out to us</Link>!</p>
                    </article>
                    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-between items-center mb-5 text-gray-500">
                            <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                                 Resco: A Local Cleaning Business based in Orlando
                            </span>
                            <span className="text-sm">1 week ago</span>
                        </div>
                        <h2 className="pb-3 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Transforming Orlando Offices: A Success Story
                        </h2>
                        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                        At RESCO, we take pride in being a locally owned and operated Orlando business, deeply familiar with the unique needs of our community. Our experienced professionals are dedicated to providing exceptional cleaning services with a personal touch that only a local company can offer. We understand the specific challenges and preferences of Orlando residents, from handling the subtropical climate’s effects on homes to navigating the busy schedules of local businesses. Our team is committed to delivering a level of service that reflects our deep roots in this community.
                        </p>
                        <p className="py-3 mb-5 font-light text-gray-500 dark:text-gray-400"> We offer flexible scheduling options to accommodate the busy lives of our clients, including after-hours and weekend services. Our tailored approach ensures that each cleaning plan is designed to meet your exact needs, from routine maintenance to one-time deep cleans. Whether you are looking for regular house cleaning, office sanitation, or specialized services like carpet and upholstery cleaning, RESCO is equipped to handle it all with precision and care.
                        </p>
                        <p className="py-3 mb-5 font-light text-gray-500 dark:text-gray-400">
                        As Orlando&apos;s trusted choice, we are committed to delivering reliable and thorough cleaning, ensuring your space is pristine and welcoming. Our attention to detail and dedication to customer satisfaction set us apart from the competition. We pride ourselves on building long-lasting relationships with our clients through exceptional service and transparent communication. With RESCO, you can rest assured that every job is completed to the highest standards, and your satisfaction is our top priority.</p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default MainSection;
