"use client";

import * as React from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeaderLink } from "./HeaderLink";
import { cnHeader } from "../cn";

export function LandingHeader() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cnHeader(scrolled)}>
      <div className="max-w-360 mx-auto flex items-center justify-between px-6 py-5 sm:px-8 lg:px-12 ">
        <a
          href="#top"
          className="flex items-center gap-3 text-display text-lg font-medium tracking-tight"
        >
          <span className="h-2.5 w-2.5 rounded-sm bg-primary shadow-[0_0_16px_rgba(215,255,107,.55)]" />
          Aethon Lab
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <HeaderLink href="#services">Services</HeaderLink>
          <HeaderLink href="#work">Work</HeaderLink>
          <HeaderLink href="#products">Products</HeaderLink>
          <HeaderLink href="#process">Process</HeaderLink>
          <HeaderLink href="#contact">Contact</HeaderLink>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Badge
            variant="outline"
            className="border-white/12 bg-white/5 text-[10px] text-white/70"
          >
            Booking Q3 2026
          </Badge>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="rounded-full border-white/12 bg-white/5"
          >
            <a href="#contact">
              Start a project
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>

        <Button
          size="sm"
          variant="ghost"
          className="md:hidden rounded-full px-3"
        >
          <Menu className="h-4 w-4" aria-hidden="true" />
          Menu
        </Button>
      </div>
    </header>
  );
}
