import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4 md:px-6">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Policies</h3>
          <Link
            href="#"
            className="text-muted-foreground hover:underline"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:underline"
            prefetch={false}
          >
            Refund Policy
          </Link>
          <Link
            href="/https://www.linkedin.com/company/rhyno-wheels?originalSubdomain=in"
            className="text-muted-foreground hover:underline"
            prefetch={false}
          >
            Career
          </Link>
        </div>
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Contact</h3>
          <Link
            href="/contact-us"
            className="text-muted-foreground hover:underline"
            prefetch={false}
          >
            Contact Us
          </Link>
        </div>
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Products</h3>
          <Link
            href="/se03"
            className="text-muted-foreground hover:underline"
            prefetch={false}
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:underline"
            prefetch={false}
          >
            Rentals
          </Link>
        </div>
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Careers</h3>
          <Link
            href="#"
            className="text-muted-foreground hover:underline"
            prefetch={false}
          >
            Careers
          </Link>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
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
      </div>
    </footer>
  );
};

export default Footer;
