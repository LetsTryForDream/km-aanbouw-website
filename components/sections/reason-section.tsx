import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function ReasonSection() {
  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="mb-8 text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
              Welke aanbouw past bij jou?
            </h1>
            <ul className="mb-8 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" strokeWidth={3} />
                <span className="text-muted-foreground">Prefab aanbouw – snelle plaatsing, strak proces, voorspelbare planning</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" strokeWidth={3} />
                <span className="text-muted-foreground">Prefab uitbouw – vaak achterzijde woning voor extra leefkeuken/woonkamer</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" strokeWidth={3} />
                <span className="text-muted-foreground">Traditionele aanbouw – ideaal bij bijzondere wensen, metselwerk en detailafstemming</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" strokeWidth={3} />
                <span className="text-muted-foreground">Aanbouw-opties – serre, keukenaanbouw, erker, garage, schuur, kelder, woonkamer, slaapkamer</span>
              </li>
            </ul>
          </div>

          {/* Right - Project Images Grid */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-3 gap-4">
              {/* Top row */}
              <div className="col-span-1 col-start-2">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/project-1.jpg"
                    alt="Serre project"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/project-2.jpg"
                    alt="Moderne aanbouw"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              
              {/* Middle row */}
              <div className="col-span-1 row-span-2">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/project-3.jpg"
                    alt="Veranda project"
                    width={200}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/project-4.jpg"
                    alt="Balkon uitbouw"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/project-5.jpg"
                    alt="Dakkapel project"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              
              {/* Bottom row */}
              <div className="col-span-1 col-start-3">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/project-1.jpg"
                    alt="Extra project"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
