import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="bg-background text-foreground">
      <main>
        <section className="bg-muted/20 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold">
                  Welcome to Rhyno EV
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl">
                  Where innovation meets sustainability
                </p>
                <p className="text-muted-foreground">
                  Established in 2019 by an automotive engineer with a vision
                  for sustainable and robust mobility solutions, Rhyno EV is not
                  just a company; it's a collective effort of a dynamic team of
                  young individuals passionately driving innovation in the
                  electric vehicle industry. We believe in engineering solutions
                  that solve problems.
                </p>
                <div className="flex gap-4">
                  <Button>Explore Products</Button>
                  <Link href="/contact-us">
                    <Button variant="outline">Contact Us</Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="/rhyno.png"
                  alt="Rhyno EV Scooter"
                  width={600}
                  height={400}
                  className="rounded-lg"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/rhyno.png"
                  alt="Rhyno EV Scooter"
                  width={600}
                  height={400}
                  className="rounded-lg"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Redefining Electric Scooters
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl">
                  Engineered for safety and durability
                </p>
                <p className="text-muted-foreground">
                  With our first product, we've taken a bold step to create
                  something more than just a vehicle; it's a unique experience
                  of elegance, comfort, and style, addressing the pitfalls of
                  conventional electric scooters. Our design prioritizes safety,
                  eliminating concerns of fires and ensuring a longer battery
                  lifespan with our battery technology. Perfectly suited for
                  fleet operators, especially in tourist-centric locations like
                  Goa, our rugged yet aesthetically appealing scooters are
                  engineered for longevity and reliability. Join us as we
                  pioneer a new era in sustainable and dependable electric
                  transportation.
                </p>
                <div className="flex gap-4">
                  <Button>Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function RatIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4" />
      <path d="M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3" />
      <path d="M13.2 18a3 3 0 0 0-2.2-5" />
      <path d="M13 22H4a2 2 0 0 1 0-4h12" />
      <path d="M16 9h.01" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
