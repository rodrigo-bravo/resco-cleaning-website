import { Button } from "@/components/ui/button";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import { AlignJustify, Globe } from "lucide-react";
import Link from "next/link";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";

const ActionButtons = () => {
    return (
        <div>
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger>
                        <AlignJustify />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                        <SheetDescription>
                            <p className="text-center pt-6">MENU</p>
                            <hr className="border-t border-gray-400 w-full mt-3" />
                            <div className="flex flex-col space-y-4 items-center w-full text-lg text-black mt-6">
                                <Link href={'/'} passHref>Home</Link>
                                <Link href={'/residential'} passHref>Residential Services</Link>
                                <Link href={'/commercial'} passHref>Commercial Services</Link>
                                <Link href={'/contact'} passHref>Contact</Link>
                                <Link href={'/about'} passHref>About Us</Link>
                                <Link href={'/faqs'} passHref>FAQs</Link>
                            </div>
                            <p className="pt-10 text-xs text-center mt-4">SERVICE AREAS</p>
                            <hr className="border-t border-gray-400 w-full mt-4" />
                            <div className="flex flex-col items-center w-full text-md text-black mt-6 space-y-4">
                                <Link href={'/orlando'} passHref>Orlando</Link>
                                <Link href={'/kissimmee'} passHref>Kissimmee</Link>
                                <Link href={'/miami'} passHref>Miami</Link>
                                <Link href={'/tampa'} passHref>Tampa</Link>
                                <Link href={'/jacksonville'} passHref>Jacksonville</Link>
                                <Link href={'/fortlauderdale'} passHref>Fort Lauderdale</Link>
                            </div>
                        </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

        <div className="hidden py-5  md:flex md:space-x-4 items-center">
            <div className="border-r border-white">
                <div className="mr-4">
                    <Globe className="h-6 w-6 text-white-700" />
                </div>
            </div>

            <Link href={'/'} passHref className="text-white">
                Home
                </Link>

            <Link href={'/contact'} passHref className="text-white">
            <Button className="text-md rounded-sm">Contact Sales</Button>
                </Link>

        </div>
        </div>
    );
};

export default ActionButtons;