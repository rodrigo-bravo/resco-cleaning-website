'use client'

import { useEffect, useState } from "react";
import ActionButtons from "./buttons";
import Logo from "./logo";
import { NavigationMenuBar } from "./menu";

const Navbar = () => {

    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if ( window.scrollY > 0 ) {
                setHasScrolled(true)
            }
            else {
                setHasScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    


    const navbarClasses = `flex items-center justify-center space-x-20 md:px-10 bg-whitesticky top-0 z-50
    ${hasScrolled ? 'shadow-lg' : ''}`

    return (
        <div className={navbarClasses}>
            <div className ="flex w-2/3 h-16 md:w-9/16 ">
                <Logo />
                <NavigationMenuBar />
            </div>
            <ActionButtons />
        </div>
    );
};

export default Navbar;