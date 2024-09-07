"use client";
import { ChevronsDown, Github, Instagram, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const routeList = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about-us",
    label: "About Us",
  },
  {
    href: "/contact-us",
    label: "Contact us",
  },
  {
    href: "#faq",
    label: "Pre-Book Now",
  },
];

const vehicleList = [
  {
    title: "SE03 Lite",
    description: "Highlight how your product solves user problems.",
    path: "se03",
  },
  {
    title: "SE03",
    description:
      "Leverages social proof elements to establish trust and credibility.",

    path: "se03-lite",
  },
  {
    title: "SE03 Max",
    description:
      "Make your lead capture form visually appealing and strategically.",

    path: "se03-max",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="my-3  border   w-full shadow-md backdrop-filter backdrop-blur-lg lg:max-w-screen-xl top-5 mx-auto sticky  z-40 rounded-2xl flex justify-between items-center p-2 ">
      <Link href="/" className="font-bold text-lg flex items-center">
        Rhyno EV
      </Link>

      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
                    FossPage
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              Products
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className=" w-[300px]">
                <ul className="flex flex-col gap-2">
                  {vehicleList.map(({ title, description, path }) => (
                    <Link href={path} className="text-base px-2">
                      <li
                        key={title}
                        className="rounded-md p-3 text-sm hover:bg-muted"
                      >
                        <p className="mb-1 font-semibold leading-none text-foreground">
                          {title}
                        </p>
                        <p className="line-clamp-2 text-muted-foreground">
                          {description}
                        </p>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link
            href="https://github.com"
            aria-label="View on GitHub"
            target="_blank"
          >
            <Github className="size-5" />
          </Link>
        </Button>
      </div>

      <div className="hidden lg:flex">
        <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link
            href="https://www.instagram.com/rhyno.in/"
            aria-label="View on GitHub"
            target="_blank"
          >
            <Instagram className="size-5" />
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
