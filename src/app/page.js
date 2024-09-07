import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export default function Component() {
  const usp = [
    {
      feature: "LFP Battery",
      description:
        "Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances Rhyno's longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance. Each battery undergoes rigorous waterproofing tests according to IP76 standards. Our technology ensures lasting durability.",
    },
    {
      feature: "Wider tyres",
      description:
        "Featuring first-of-its-kind, 9.5-inch wider tyres that ensure stability on different terrains such as wet roads, mud, and sand, allowing for leaning turns and reducing skidding.",
    },
    {
      feature: "Range prediction",
      description:
        "Rhyno provides precise information about the remaining battery, allowing riders to ride with peace of mind and avoid range anxiety, a feature often overlooked by budget-friendly electric scooters.",
    },
    {
      feature: "Extraordinary Experience",
      description:
        "Rhyno is more than just a mode of transportation. It offers an experience of sheer comfort and style, with a seamless fusion of minimalism, sophistication, and a touch of masculinity.",
    },
    {
      feature: "Rugged and simple Design",
      description:
        "Rhyno is designed to be raw, rugged, and practical, moving away from fragile plastic toys. Its simplicity ensures that even local mechanics can understand and repair most of it, reducing the time spent at service stations for complex repairs.",
    },
  ];

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <section className="h-[80dvh] w-full overflow-hidden">
          <img
            src="/rhyno.png"
            alt="EV Bike"
            className="h-full w-full object-cover object-center"
            width="1600"
            height="800"
            style={{ aspectRatio: "1600/800", objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Let's Elevate Your Ride Experience With Rhyno{" "}
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Where Superiority Meets Style."
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Explore Now
            </Link>
          </div>
        </section>

        <section className="w-full px-[300px] my-20">
          <Carousel className="w-full h-full ">
            <CarouselContent>
              {usp.map((item) => (
                <CarouselItem>
                  <Card className="h-[300px] flex">
                    <CardContent className="flex flex-col w-full gap-6 items-center justify-center p-6">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                          <div className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h3 className="text-2xl font-semibold">
                          {item.feature}
                        </h3>
                      </div>
                      <div className="text-muted-foreground">
                        {item.description}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
              )
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </main>
      <footer className="bg-muted py-12">
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
              href="#"
              className="text-muted-foreground hover:underline"
              prefetch={false}
            >
              Website Policy
            </Link>
          </div>
          <div className="grid gap-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <Link
              href="#"
              className="text-muted-foreground hover:underline"
              prefetch={false}
            >
              Contact Us
            </Link>
          </div>
          <div className="grid gap-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <Link
              href="#"
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
          <div className="grid gap-4">
            <h3 className="text-lg font-semibold">Social</h3>
            <div className="flex gap-4"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BatteryIcon(props) {
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
      <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
      <line x1="22" x2="22" y1="11" y2="13" />
    </svg>
  );
}

function GaugeIcon(props) {
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
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PlugIcon(props) {
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
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  );
}
