import Image from "next/image";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

  import { ArrowRight, Link } from "lucide-react";

const ResServicesSection = () => {
    return (  
        <div className="md:flex md:space-x-5 pt-20 pb-20 items-center justify-center bg-white ">
            <div className=" space-y-8 flex flex-col text-gray-700 md:w-1/2 px-20 ">
            <div className="text-4xl sm:text-6xl h-30 text-center ">Residential Cleaning</div>
            <div className="text-xl  sm:text-2xl  pt-5 pl-2 text-center">
                At Resco Cleaning Services, we take pride in providing top-tier residential cleaning solutions tailored for homeowners in Orlando and the surrounding areas
                </div>
            <div className="text-2xl sm:text-4xl pt-10 pl-2 text-center">
                Our Comprehensive Services
                </div>

            <Accordion type="single" className="pl-4" collapsible>
                <AccordionItem value="item-2">
                <AccordionTrigger
                className="text-emerald-600 text-2xl"      
                >Regular Cleaning</AccordionTrigger>
                <AccordionContent
                    className="border-b border-green-900 text-lg"
                >
                Keep your home consistently clean with our scheduled cleaning services. Whether you prefer weekly, bi-weekly, or monthly visits, our team ensures every corner is spotless.
                <div className="flex text-teal-500 pt-4">
                <div className="text-lg">Get Started</div>
                <ArrowRight className="h-6 w-6 ml-4 " />
            </div>
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                <AccordionTrigger
                className="text-emerald-600 text-2xl"
                >Deep Cleaning</AccordionTrigger>
                <AccordionContent
                className="border-b border-green-900 text-lg"
                >
                For a deeper clean, our thorough deep cleaning service tackles hard-to-reach areas and ensures a comprehensive sanitation of your living spaces.
                <div className="flex text-teal-500 pt-4">
                <div className="text-lg">Get Started</div>

                <ArrowRight className="h-6 w-6 ml-4 " />
            </div>
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                <AccordionTrigger
                    className="text-emerald-600 text-2xl"
                >Move-in/Move-out Cleaning
                </AccordionTrigger>
                <AccordionContent className="border-b border-green-900 text-lg"
                >
                Preparing to move into a new home or vacating a property? Our move-in/move-out cleaning service is designed to leave your old or new home sparkling clean.
                <div className="flex text-teal-500 pt-4">
                <div className="text-lg">Get Started</div>

                <ArrowRight className="h-6 w-6 ml-4 " />
            </div>
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                <AccordionTrigger
                className="text-emerald-600 text-2xl"
                >Specialty Services</AccordionTrigger>
                <AccordionContent className="text-lg">
                Need something extra? We offer customizable services such as post-construction cleaning, party cleanup, and more, tailored to your specific requirements.
                <div className="flex text-teal-500 pt-4">
                <div className="text-lg">Get Started</div>

                <ArrowRight className="h-6 w-6 ml-4 " />
            </div>

                </AccordionContent>
                </AccordionItem>
            </Accordion>
            </div>
            <Image 
                src="/images/res_main1.png" 
                alt="Residential Cleaning Image"
                width={800}
                height={500}
                className="hidden xl:flex xl:w-full xl:h-full xl:rounded-lg xl:object-cover"
            />
        </div>
        
    );
};

export default ResServicesSection;