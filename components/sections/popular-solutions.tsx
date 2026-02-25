import Link from "next/link"
import Image from "next/image"
import { site } from "@/src/content/site";

const services = [
  {
    title: "Aanbouw / uitbouw (achter, zij of hoek)",
    description: "meer leefruimte, grotere keuken of extra kamer",
    image: "/images/aanbouw-prefab.jpg",
    href: "/aanbouw/prefab",
  },
  {
    title: "Dakopbouw",
    description: "een volledige extra verdieping of extra slaapkamers",
    image: "/images/aanbouw-traditioneel.jpg",
    href: "/aanbouw/traditioneel",
  },
  {
    title: "Dakkapel",
    description: "snel meer licht en stahoogte op zolder",
    image: "/images/dakopbouw.jpg",
    href: "/opbouw/prefab",
  },
]

export function ServicesGrid() {
  return <Solutions />
}

export function Solutions() {
  const { home } = site.pages;

  return (
    <section className="py-8 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
          {home.sections.solutionsTitle}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-4 aspect-square w-full max-w-[280px]">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground md:text-xl">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
