"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string}[] = [
  {
    title: "Orlando Area",
    href: "/orlando",
    description: "Residential & Commercial Cleaning",
  },
  {
    title: "Kissimmee",
    href: "/kissimmee",
    description: "Residential & Commercial Cleaning",
  },
  {
    title: "Miami",
    href: "/miami",
    description: "Commercial Cleaning",
  },
  {
    title: "Tampa",
    href: "/tampa",
    description: "Commercial Cleaning",
  },
  {
    title: "Jacksonville",
    href: "/jacksonville",
    description: "Commercial Cleaning",
  },
  {
    title: "Fort Lauderdale",
    href: "/fortlauderdale",
    description: "Commercial Cleaning",
  },
]

export function NavigationMenuBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex md:space-x-4 text-white">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr] max-w-full w-full">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                  <div className="mb-2 mt-4 text-lg font-lg">
                    <Image
                          src="/images/logo/transparent-logo.png"
                          alt="Resco Logo"
                          width={70}
                          height={70}
                          className=""
                      />
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Resco Cleaning Services offers expert cleaning solutions for both residential and commercial spaces, 
                    ensuring pristine environments that shine and elevate.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/residential">
              <div className="flex items-center">
                    <div className="mr-2"> 
                        <Image src="/images/house.png" alt="House" width={100} height={100} className="w-8 h-8" />
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold">Residential Cleaning</h2>
                    </div>
                </div>
                <p className="mt-2">Regular Cleaning, Deep Cleaning, Move-in/Move-out</p>
              </ListItem>
              <ListItem href="/commercial">
              <div className="flex items-center">
                    <div className="mr-2"> 
                        <Image src="/images/office-building.png" alt="office" width={100} height={100} className="w-8 h-8" />
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold">Commercial Cleaning</h2>
                    </div>
                </div>
                <p className="mt-2">Office Cleaning, Retail Space Cleaning, Janitorial Services</p>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Locations</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/faqs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              FAQs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center">
              <div className="text-sm font-medium leading-none">{title}</div>
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
