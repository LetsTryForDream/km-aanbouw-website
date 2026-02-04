"use client";

import React from "react"

import { motion } from "framer-motion";
import { Shield, Zap, Eye, Leaf, Clock, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface USPItem {
  title: string;
  desc: string;
}

interface USPGridProps {
  title: string;
  items: USPItem[];
}

const iconMap: Record<number, React.ElementType> = {
  0: Zap,
  1: Eye,
  2: Shield,
  3: Leaf,
  4: Clock,
  5: Wrench,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function USPGrid({ title, items }: USPGridProps) {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance"
        >
          {title}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item, index) => {
            const Icon = iconMap[index % 6];
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full group hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
