import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/src/content/site";

const WhatsAppIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
)

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 font-bold text-2l mb-4">
              <span className="text-primary text-3xl">KM</span>
              <span>Aanbouw</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-4 max-w-[220px]">
              {site.brand.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Diensten</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/aanbouw/prefab-aanbouw" className="hover:text-background transition-colors">
                  Prefab aanbouw
                </Link>
              </li>
              <li>
                <Link href="/aanbouw/prefab-uitbouw" className="hover:text-background transition-colors">
                  Prefab uitbouw
                </Link>
              </li>
              <li>
                <Link href="/aanbouw/traditionele-aanbouw" className="hover:text-background transition-colors">
                  Traditionele aanbouw
                </Link>
              </li>
              <li>
                <Link href="/opbouw/prefab-opbouw" className="hover:text-background transition-colors">
                  Prefab opbouw
                </Link>
              </li>
              <li>
                <Link href="/dakkapel/dakkapel-laten-plaatsen" className="hover:text-background transition-colors">
                  Dakkapel
                </Link>
              </li>
              <li>
                <Link href="/aanbouw/aanbouw-kosten" className="hover:text-background transition-colors">
                  Kosten berekenen
                </Link>
              </li>
            </ul>
          </div>

          {/* Over ons */}
          <div>
            <h3 className="font-semibold mb-4">Over ons</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/over-ons" className="hover:text-background transition-colors">
                  Over KM Aanbouw
                </Link>
              </li>
              <li>
                <Link href="/garanties" className="hover:text-background transition-colors">
                  Garanties
                </Link>
              </li>
              <li>
                <Link href="/projecten" className="hover:text-background transition-colors">
                  Projecten
                </Link>
              </li>
              <li>
                <Link href="/recensies" className="hover:text-background transition-colors">
                  Recensies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/gratis-offerte" className="mt-1 inline-flex items-center justify-center bg-[#f26522] hover:bg-[#e55511] text-white font-semibold px-4 py-2 rounded-full transition-colors text-sm">
                  Gratis offerte
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-2 text-sm text-background/70">
              <a href={`tel:${site.brand.phoneE164}`} className="flex items-center gap-2 hover:text-background transition-colors">
                <Phone className="h-4 w-4" />
                {site.brand.phoneDisplay}
              </a>
              <div className="flex items-center gap-2 text-[#fcfcfcbf] hover:text-background transition-colors">
                <WhatsAppIcon />
                <Link
                  href={`https://wa.me/${site.brand.whatsappWaMe}`}
                  className="flex items-center gap-2"
                  aria-label={`WhatsApp ${site.brand.name} op ${site.brand.phoneDisplay}`}
                >
                  WhatsApp: {site.brand.phoneDisplay}
                </Link>
              </div>
              <a href={`mailto:${site.brand.email}`} className="flex items-center gap-2 hover:text-background transition-colors">
                <Mail className="h-4 w-4" />
                {site.brand.email}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {site.brand.serviceArea}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>© {new Date().getFullYear()} KM Aanbouw. Alle rechten voorbehouden.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-background transition-colors">
                Privacy
              </Link>
              <Link href="/algemene-voorwaarden" className="hover:text-background transition-colors">
                Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
