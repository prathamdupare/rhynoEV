import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4 md:px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <span>Rhyno EV</span>
        </div>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="#"
            className="hover:text-primary-foreground/80"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="hover:text-primary-foreground/80"
            prefetch={false}
          >
            Products
          </Link>
          <Link
            href="#"
            className="hover:text-primary-foreground/80"
            prefetch={false}
          >
            Fleet Solutions
          </Link>
          <Link
            href="#"
            className="hover:text-primary-foreground/80"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-primary-foreground/80 hover:text-primary-foreground"
            prefetch={false}
          >
            <TwitterIcon className="w-5 h-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="#"
            className="text-primary-foreground/80 hover:text-primary-foreground"
            prefetch={false}
          >
            <LinkedinIcon className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="#"
            className="text-primary-foreground/80 hover:text-primary-foreground"
            prefetch={false}
          >
            <InstagramIcon className="w-5 h-5" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
