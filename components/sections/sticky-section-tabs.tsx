"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tab {
  label: string;
  targetId: string;
}

interface StickySectionTabsProps {
  tabs: Tab[];
}

export function StickySectionTabs({ tabs }: StickySectionTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.targetId || "");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the initial position
      const tabsElement = document.getElementById("section-tabs-container");
      if (tabsElement) {
        const rect = tabsElement.getBoundingClientRect();
        setIsSticky(rect.top <= 80);
      }

      // Find which section is in view
      const sections = tabs.map((tab) => ({
        id: tab.targetId,
        element: document.getElementById(tab.targetId),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveTab(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tabs]);

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="section-tabs-container" className="py-4">
      <div
        className={cn(
          "transition-all duration-300",
          isSticky &&
            "fixed top-16 lg:top-20 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b shadow-sm"
        )}
      >
        <div className="container mx-auto px-4">
          <nav className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.targetId}
                onClick={() => scrollToSection(tab.targetId)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium whitespace-nowrap rounded-md transition-colors",
                  activeTab === tab.targetId
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.label}
                {activeTab === tab.targetId && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>
      {/* Spacer when sticky */}
      {isSticky && <div className="h-14" />}
    </div>
  );
}
