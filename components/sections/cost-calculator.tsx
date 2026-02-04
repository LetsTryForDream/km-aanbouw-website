"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calculator, Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

interface CostCalculatorProps {
  title?: string;
  showExplanation?: boolean;
}

const basePrice = 1800; // per m²
const factors = {
  type: { prefab: 1, traditioneel: 1.15 },
  afwerking: { casco: 0.7, sleutelklaar: 1 },
  materiaal: { houtskelet: 1, metselwerk: 1.1, hybride: 1.05 },
};

const options = [
  { id: "lichtstraat", label: "Lichtstraat", price: 2500 },
  { id: "schuifpui", label: "Schuifpui", price: 4500 },
  { id: "vloerverwarming", label: "Vloerverwarming voorbereiding", price: 1500 },
  { id: "isolatie", label: "Extra isolatie", price: 2000 },
  { id: "zonnepanelen", label: "Zonnepanelen voorbereiding", price: 800 },
];

function AnimatedNumber({ value }: { value: number }) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) =>
    Math.round(v).toLocaleString("nl-NL")
  );

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 0.8,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value, motionValue]);

  return <motion.span>{rounded}</motion.span>;
}

export function CostCalculator({
  title = "Kosten calculator",
  showExplanation = true,
}: CostCalculatorProps) {
  const [breedte, setBreedte] = useState(4);
  const [diepte, setDiepte] = useState(3);
  const [type, setType] = useState<"prefab" | "traditioneel">("prefab");
  const [afwerking, setAfwerking] = useState<"casco" | "sleutelklaar">("sleutelklaar");
  const [materiaal, setMateriaal] = useState<"houtskelet" | "metselwerk" | "hybride">("houtskelet");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const oppervlakte = breedte * diepte;
  const baseTotal = oppervlakte * basePrice;
  const adjustedTotal =
    baseTotal *
    factors.type[type] *
    factors.afwerking[afwerking] *
    factors.materiaal[materiaal];
  const optionsTotal = options
    .filter((opt) => selectedOptions.includes(opt.id))
    .reduce((sum, opt) => sum + opt.price, 0);

  const totalMin = Math.round((adjustedTotal + optionsTotal) * 0.9);
  const totalMax = Math.round((adjustedTotal + optionsTotal) * 1.1);

  const bouwtijd = type === "prefab" ? "2-4 weken aan huis" : "4-8 weken aan huis";

  const toggleOption = (optionId: string) => {
    setSelectedOptions((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  return (
    <section id="calculator" className="py-16 lg:py-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Inputs */}
            <Card>
              <CardHeader>
                <CardTitle>Configureer je aanbouw</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Dimensions */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <Label>Breedte</Label>
                      <span className="text-sm font-medium">{breedte} meter</span>
                    </div>
                    <Slider
                      value={[breedte]}
                      onValueChange={([v]) => setBreedte(v)}
                      min={2}
                      max={8}
                      step={0.5}
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <Label>Diepte</Label>
                      <span className="text-sm font-medium">{diepte} meter</span>
                    </div>
                    <Slider
                      value={[diepte]}
                      onValueChange={([v]) => setDiepte(v)}
                      min={2}
                      max={5}
                      step={0.5}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Oppervlakte: <strong>{oppervlakte} m²</strong>
                  </p>
                </div>

                {/* Type */}
                <div className="space-y-2">
                  <Label>Type bouw</Label>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant={type === "prefab" ? "default" : "outline"}
                      onClick={() => setType("prefab")}
                      className="flex-1"
                    >
                      Prefab
                    </Button>
                    <Button
                      type="button"
                      variant={type === "traditioneel" ? "default" : "outline"}
                      onClick={() => setType("traditioneel")}
                      className="flex-1"
                    >
                      Traditioneel
                    </Button>
                  </div>
                </div>

                {/* Afwerking */}
                <div className="space-y-2">
                  <Label>Afwerking</Label>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant={afwerking === "casco" ? "default" : "outline"}
                      onClick={() => setAfwerking("casco")}
                      className="flex-1"
                    >
                      Casco
                    </Button>
                    <Button
                      type="button"
                      variant={afwerking === "sleutelklaar" ? "default" : "outline"}
                      onClick={() => setAfwerking("sleutelklaar")}
                      className="flex-1"
                    >
                      Sleutelklaar
                    </Button>
                  </div>
                </div>

                {/* Materiaal */}
                <div className="space-y-2">
                  <Label>Materiaal</Label>
                  <div className="flex gap-2 flex-wrap">
                    {(["houtskelet", "metselwerk", "hybride"] as const).map((m) => (
                      <Button
                        key={m}
                        type="button"
                        variant={materiaal === m ? "default" : "outline"}
                        onClick={() => setMateriaal(m)}
                        size="sm"
                      >
                        {m.charAt(0).toUpperCase() + m.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-3">
                  <Label>Extra opties</Label>
                  {options.map((option) => (
                    <div key={option.id} className="flex items-center gap-3">
                      <Checkbox
                        id={option.id}
                        checked={selectedOptions.includes(option.id)}
                        onCheckedChange={() => toggleOption(option.id)}
                      />
                      <label
                        htmlFor={option.id}
                        className="flex-1 text-sm cursor-pointer"
                      >
                        {option.label}
                      </label>
                      <span className="text-sm text-muted-foreground">
                        +€{option.price.toLocaleString("nl-NL")}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-8">
                  <p className="text-primary-foreground/80 text-sm mb-2">
                    Indicatieve prijsrange
                  </p>
                  <div className="text-4xl md:text-5xl font-bold mb-4">
                    €<AnimatedNumber value={totalMin} /> – €
                    <AnimatedNumber value={totalMax} />
                  </div>
                  <div className="flex items-center gap-2 mb-6">
                    <Badge variant="secondary">{bouwtijd}</Badge>
                    <Badge variant="secondary">{oppervlakte} m²</Badge>
                  </div>
                  <Button size="lg" variant="secondary" asChild className="w-full group">
                    <Link href="/contact#offerte">
                      Vraag offerte aan
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                <Info className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Deze berekening is indicatief. De werkelijke prijs hangt af van
                  bodemgesteldheid, fundering, specifieke wensen en lokale
                  situatie. Vraag een offerte aan voor een nauwkeurige
                  prijsopgave.
                </p>
              </div>

              {showExplanation && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Welke factoren bepalen de prijs?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Afmetingen (breedte × diepte) en hoogte",
                        "Fundering (situatie- en bodemafhankelijk)",
                        "Casco vs sleutelklaar afwerking",
                        "Glas/kozijnen (HR++, HR+++), schuifpui, lichtstraat",
                        "Installaties (elektra/verwarming voorbereiding)",
                        "Materiaalkeuze en gewenste uitstraling",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
