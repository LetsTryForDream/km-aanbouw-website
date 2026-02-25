import type { Metadata } from "next";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Hero } from "@/components/sections/hero";

export const metadata: Metadata = {
  title: site.pages.algVoorwaarden.meta.title,
  description: site.pages.algVoorwaarden.meta.description,
};

export default function AlgemeneVoorwaardenPage() {
  const page = site.pages.algVoorwaarden;

  return (
    <>
      <Breadcrumbs items={[{ label: "Algemene voorwaarden" }]} />

      <Hero
        kicker={page.hero.kicker}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        ctas={[]}
        showGrid={false}
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>1. Definities</h2>
            <p>
              In deze algemene voorwaarden wordt verstaan onder:
            </p>
            <ul>
              <li><strong>Opdrachtnemer:</strong> KM Aanbouw</li>
              <li><strong>Opdrachtgever:</strong> de natuurlijke of rechtspersoon die de opdracht verstrekt</li>
              <li><strong>Overeenkomst:</strong> de offerte en/of aannemingsovereenkomst</li>
            </ul>

            <h2>2. Toepasselijkheid</h2>
            <p>
              Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en leveringen van KM Aanbouw, 
              tenzij schriftelijk anders overeengekomen.
            </p>

            <h2>3. Offertes en prijzen</h2>
            <ul>
              <li>Offertes zijn vrijblijvend en geldig gedurende de vermelde termijn.</li>
              <li>Prijzen zijn inclusief BTW, tenzij anders vermeld.</li>
              <li>Onvoorziene kosten (bijv. slechte fundering) worden vooraf besproken en apart geoffreerd.</li>
            </ul>

            <h2>4. Uitvoering en planning</h2>
            <ul>
              <li>Wij streven naar uitvoering conform de afgesproken planning.</li>
              <li>Vertragingen door weer, leveranciers of onvoorziene omstandigheden worden tijdig gecommuniceerd.</li>
              <li>Wijzigingen in de opdracht kunnen invloed hebben op planning en prijs.</li>
            </ul>

            <h2>5. Meer- en minderwerk</h2>
            <ul>
              <li>Wijzigingen in de opdracht worden schriftelijk vastgelegd.</li>
              <li>Meerwerk wordt vooraf besproken en apart geoffreerd of verrekend.</li>
              <li>Minderwerk wordt verrekend conform de offerte.</li>
            </ul>

            <h2>6. Betaling</h2>
            <ul>
              <li>Betaling geschiedt volgens het afgesproken termijnschema.</li>
              <li>Bij niet-tijdige betaling kunnen werkzaamheden worden opgeschort.</li>
              <li>Eindafrekening vindt plaats na oplevering.</li>
            </ul>

            <h2>7. Oplevering</h2>
            <ul>
              <li>Na voltooiing vindt een oplevering plaats met opleverpuntenlijst.</li>
              <li>Kleine afwerkingspunten worden binnen redelijke termijn opgelost.</li>
              <li>Na oplevering gaat de garantietermijn in.</li>
            </ul>

            <h2>8. Garantie</h2>
            <ul>
              <li>Garantie-afspraken worden schriftelijk vastgelegd per project.</li>
              <li>Garantie geldt niet bij onjuist gebruik, onderhoud of schade door derden.</li>
              <li>Fabricagegaranties van materialen/leveranciers blijven van toepassing.</li>
            </ul>

            <h2>9. Aansprakelijkheid</h2>
            <ul>
              <li>Aansprakelijkheid is beperkt tot het bedrag dat de verzekering uitkeert.</li>
              <li>Wij zijn niet aansprakelijk voor indirecte of gevolgschade.</li>
              <li>Bij gebreken dient de opdrachtgever dit binnen redelijke termijn te melden.</li>
            </ul>

            <h2>10. Geschillen</h2>
            <p>
              Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden bij voorkeur onderling opgelost. 
              Indien dit niet lukt, is de bevoegde rechter de rechter in het arrondissement van de opdrachtnemer.
            </p>

            <h2>11. Contact</h2>
            <p>
              Vragen over deze voorwaarden? Neem contact op via{" "}
              <a href={`mailto:${site.brand.email}`}>{site.brand.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
