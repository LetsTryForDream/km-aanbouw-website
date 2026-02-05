"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  kicker?: string;
  title: string;
  subtitle: string;
  bullets?: string[];
  ctas: Array<{
    label: string;
    href: string;
    variant: "primary" | "secondary";
  }>;
  showGrid?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function Hero({
  kicker,
  title,
  subtitle,
  bullets,
  ctas,
  showGrid = true,
}: HeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20 lg:pt-24">
      {/* Blueprint Grid Background */}
      {showGrid && (
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {kicker && (
              <motion.p
                variants={itemVariants}
                className="text-primary font-medium mb-4 text-sm uppercase tracking-wide"
              >
                {kicker}
              </motion.p>
            )}

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl text-pretty"
            >
              {subtitle}
            </motion.p>

            {bullets && bullets.length > 0 && (
              <motion.ul variants={itemVariants} className="space-y-3 mb-8">
                {bullets.map((bullet, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 text-foreground/80"
                  >
                    <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    {bullet}
                  </motion.li>
                ))}
              </motion.ul>
            )}

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              {ctas.map((cta, index) => (
                <Button
                  key={index}
                  variant={cta.variant === "primary" ? "default" : "outline"}
                  size="lg"
                  asChild
                  className={
                    cta.variant === "primary"
                      ? "group"
                      : "group"
                  }
                >
                  <Link href={cta.href}>
                    {cta.label}
                    {cta.variant === "primary" && (
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    )}
                  </Link>
                </Button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 opacity-10 pointer-events-none hidden lg:block">
        <div className="w-full h-full bg-gradient-to-l from-primary/20 to-transparent rounded-l-3xl" />
      </div>
    </section>
  );
}
