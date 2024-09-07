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
    <div className="bg-background text-card-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:py-16">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Compare Rhyno Electric Vehicles
          </h1>
          <p className="mt-2 text-muted-foreground">
            Find the perfect Rhyno model for your needs.
          </p>
        </div>
        <div className="overflow-x-auto rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="border-b px-4 py-3 font-medium text-muted-foreground">
                  Specification
                </TableHead>
                <TableHead className="border-b px-4 py-3 font-medium text-muted-foreground">
                  Rhyno SE03 Lite
                </TableHead>
                <TableHead className="border-b px-4 py-3 font-medium text-muted-foreground">
                  Rhyno SE03
                </TableHead>
                <TableHead className="border-b px-4 py-3 font-medium text-muted-foreground">
                  Rhyno SE03 Max
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Image Row */}
              <TableRow className="border-b hover:bg-muted/40">
                <TableCell className="px-4 py-3 font-medium"> </TableCell>
                <TableCell className="px-4 py-3">
                  <img
                    src="/next.svg"
                    alt="Rhyno SE03 Lite"
                    className="mx-auto"
                  />
                </TableCell>
                <TableCell className="px-4 py-3">
                  <img src="/vercel.svg" alt="Rhyno SE03" className="mx-auto" />
                </TableCell>
                <TableCell className="px-4 py-3">
                  <img
                    src="next.svg"
                    alt="Rhyno SE03 Max"
                    className="mx-auto"
                  />
                </TableCell>
              </TableRow>

              {/* Specification Rows */}
              <TableRow className="border-b hover:bg-muted/40">
                <TableCell className="px-4 py-3 font-medium">Battery</TableCell>
                <TableCell className="px-4 py-3">1.8Kwh</TableCell>
                <TableCell className="px-4 py-3">2.7Kwh</TableCell>
                <TableCell className="px-4 py-3">2.7Kwh</TableCell>
              </TableRow>
              <TableRow className="border-b hover:bg-muted/40">
                <TableCell className="px-4 py-3 font-medium">
                  Battery Features
                </TableCell>
                <TableCell className="px-4 py-3">
                  LFP with 1500 cycles
                  <br />
                  Active Balancing
                  <br />
                  Waterproof (IP67)
                </TableCell>
                <TableCell className="px-4 py-3">
                  LFP with 1500 cycles
                  <br />
                  Active Balancing
                  <br />
                  Waterproof (IP67)
                </TableCell>
                <TableCell className="px-4 py-3">
                  LFP with 1500 cycles
                  <br />
                  Active Balancing
                  <br />
                  Waterproof (IP67)
                </TableCell>
              </TableRow>
              <TableRow className="border-b hover:bg-muted/40">
                <TableCell className="px-4 py-3 font-medium">
                  Battery Warranty
                </TableCell>
                <TableCell className="px-4 py-3">3 years</TableCell>
                <TableCell className="px-4 py-3">3 years</TableCell>
                <TableCell className="px-4 py-3">3 years</TableCell>
              </TableRow>
              <TableRow className="border-b hover:bg-muted/40">
                <TableCell className="px-4 py-3 font-medium">
                  Charging Time
                </TableCell>
                <TableCell className="px-4 py-3">3 hours (12A)</TableCell>
                <TableCell className="px-4 py-3">4 hours (12A)</TableCell>
                <TableCell className="px-4 py-3">4 hours (12A)</TableCell>
              </TableRow>
              <TableRow className="border-b hover:bg-muted/40">
                <TableCell className="px-4 py-3 font-medium">Motor</TableCell>
                <TableCell className="px-4 py-3">1500W</TableCell>
                <TableCell className="px-4 py-3">1500W</TableCell>
                <TableCell className="px-4 py-3">2000W</TableCell>
              </TableRow>
              <TableRow className="border-b hover:bg-muted/40">
                <TableCell className="px-4 py-3 font-medium">
                  Max Speed
                </TableCell>
                <TableCell className="px-4 py-3">55 km/h</TableCell>
                <TableCell className="px-4 py-3">55 km/h</TableCell>
                <TableCell className="px-4 py-3">65 km/h</TableCell>
              </TableRow>
              <TableRow className="border-b hover:bg-muted/40">
                <TableCell className="px-4 py-3 font-medium">
                  Warranty on Electronics
                </TableCell>
                <TableCell className="px-4 py-3">1 year</TableCell>
                <TableCell className="px-4 py-3">1 year</TableCell>
                <TableCell className="px-4 py-3">1 year</TableCell>
              </TableRow>
              <TableRow className="border-b hover:bg-muted/40">
                <TableCell className="px-4 py-3 font-medium">
                  Max Range (@30km/h)
                </TableCell>
                <TableCell className="px-4 py-3">100 km</TableCell>
                <TableCell className="px-4 py-3">150 km</TableCell>
                <TableCell className="px-4 py-3">120 km</TableCell>
              </TableRow>
              <TableRow className="border-b hover:bg-muted/40">
                <TableCell className="px-4 py-3 font-medium">
                  Max Range (@45km/h)
                </TableCell>
                <TableCell className="px-4 py-3">90 km</TableCell>
                <TableCell className="px-4 py-3">110 km</TableCell>
                <TableCell className="px-4 py-3">100 km</TableCell>
              </TableRow>
              <TableRow className="border-b hover:bg-muted/40">
                <TableCell className="px-4 py-3 font-medium">
                  Max Range (@full speed)
                </TableCell>
                <TableCell className="px-4 py-3">60 km</TableCell>
                <TableCell className="px-4 py-3">90 km</TableCell>
                <TableCell className="px-4 py-3">80 km</TableCell>
              </TableRow>
              <TableRow className="hover:bg-muted/40">
                <TableCell className="px-4 py-3 font-medium">
                  Other Key Benefits
                </TableCell>
                <TableCell className="px-4 py-3">
                  Fire-safe Battery
                  <br />
                  Range prediction
                  <br />
                  Comfortable ride
                  <br />
                  Stable and safe
                </TableCell>
                <TableCell className="px-4 py-3">
                  Fire-safe Battery
                  <br />
                  Range prediction
                  <br />
                  Comfortable ride
                  <br />
                  Stable and safe
                </TableCell>
                <TableCell className="px-4 py-3">
                  Fire-safe Battery
                  <br />
                  Range prediction
                  <br />
                  Comfortable ride
                  <br />
                  Stable and safe
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
