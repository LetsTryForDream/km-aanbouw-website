import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

export function ServiceArea() {
  return (
    <section className="relative w-full">
      <div className="relative mx-4 lg:mx-8 rounded-2xl overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')`,
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 lg:py-32">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Werkgebied: heel Nederland
            </h2>
            <p className="text-white">
              KM Aanbouw werkt door heel Nederland, inclusief Randstad, Brabant, Limburg, Gelderland, Overijssel, Groningen, Friesland, Drenthe, Flevoland en Zeeland. Zie de pagina ‘Werkgebieden’ voor alle steden.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
