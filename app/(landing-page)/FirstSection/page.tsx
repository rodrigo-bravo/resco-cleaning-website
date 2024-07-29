'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";

const FirstSection = () => {
    return (
        <div className="pt-12 px-10 md:px-5 lg:px-20 lg:pt-20 lg:grid xl:grid-cols-2 gap-4 lg:flex items-center justify-center 2xl:flex">
            <div className="p-5 pt-10 lg:pt-0 text-center xl:text-left xl:pl-10 xl:max-w-xl">
                <div className="flex justify-center items-center">
                    <Image 
                        src="/images/logo/new-logo-transformed.webp" 
                        alt="Residential Cleaning Image"
                        width={200}
                        height={500}
                        className="flex rounded-lg"
                    />
                </div>
                <h1 className="text-4xl md:text-5xl pt-5 lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter text-center">
                    Resco Cleaning Services
                </h1> 
                <p className="text-center md:px-20 text-base md:text-lg mt-4 xl:px-0 text-slate-600">
                We offer top-notch residential and commercial cleaning services. Our professional team ensures a spotless environment with exceptional attention to detail. 
                </p> 
                <p className="text-center mt-4 text-slate-600 text-bold"><b>Se Habla Español. Contáctanos a través del celular: 407-860-8143</b></p>
                <p className="text-center  text-slate-600 text-bold"><b>We speak English. Contact us over the phone: 407-860-8143</b></p>
                <p className="text-center mt-4 text-slate-600 text-bold pb-5"><b>Email: cleaningresco@gmail.com</b></p>
                <div className="flex justify-center xl:text-center items-center h-full">
                  <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center py-3 text-lg font-medium text-center text-white border border-transparent rounded-md px-7 bg-emerald-500"
                  >
                      Contact
                  </Link>
                </div>
            </div>
            <div className="py-3 sm:py-4 rounded-xl">
                <img
                    src="/images/miami_office1.png"
                    alt="Office"
                    className="block p-10 lg:p-0 lg:block lg:w-full lg:object-cover"
                />
            </div>
        </div>
    )
};

export default FirstSection;
