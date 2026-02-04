import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/src/content/site";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl mb-4">
              <span className="text-accent text-2xl">KM</span>
              <span>Aanbouw</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              {site.brand.tagline}
            </p>
            <div className="flex flex-col gap-2 text-sm text-background/70">
              <a href={`tel:${site.brand.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-background transition-colors">
                <Phone className="h-4 w-4" />
                {site.brand.phone}
              </a>
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

          {/* Werkgebieden */}
          <div>
            <h3 className="font-semibold mb-4">Werkgebieden</h3>
            <ul className="space-y-2 text-sm text-background/70">
              {site.workAreas.slice(0, 6).map((area) => (
                <li key={area.slug}>
                  <Link href={`/werkgebieden/${area.slug}`} className="hover:text-background transition-colors">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Over ons */}
          <div>
            <h3 className="font-semibold mb-4">Over ons</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/over-ons/het-bedrijf" className="hover:text-background transition-colors">
                  Het bedrijf
                </Link>
              </li>
              <li>
                <Link href="/over-ons/garanties" className="hover:text-background transition-colors">
                  Garanties
                </Link>
              </li>
              <li>
                <Link href="/projecten" className="hover:text-background transition-colors">
                  Projecten
                </Link>
              </li>
              <li>
                <Link href="/over-ons/recensies" className="hover:text-background transition-colors">
                  Recensies
                </Link>
              </li>
              <li>
                <Link href="/over-ons/blog" className="hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>© {new Date().getFullYear()} KM Aanbouw. Alle rechten voorbehouden.</p>
            <div className="flex items-center gap-4">
              <span>KvK: {site.brand.kvk}</span>
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
