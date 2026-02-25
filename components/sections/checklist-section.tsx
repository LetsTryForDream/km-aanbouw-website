import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"

interface ChecklistSectionProps {
  title: string
  items: string[]
  images: string[]
}

export function ChecklistSection({ title, items, images }: ChecklistSectionProps) {
  return (
    <section className="py-16 lg:py-24 scroll-mt-32">
      <div className="max-w-7xl container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Checklist */}
          <div className="max-w-3xl">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                {title}
              </h2>
            )}
            <ul className="space-y-4">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
{/* <section id="voordelen" className="py-16 lg:py-24 scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {page.voordelen.title}
            </h2>
            <ul className="space-y-3 mb-8">
              {page.voordelen.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section> */}
          {/* Right - Images */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Project afbeelding ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface CTABannerProps {
  title?: string
  buttonText?: string
  buttonHref?: string
}

export function CTABanner({
  title = "Heeft u specifieke wensen voor uw aanbouw? De Aanbouw Expert levert maatwerk.",
  buttonText = "Gratis offerte",
  buttonHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0077be] rounded-2xl py-16 px-8 text-center">
          <h2 className="text-white text-2xl md:text-3xl font-bold italic max-w-3xl mx-auto mb-8 leading-relaxed">
            {title}
          </h2>
          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center bg-white text-[#0077be] font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  )
}
