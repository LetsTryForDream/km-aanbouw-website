"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: string;
}

interface BlogListProps {
  title?: string;
  posts: BlogPost[];
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

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogList({ title, posts }: BlogListProps) {
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts.map((post) => (
            <motion.div key={post.slug} variants={itemVariants}>
              <Link href={`/over-ons/blog/${post.slug}`}>
                <Card className="h-full group hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  {/* Placeholder image */}
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/10">
                      {post.title.charAt(0)}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readingTime}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-primary">
                      Lees meer
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
