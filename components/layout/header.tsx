"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { site } from "@/src/content/site";
import { cn } from "@/lib/utils";

type NavChild = {
  label: string;
  href?: string;
  children?: NavChild[];
};

type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsScrolled(false);
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        mounted && isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent",
        mounted && !isVisible ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-primary"
          >
            <span className="text-2xl">KM</span>
            <span className="text-foreground">Aanbouw</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {site.nav.map((item: NavItem) => (
              <NavItemComponent key={item.label} item={item} />
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link href={site.global.secondaryCta.href}>
                {site.global.secondaryCta.label}
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href={site.global.primaryCta.href}>
                {site.global.primaryCta.label}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu openen</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-96 overflow-y-auto">
              <SheetTitle className="text-left mb-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-bold text-xl"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="text-primary text-2xl">KM</span>
                  <span>Aanbouw</span>
                </Link>
              </SheetTitle>
              <nav className="flex flex-col gap-2">
                {site.nav.map((item: NavItem) => (
                  <MobileNavItem
                    key={item.label}
                    item={item}
                    onClose={() => setMobileOpen(false)}
                  />
                ))}
              </nav>
              <div className="mt-8 flex flex-col gap-3">
                <Button asChild className="w-full">
                  <Link
                    href={site.global.primaryCta.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    {site.global.primaryCta.label}
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link
                    href={site.global.secondaryCta.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    {site.global.secondaryCta.label}
                  </Link>
                </Button>
                <a
                  href={`tel:${site.brand.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  <Phone className="h-4 w-4" />
                  {site.brand.phone}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function NavItemComponent({ item }: { item: NavItem }) {
  if (!item.children) {
    return (
      <Link
        href={item.href || "/"}
        className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-muted"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-muted outline-none">
        {item.label}
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        {item.children.map((child: NavChild) => {
          if (child.children) {
            return (
              <DropdownMenuSub key={child.label}>
                <DropdownMenuSubTrigger>{child.label}</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    {child.children.map((subChild: NavChild) => (
                      <DropdownMenuItem key={subChild.label} asChild>
                        <Link href={subChild.href || "/"}>
                          {subChild.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            );
          }

          return (
            <DropdownMenuItem key={child.label} asChild>
              <Link href={child.href || "/"}>{child.label}</Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MobileNavItem({
  item,
  onClose,
  level = 0,
}: {
  item: NavItem;
  onClose: () => void;
  level?: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href || "/"}
        onClick={onClose}
        className={cn(
          "py-2 px-3 text-foreground hover:bg-muted rounded-md transition-colors",
          level > 0 && "text-sm text-muted-foreground"
        )}
        style={{ paddingLeft: `${(level + 1) * 12}px` }}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between py-2 px-3 text-foreground hover:bg-muted rounded-md transition-colors",
          level > 0 && "text-sm text-muted-foreground"
        )}
        style={{ paddingLeft: `${(level + 1) * 12}px` }}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {item.children.map((child: NavChild) => (
              <MobileNavItem
                key={child.label}
                item={child}
                onClose={onClose}
                level={level + 1}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
