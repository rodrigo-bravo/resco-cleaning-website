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
        <div className=" md:flex md:space-x-5 pt-20 pb-20 items-center justify-center bg-white ">
            <div className=" space-y-8 flex flex-col text-gray-700 md:w-1/2 px-20 ">
            <div className="text-4xl sm:text-6xl h-30 text-center ">Commercial Cleaning</div>
            <div className="text-xl  sm:text-2xl  pt-5 pl-2 text-center">
            At Resco Cleaning Services, we take pride in providing exceptional commercial cleaning solutions tailored for businesses throughout Florida, with our operations based in Orlando.
                </div>
            <div className="text-2xl sm:text-4xl pt-10 pl-2 text-center">
                Our Comprehensive Services
                </div>

            <Accordion type="single" className="pl-4" collapsible>
                <AccordionItem value="item-2">
                <AccordionTrigger
                className="text-emerald-600 text-2xl"      
                >Office Space Cleaning</AccordionTrigger>
                <AccordionContent
                    className="border-b border-green-900 text-lg"
                >
                Office space cleaning maintains a professional environment with tasks like dusting, trash removal, vacuuming, and mopping. High-touch areas, such as keyboards and door handles, are sanitized. Restroom cleaning and supply replenishment ensure a functional and hygienic workspace.                <div className="flex text-teal-500 pt-4">
                <div className="text-lg">Get Started</div>
                <ArrowRight className="h-6 w-6 ml-4 " />
            </div>
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                <AccordionTrigger
                className="text-emerald-600 text-2xl"
                >Retail Store Cleaning</AccordionTrigger>
                <AccordionContent
                className="border-b border-green-900 text-lg"
                >
                Retail store cleaning ensures a welcoming shopping experience by maintaining clean floors, dust-free displays, and clear windows. Services include sweeping, vacuuming, and mopping, along with regular upkeep of shelving and storefronts to enhance the store's appearance and customer satisfaction.
                <div className="flex text-teal-500 pt-4">
                <div className="text-lg">Get Started</div>

                <ArrowRight className="h-6 w-6 ml-4 " />
            </div>
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                <AccordionTrigger
                    className="text-emerald-600 text-2xl"
                >Industrial Facility Cleaning
                </AccordionTrigger>
                <AccordionContent className="border-b border-green-900 text-lg"
                >
                Industrial facility cleaning involves maintaining machinery, floors, and ventilation systems. Dust and debris are removed from equipment, and floors are scrubbed using industrial-grade tools. Regular cleaning of ventilation systems ensures airflow and reduces contamination, promoting a safe and efficient industrial environment.                <div className="flex text-teal-500 pt-4">
                <div className="text-lg">Get Started</div>

                <ArrowRight className="h-6 w-6 ml-4 " />
            </div>
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                <AccordionTrigger
                className="text-emerald-600 text-2xl"
                >Healthcare Facility Cleaning</AccordionTrigger>
                <AccordionContent className="text-lg">
                Healthcare facility cleaning provides a sterile environment with thorough disinfection of patient rooms and surgical suites. Linens are changed, medical waste managed, and high-touch surfaces disinfected to prevent infection. This ensures a safe and hygienic setting for both patients and staff.<div className="flex text-teal-500 pt-4">
                <div className="text-lg">Get Started</div>

                <ArrowRight className="h-6 w-6 ml-4 " />
            </div>

                </AccordionContent>
                </AccordionItem>
            </Accordion>
            </div>
        <Image 
            src="/images/clean_office.png" 
            alt="Residential Cleaning Image for " 
            width={800}
            height={500}
            className="hidden xl:flex rounded-lg"
        />
        </div>
        
    );
};

export default ResServicesSection;