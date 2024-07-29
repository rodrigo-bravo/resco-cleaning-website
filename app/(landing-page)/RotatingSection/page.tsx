'use client'

import React from "react";
import Slider from 'react-infinite-logo-slider';
import Image from "next/image";
import Link from "next/link";

const RotatingSection = () => {
    return (
        <div className=""><p className="text-4xl md:text-5xl pt-5 lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter text-center xl:pt-10">Cleaning Estimates</p>
        <div className="pb-20 pt-5 xl:pt-10">
            <Slider
                width='300px'
                height='300px'
                duration={40}
                pauseOnHover={false}
                blurBorders={true}
            >
                <Slider.Slide>
                <div className="pb-20 pt-5">
                <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                    <div className="relative w-full h-48">
                        <Image 
                            src="/images/rotatingsection/reg_cleaning3.jpg" 
                            alt="Window Cleaning" 
                            layout="fill" 
                            objectFit="cover" 
                            className="absolute top-0 left-0"
                        />
                    </div>
                    <div className="flex-1 p-5 overflow-auto">
                        <Link href={'/residential'} className="block uppercase tracking-wide text-sm text-emerald-500 font-semibold">Regular House Cleaning</Link>
                        <p className="mt-1 text-lg leading-tight font-medium text-black hover:underline">Estimated Price: $100 - $200 for a 2-3 bedroom house (varies on size).</p>
                        <ul className="mt-2 text-slate-500 pt-4 list-disc list-inside">
                            <li>Regular cleaning of common areas</li>
                            <li>Dusting, vacuuming, and mopping</li>
                            <li>Surface cleaning in kitchens and bathrooms</li>
                        </ul>

                    </div>
                    </div>
                </div>
                </Slider.Slide>
                
                <Slider.Slide>
                <div className="pb-20 pt-5">
                <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                    <div className="relative w-full h-48"> 
                        <Image 
                            src="/images/rotatingsection/reg_cleaning.jpg" 
                            alt="Deep Cleaning" 
                            layout="fill" 
                            objectFit="cover" 
                            className="absolute top-0 left-0"
                        />
                    </div>
                    <div className="flex-1 p-5 overflow-auto">
                        <Link href={'/residential'} className="block uppercase tracking-wide text-sm text-emerald-500 font-semibold">Deep Cleaning</Link>
                        <p className="mt-1 text-lg leading-tight font-medium text-black hover:underline">Estimated Price: $200 - $400 for a 2-3 bedroom house</p>
                        <ul className="mt-2 text-slate-500 pt-4 list-disc list-inside">
                            <li>Thorough cleaning of hard-to-reach areas</li>
                            <li>Attention to detail behind appliances</li>
                            <li>Intensive scrubbing to remove accumulated grime and hard-to-reach stains</li>
                        </ul>

                    </div>
                </div>
                </div>
                </Slider.Slide>

                <Slider.Slide>
                <div className="pb-20 pt-5">
                <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                    <div className="relative w-full h-48">
                        <Image 
                            src="/images/rotatingsection/move_in.jpg" 
                            alt="Window Cleaning" 
                            layout="fill" 
                            objectFit="cover" 
                            className="absolute top-0 left-0"
                        />
                    </div>
                    <div className="flex-1 p-5 overflow-auto">
                        <Link href={'/residential'} className="block uppercase tracking-wide text-sm text-emerald-500 font-semibold">Move-In/Move-Out Cleaning</Link>
                        <p className="mt-1 text-lg leading-tight font-medium text-black hover:underline">Estimated Price: $250 - $500 (varies based on size and condition)..</p>
                        <ul className="mt-2 text-slate-500 pt-4 list-disc list-inside">
                                <li>Cleaning inside cabinets, closets, and appliances</li>
                                <li>Extensive cleaning for newly built or vacated properties</li>
                                <li>Detailed Dusting and Sanitizing of High Areas</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </Slider.Slide>
                <Slider.Slide>
                <div className="pb-20 pt-5">
                <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                    <div className="relative w-full h-48">
                        <Image 
                            src="/images/rotatingsection/constructionclean.jpg" 
                            alt="Window Cleaning" 
                            layout="fill" 
                            objectFit="cover" 
                            className="absolute top-0 left-0"
                        />
                    </div>
                    <div className="flex-1 p-5 overflow-auto">
                        <Link href={'/residential'} className="block uppercase tracking-wide text-sm text-emerald-500 font-semibold">Post-Construction Cleaningg</Link>
                        <p className="mt-1 text-lg leading-tight font-medium text-black hover:underline">Estimated Price: $300 - $600 (depends on the extent of the construction).</p>
                        <ul className="mt-2 text-slate-500 pt-4 list-disc list-inside">
                            <li>Cleaning dust, construction residue, and debris from surfaces and floors.</li>
                            <li>Clear away leftover materials and construction remnants for a tidy, finished look.</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </Slider.Slide>

                <Slider.Slide>
                <div className="pb-20 pt-5">
                <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                    <div className="relative w-full h-48">
                        <Image 
                            src="/images/rotatingsection/window.jpg" 
                            alt="Window Cleaning" 
                            layout="fill" 
                            objectFit="cover" 
                            className="absolute top-0 left-0"
                        />
                    </div>
                    <div className="flex-1 p-5 overflow-auto">
                        <Link href={'/residential'} className="block uppercase tracking-wide text-sm text-emerald-500 font-semibold">Window Cleaning</Link>
                        <p className="mt-1 text-lg leading-tight font-medium text-black hover:underline">Estimated Price: $100 - $200 for a standard home with 10-15 windows.</p>
                        <ul className="mt-2 text-slate-500 pt-4 list-disc list-inside">
                        <li>Cleaning interior and exterior windows</li>
                                <li>Removing smudges, dirt, and grime</li>
                                <li>Clean window sills, tracks, and ledges </li>  
                        </ul>
                    </div>
                    </div>
                </div>
                </Slider.Slide>
            </Slider>
        </div>
        </div>
    );
};

export default RotatingSection;
