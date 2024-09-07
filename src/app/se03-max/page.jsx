import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function Component() {
  return (
    <div className="w-full">
      <section className="relative h-[500px] overflow-hidden">
        <img
          src="/rhyno.png"
          alt="Rhyno SE03 Lite"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center"
          style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent" />
        <div className="absolute   inset-0 flex flex-col items-center justify-center gap-6 px-4 text-center text-primary-foreground">
          <div className=" backdrop-blur-lg mt-20 rounded">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Rhyno SE03 Max
            </h1>
            <p className="text- max-w-2xl text-lg sm:text-xl">
              Experience the ultimate in urban mobility with the Rhyno SE03
              Lite. Designed for the modern commuter, this electric vehicle
              offers unparalleled performance and style.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button size="lg">Buy Now</Button>
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center gap-4">
            <img
              src="/rhyno.png"
              alt="Rhyno SE03 Lite in Black"
              width={400}
              height={400}
              className="aspect-square w-full rounded-lg object-cover"
            />
            <Button variant="outline" size="sm">
              Black
            </Button>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img
              src="/rhyno.png"
              alt="Rhyno SE03 Lite in White"
              width={400}
              height={400}
              className="aspect-square w-full rounded-lg object-cover"
            />
            <Button variant="outline" size="sm">
              White
            </Button>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img
              src="/rhyno.png"
              alt="Rhyno SE03 Lite in Red"
              width={400}
              height={400}
              className="aspect-square w-full rounded-lg object-cover"
            />
            <Button variant="outline" size="sm">
              Red
            </Button>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-12 md:py-16 lg:py-20">
        <div className="grid gap-8">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Key Details</h2>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Model</TableCell>
                  <TableCell>Rhyno SE03 Lite</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Top Speed</TableCell>
                  <TableCell>25 mph</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Range</TableCell>
                  <TableCell>30 miles</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Battery</TableCell>
                  <TableCell>36V, 10Ah</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Motor</TableCell>
                  <TableCell>350W brushless</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Lightweight Aluminum Frame</TableCell>
                  <TableCell>Yes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dual Disc Brakes</TableCell>
                  <TableCell>Yes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>LED Lighting</TableCell>
                  <TableCell>Yes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Foldable Design</TableCell>
                  <TableCell>Yes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Price</TableCell>
                  <TableCell>$799</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Availability</TableCell>
                  <TableCell>In Stock</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-center">
            <Button size="lg">Buy Now</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
