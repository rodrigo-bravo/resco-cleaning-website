import Link from 'next/link';

const FaqSection = () => {
    return (
        <section className="bg-white">
            <div className="py-16 px-4 mx-auto max-w-screen-xl lg:px-6">
                <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900">Frequently Asked Questions</h2>
                <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                    <div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                </svg>
                                How much does it cost for cleaning services?
                            </h3>
                            <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
                            <p className='pb-4'>The cost of cleaning services varies based on several factors, including the size of the property, the type of cleaning required, and the frequency of service. For a precise quote, you can:</p>
                                <li className="mb-2 px-5"><b>Request a Quote Online</b> with our easy-to-use <Link href="/contact" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">online form</Link> detailing your cleaning needs and receive a personalized quote.</li>
                                <li className="mb-2 px-5"><b>Call Us Directly</b> at <b>407-860-8143</b>, and our friendly customer service representative will provide an accurate estimate based on your specific requirements.</li>
                                <li className="mb-2 px-5"><b>Email us</b> the details of your cleaning needs at <b>cleaningresco@gmail.com</b>. We’ll review your information and get back to you with a detailed quote.</li>
                            </ul>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                </svg>
                                What areas do you service and what languages do yous peak?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">Nosotras hablamos <b>español y inglés</b>. Resco Cleaning proudly serves the following areas: Orlando area (Orange County, Seminole County, Osceola County, and Lake County) for residential areas. 
                                <p className='py-3'>For commercial properties, we routinely cover the following locations:</p>
                                <ul className="flex flex-wrap -mx-4">
                                    <li className="w-full md:w-1/3 px-4 mb-4 text-underline"><Link href="/orlando" className="block text-emerald-500 underline hover:underline">Orlando</Link></li>
                                    <li className="w-full md:w-1/3 px-4 mb-4 text-underline"><Link href="/kissimmee" className="block text-emerald-500 underline hover:underline">Kissimmee</Link></li>
                                    <li className="w-full md:w-1/3 px-4 mb-4 text-underline"><Link href="/miami" className="block text-emerald-500 underline hover:underline">Miami</Link></li>
                                    <li className="w-full md:w-1/3 px-4 mb-4 text-underline"><Link href="/tampa" className="block text-emerald-500 underline hover:underline">Tampa</Link></li>
                                    <li className="w-full md:w-1/3 px-4 mb-4 text-underline"><Link href="/Jacksonville" className="block text-emerald-500 underline hover:underline">Jacksonville</Link></li>
                                    <li className="w-full md:w-1/3 px-4 mb-4 text-underline"><Link href="/fortlauderdale" className="block text-emerald-500 underline hover:underline">Fort Lauderdale</Link></li>
                                </ul>
                                <p>If you’re unsure whether we cover your location, please contact us directly at <b>407-860-8143</b> or email us at <b>cleaningresco@gmail.com</b>, and we’ll be happy to assist you.</p>
                            </p>
                                
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                </svg>
                                What does the free consultation include?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">The free consultation includes an initial assessment of your cleaning needs, a discussion of your preferences, and a detailed quote based on the specifics of your property and the services required. This allows us to tailor our services to best meet your expectations.</p>
                        </div>
                        <div className="mb-10">                        
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                </svg>
                                What does "satisfaction guarantee" exactly mean?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">Our satisfaction guarantee means that if you're not fully satisfied with the quality of our cleaning services, we will return and address any issues at no additional charge. Your satisfaction is our priority, and we are committed to ensuring that you are happy with the results.</p>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                </svg>
                                How does support work?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">We understand the importance of responsive and effective support, which is why our customer service team consists of trained professionals who are familiar with all aspects of our cleaning services. Feel free to <Link href="/contact" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">contact us</Link> and we will assist you as promptly as possible.</p>
                        </div>
                    </div>
                    <div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                </svg>
                                What types of cleaning services do you offer?
                            </h3>
                            <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
                            <p className='pb-4'>The cost of cleaning services varies based on several factors, including the size of the property, the type of cleaning required, and the frequency of service. For a precise quote, you can:</p>
                                <li className="mb-2 px-5"><b>Residential Cleaning:</b> Routine house cleaning, deep cleaning, move-in/move-out cleaning, and post-event cleanups.</li>
                                <li className="mb-2 px-5"><b>Commercial Cleaning:</b> Office cleaning, retail space maintenance, and janitorial services.</li>
                                <li className="mb-2 px-5"><b>Specialized Cleaning:</b> Carpet and upholstery cleaning, window washing, and post-construction cleaning.</li>
                                <p className='pt-2'>Explore our full range of services on our website or contact us for a customized solution!</p>

                            </ul>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                </svg>
                                What is the difference between Resco Cleaning Services and other cleaning companies?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">While many cleaning companies offer basic cleaning services, Resco Cleaning Services stands out due to our commitment to high-quality, personalized service. We use eco-friendly cleaning products, have highly trained staff, and offer flexible scheduling options to fit your needs.</p>
                            <p className="text-gray-500 dark:text-gray-400 pt-3">Additionally, our customer-focused approach and satisfaction guarantee ensure that you receive top-notch service every time.</p>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                </svg>
                                Can I use Resco Cleaning Services for my commercial property?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">Yes, we offer cleaning services for both residential and commercial properties. Whether you need regular office cleaning, post-construction clean-up, or any other commercial cleaning service, we have the expertise and resources to handle it efficiently. Contact us to discuss your commercial cleaning needs.</p>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                </svg>
                                What happens if I am not satisfied with the cleaning service?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">Customer satisfaction is our top priority. If you are not completely satisfied with our cleaning service, please let us know within 24 hours of the service. We will address any concerns promptly and arrange for any necessary follow-up cleaning to ensure you are happy with the results.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
