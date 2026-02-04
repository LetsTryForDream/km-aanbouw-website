"use client";

import React from "react"

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  bullets?: string[];
  compact?: boolean;
}

export function LeadForm({
  title = "Vraag een offerte aan",
  subtitle,
  bullets,
  compact = false,
}: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log("[v0] Form submission:", data);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Aanvraag verstuurd!",
      description: "We nemen binnen 1 werkdag contact met je op.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="offerte" className="py-16 lg:py-24 scroll-mt-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
              >
                <Check className="w-8 h-8 text-green-600" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">Bedankt voor je aanvraag!</h3>
              <p className="text-muted-foreground">
                We nemen binnen 1 werkdag contact met je op om je wensen door te
                spreken en een afspraak in te plannen.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="offerte" className="py-16 lg:py-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className={compact ? "" : "max-w-4xl mx-auto"}
        >
          <div className={compact ? "" : "grid lg:grid-cols-5 gap-8"}>
            {/* Info Column */}
            {!compact && (
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                {subtitle && (
                  <p className="text-muted-foreground mb-6">{subtitle}</p>
                )}
                {bullets && bullets.length > 0 && (
                  <ul className="space-y-3">
                    {bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </span>
                        <span className="text-muted-foreground">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Form */}
            <Card className={compact ? "" : "lg:col-span-3"}>
              {compact && (
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
              )}
              <CardContent className={compact ? "p-6" : "p-6 lg:p-8"}>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="naam">Naam *</Label>
                      <Input
                        id="naam"
                        name="naam"
                        required
                        placeholder="Uw naam"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="uw@email.nl"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telefoon">Telefoon *</Label>
                      <Input
                        id="telefoon"
                        name="telefoon"
                        type="tel"
                        required
                        placeholder="06 12345678"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postcode">Postcode *</Label>
                      <Input
                        id="postcode"
                        name="postcode"
                        required
                        placeholder="1234 AB"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project">Type project *</Label>
                    <Select name="project" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Kies type project" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="prefab-aanbouw">
                          Prefab aanbouw
                        </SelectItem>
                        <SelectItem value="prefab-uitbouw">
                          Prefab uitbouw
                        </SelectItem>
                        <SelectItem value="traditionele-aanbouw">
                          Traditionele aanbouw
                        </SelectItem>
                        <SelectItem value="prefab-opbouw">
                          Prefab opbouw
                        </SelectItem>
                        <SelectItem value="dakkapel">Dakkapel</SelectItem>
                        <SelectItem value="anders">Anders</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="toelichting">Korte toelichting</Label>
                    <Textarea
                      id="toelichting"
                      name="toelichting"
                      placeholder="Vertel kort over je wensen en situatie..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bestand">
                      Bestand toevoegen (optioneel)
                    </Label>
                    <div className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:border-primary/50 transition-colors">
                      <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Sleep een bestand of klik om te uploaden
                      </p>
                      <input
                        type="file"
                        id="bestand"
                        name="bestand"
                        className="hidden"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Versturen..."
                    ) : (
                      <>
                        Verstuur aanvraag
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Door dit formulier te versturen ga je akkoord met onze
                    privacyverklaring.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
