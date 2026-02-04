"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  slug: string;
  title: string;
  place: string;
  type: string;
  summary: string;
  bullets: string[];
}

interface ProjectGridProps {
  title?: string;
  projects: Project[];
  showFilters?: boolean;
}

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

export function ProjectGrid({
  title,
  projects,
  showFilters = false,
}: ProjectGridProps) {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.type.toLowerCase() === filter.toLowerCase());

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            {title}
          </motion.h2>
        )}

        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-2 mb-8 flex-wrap"
          >
            {["all", "Prefab", "Traditioneel"].map((type) => (
              <Button
                key={type}
                variant={filter === type.toLowerCase() || (type === "all" && filter === "all") ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(type === "all" ? "all" : type)}
              >
                {type === "all" ? "Alle projecten" : type}
              </Button>
            ))}
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.slug} variants={itemVariants}>
              <Link href={`/projecten/${project.slug}`}>
                <Card className="h-full group hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 transition-all duration-300 overflow-hidden">
                  {/* Placeholder image */}
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-background/80 flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl font-bold text-primary">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">Projectfoto</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{project.type}</Badge>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {project.place}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.summary}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-primary">
                      Bekijk project
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
