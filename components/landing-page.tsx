"use client";

import * as React from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Bot,
  CalendarDays,
  ChevronDown,
  Globe,
  Mail,
  Menu,
  MessageCircle,
  Smartphone,
  Sparkles,
  SquareStack,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Service = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
};

type WorkItem = {
  id: string;
  title: string;
  category: string;
  year: string;
  label: string;
  ratio: string;
  image: string;
};

const SERVICES: Service[] = [
  {
    id: "01",
    title: "Websites",
    description:
      "Marketing sites, product pages, and platforms designed to convert rather than decorate.",
    tags: ["Next.js", "Tailwind", "SEO"],
    icon: <Globe className="h-6 w-6" aria-hidden="true" />,
  },
  {
    id: "02",
    title: "Mobile Apps",
    description:
      "iOS and Android experiences with a native feel, shipped with a product mindset.",
    tags: ["React Native", "Expo", "Motion"],
    icon: <Smartphone className="h-6 w-6" aria-hidden="true" />,
  },
  {
    id: "03",
    title: "AI Automation",
    description:
      "Workflows, agents, and internal tools that remove repetitive work from the operating model.",
    tags: ["Claude", "n8n", "Routing"],
    icon: <Bot className="h-6 w-6" aria-hidden="true" />,
  },
];

const WORK: WorkItem[] = [
  {
    id: "W.01",
    title: "Parallel Capital",
    category: "Fintech - Website + Dashboard",
    year: "2026",
    label: "HERO - ABOVE THE FOLD",
    ratio: "16 / 9",
    image: "/work/01-parallel.svg",
  },
  {
    id: "W.02",
    title: "Nocturne FC",
    category: "Sports Club - Mobile App",
    year: "2025",
    label: "IOS - MATCHDAY SCREEN",
    ratio: "3 / 4",
    image: "/work/02-nocturne.svg",
  },
  {
    id: "W.03",
    title: "Halcyon Health",
    category: "Healthtech - AI Triage Agent",
    year: "2025",
    label: "DASHBOARD - AGENT ROUTING",
    ratio: "16 / 10",
    image: "/work/03-halcyon.svg",
  },
  {
    id: "W.04",
    title: "Studio Otira",
    category: "D2C - Storefront",
    year: "2024",
    label: "PDP - ABOVE THE FOLD",
    ratio: "4 / 5",
    image: "/work/04-otira.svg",
  },
];

const PRODUCTS = [
  {
    id: "P.01",
    name: "Forge Kit",
    description:
      "An internal Next.js and design-token starter that gets a team moving in an afternoon.",
    tag: "One-time",
    featured: true,
  },
  {
    id: "P.02",
    name: "Signal",
    description:
      "An AI inbox that drafts replies in your founder voice and keeps your desk clear.",
    tag: "Subscription",
    featured: false,
  },
  {
    id: "P.03",
    name: "Runway",
    description:
      "Finance operations automation for early-stage teams that need more signal and less drift.",
    tag: "Private beta",
    featured: false,
  },
  {
    id: "P.04",
    name: "Studio OS",
    description:
      "The Notion and Linear setup we run the studio on, packaged with onboarding support.",
    tag: "Template",
    featured: false,
  },
];

const STEPS = [
  {
    id: "01",
    title: "Think",
    description:
      "Week one is strategy, not pixels. We pressure-test the idea before the first screen lands.",
  },
  {
    id: "02",
    title: "Forge",
    description:
      "Design and engineering move together in the same sprint so decisions stay connected.",
  },
  {
    id: "03",
    title: "Launch",
    description:
      "We ship, measure, and iterate. You get the keys plus the team that knows the system.",
  },
];

const ABOUT_LINES = [
  "We are a four-person studio, on purpose.",
  "Every project has a partner involved every day.",
  "We take two clients at a time. Never three.",
  "If we say yes, we already know how it ends.",
];

function useRevealOnScroll() {
  React.useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    for (const element of elements) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);
}

export default function LandingPage() {
  const [scrolled, setScrolled] = React.useState(false);
  const [spotlight, setSpotlight] = React.useState({ x: 50, y: 50 });

  useRevealOnScroll();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const updateSpotlight = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setSpotlight({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div className="page-shell min-h-screen overflow-hidden">
      <header
        className={cnHeader(scrolled)}
      >
        <a href="#top" className="flex items-center gap-3 text-display text-lg font-medium tracking-tight">
          <span className="h-2.5 w-2.5 rounded-sm bg-primary shadow-[0_0_16px_rgba(215,255,107,.55)]" />
          Openforge
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <HeaderLink href="#services">Services</HeaderLink>
          <HeaderLink href="#work">Work</HeaderLink>
          <HeaderLink href="#products">Products</HeaderLink>
          <HeaderLink href="#process">Process</HeaderLink>
          <HeaderLink href="#contact">Contact</HeaderLink>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Badge variant="outline" className="border-white/12 bg-white/5 text-[10px] text-white/70">
            Booking Q3 2026
          </Badge>
          <Button asChild size="sm" variant="outline" className="rounded-full border-white/12 bg-white/5">
            <a href="#contact">
              Start a project
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>

        <Button size="sm" variant="ghost" className="md:hidden rounded-full px-3">
          <Menu className="h-4 w-4" aria-hidden="true" />
          Menu
        </Button>
      </header>

      <main>
        <section
          id="top"
          onMouseMove={updateSpotlight}
          className="relative isolate overflow-hidden border-b border-white/10"
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(700px circle at ${spotlight.x}% ${spotlight.y}%, rgba(215,255,107,0.16), transparent 52%)`,
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_28%,transparent_72%,rgba(0,0,0,0.14))]" />

          <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 pb-24 pt-32 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:pb-32 lg:pt-36">
            <div className="space-y-8">
              <div className="reveal flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-white/55">
                <span>[ 01 / Openforge ]</span>
                <span>Lisbon - Remote</span>
              </div>

              <div className="space-y-6">
                <h1 className="reveal text-display max-w-5xl text-[clamp(3.75rem,11vw,10.5rem)] font-medium leading-[0.88] tracking-[-0.05em] text-white">
                  We do not just build.
                  <br />
                  We think first.
                </h1>

                <p className="reveal max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
                  A strategy-first studio building websites, mobile apps, and AI systems for teams that want precision over noise.
                </p>
              </div>

              <div className="reveal flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full bg-primary text-black hover:bg-primary/90">
                  <a href="#contact">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                    Start a project
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>

                <Button asChild size="lg" variant="outline" className="rounded-full border-white/12 bg-white/5 text-white hover:bg-white/10">
                  <a href="#work">
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    See the work
                  </a>
                </Button>
              </div>

              <div className="reveal flex flex-wrap gap-3 border-t border-dashed border-white/10 pt-4 font-mono text-[11px] uppercase tracking-[0.24em] text-white/55">
                <span className="text-primary">Currently forging</span>
                <span>AI ops platform for a fintech</span>
                <span>Mobile app for a sports club</span>
                <span>Marketing site for a startup</span>
              </div>
            </div>

            <Card className="reveal relative overflow-hidden border-white/10 bg-white/[0.04]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,255,107,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(104,167,255,0.12),transparent_42%)]" />
              <CardHeader className="relative gap-3 border-b border-white/10 p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <Badge variant="secondary" className="bg-white/8 text-[10px] text-white/70">
                    Live brief
                  </Badge>
                  <span className="text-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                    03 active engagements
                  </span>
                </div>
                <CardTitle className="text-3xl text-white">Strategy that ships without losing intent.</CardTitle>
                <CardDescription className="max-w-md text-white/62">
                  The studio keeps design, engineering, and systems work on the same roadmap so decisions stay connected.
                </CardDescription>
              </CardHeader>

              <CardContent className="relative space-y-6 p-6 sm:p-8">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-white/55">
                    <span className="text-mono">Focus</span>
                    <span>74%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/8">
                    <div className="h-2 w-[74%] rounded-full bg-primary shadow-[0_0_20px_rgba(215,255,107,.4)]" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    ["01", "Web"],
                    ["02", "App"],
                    ["03", "AI"],
                  ].map(([index, label]) => (
                    <div key={index} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-mono text-[11px] uppercase tracking-[0.24em] text-white/45">{index}</div>
                      <div className="mt-2 text-display text-xl font-medium text-white">{label}</div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
                  Booking window: Q3 2026
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <SectionShell id="services" eyebrow="02 - Services" title="What we forge, end to end." summary="Three lanes. Zero fluff.">
          <div className="grid gap-1 overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <Card
                key={service.id}
                className="reveal group relative rounded-none border-0 bg-black/20 p-0 transition-colors duration-300 hover:bg-white/[0.045]"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <CardHeader className="gap-8 p-6 sm:p-8">
                  <div className="flex items-center justify-between text-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                    <span>{service.id}</span>
                    <Badge variant="secondary" className="bg-emerald-400/15 text-emerald-300">
                      Available
                    </Badge>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-primary">
                    {service.icon}
                  </div>

                  <CardTitle className="text-display text-4xl font-medium text-white">{service.title}</CardTitle>
                  <CardDescription className="max-w-sm text-base leading-7 text-white/60">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-wrap gap-2 p-6 pt-0 sm:p-8 sm:pt-0">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-white/10 bg-transparent text-[10px] text-white/55">
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionShell>

        <section className="border-y border-white/10 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <span className="reveal text-mono text-[11px] uppercase tracking-[0.24em] text-white/45">03 - Why Openforge</span>
            <p className="reveal mt-8 max-w-4xl text-display text-[clamp(2.6rem,6vw,5.8rem)] leading-[0.98] tracking-[-0.04em] text-white">
              Most studios ship what you asked for.
              <br />
              We ship what you actually needed.
            </p>
          </div>
        </section>

        <SectionShell id="work" eyebrow="04 - Selected Work" title="Nothing here is a template." summary="A small, deliberate portfolio.">
          <div className="grid gap-6 lg:grid-cols-6">
            {WORK.map((item, index) => {
              const wide = index === 0 || index === 3;

              return (
                <a
                  key={item.id}
                  href="#contact"
                  className={cnCardLink(wide ? "lg:col-span-4" : "lg:col-span-2")}
                >
                  <Card className="reveal group overflow-hidden border-white/10 bg-white/[0.03] p-0 transition-transform duration-300 hover:-translate-y-1">
                    <div className="relative overflow-hidden border-b border-white/10" style={{ aspectRatio: item.ratio }}>
                      <Image
                        src={item.image}
                        alt={`${item.title} portfolio preview`}
                        fill
                        priority={index === 0}
                        sizes={wide ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                        className="object-cover transition duration-700 group-hover:scale-[1.03] group-hover:brightness-75"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.28))]" />
                      <span className="absolute left-4 top-4 text-mono text-[11px] uppercase tracking-[0.24em] text-white/60">
                        {item.label}
                      </span>
                      <span className="absolute bottom-4 right-4 text-mono text-[11px] uppercase tracking-[0.24em] text-white/60">
                        {item.ratio}
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-opacity duration-300 group-hover:bg-black/60 group-hover:opacity-100">
                        <span className="text-mono text-[11px] uppercase tracking-[0.3em] text-white">View case</span>
                      </div>
                    </div>

                    <CardContent className="grid gap-2 p-5 sm:p-6">
                      <div className="flex items-center justify-between gap-3 text-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                        <span>{item.id}</span>
                        <span>{item.year}</span>
                      </div>
                      <div className="text-display text-2xl font-medium text-white">{item.title}</div>
                      <div className="text-sm leading-6 text-white/60">{item.category}</div>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </SectionShell>

        <SectionShell id="products" eyebrow="05 - Products" title="Built for us, shared with you." summary="Things we ship on our own time.">
          <div className="grid gap-6 lg:grid-cols-2">
            {PRODUCTS.map((product, index) => (
              <Card
                key={product.id}
                className={cnProductCard(product.featured ? "border-primary/25 bg-primary/5" : "bg-white/[0.03]")}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <CardHeader className="gap-6 p-6 sm:p-8">
                  <div className="flex items-center justify-between text-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                    <span>{product.id}</span>
                    <span>{product.tag}</span>
                  </div>
                  <CardTitle className="text-display text-4xl font-medium text-white">{product.name}</CardTitle>
                  <CardDescription className="max-w-lg text-base leading-7 text-white/62">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex items-center justify-between border-t border-white/10 p-6 sm:p-8">
                  <span className="text-mono text-[11px] uppercase tracking-[0.24em] text-white/45">Learn more</span>
                  <ArrowUpRight className="h-5 w-5 text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionShell>

        <section id="process" className="border-t border-white/10 py-24 sm:py-32">
          <div className="overflow-hidden border-y border-white/10 py-4 text-display text-4xl font-medium tracking-[-0.04em] text-white/35 sm:text-6xl">
            <div className="marquee-track flex w-[200%] items-center gap-8 whitespace-nowrap">
              {Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="flex items-center gap-8 pr-8">
                  <span>THINK</span>
                  <span className="text-primary">◆</span>
                  <span>FORGE</span>
                  <span className="text-primary">◆</span>
                  <span>LAUNCH</span>
                  <span className="text-primary">◆</span>
                </div>
              ))}
            </div>
          </div>

          <SectionShell eyebrow="06 - Process" title="Think. Forge. Launch." summary="Three steps. No theater." compact>
            <div className="grid gap-4 lg:grid-cols-3">
              {STEPS.map((step, index) => (
                <Card key={step.id} className="reveal border-white/10 bg-white/[0.03] p-0">
                  <CardHeader className="gap-8 p-6 sm:p-8">
                    <div className="flex items-center justify-between text-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                      <span>{step.id}</span>
                      <span>Step {index + 1}</span>
                    </div>
                    <CardTitle className="text-display text-4xl font-medium text-white">{step.title}</CardTitle>
                    <CardDescription className="text-base leading-7 text-white/62">{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </SectionShell>
        </section>

        <SectionShell id="about" eyebrow="07 - About" title="A studio of four, on purpose." summary="Four lines. That's enough.">
          <ol className="grid gap-4">
            {ABOUT_LINES.map((line, index) => (
              <li key={line} className="reveal flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:gap-8 sm:p-6">
                <span className="text-mono text-[11px] uppercase tracking-[0.24em] text-white/45">0{index + 1}</span>
                <p className="text-display text-2xl font-medium leading-snug text-white sm:text-3xl">{line}</p>
              </li>
            ))}
          </ol>
        </SectionShell>

        <section id="contact" className="border-t border-white/10 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <span className="reveal text-mono text-[11px] uppercase tracking-[0.24em] text-white/45">08 - Contact</span>
            <h2 className="reveal mt-8 max-w-4xl text-display text-[clamp(3rem,8vw,7.2rem)] leading-[0.9] tracking-[-0.05em] text-white">
              Ready to build
              <br />
              something real?
            </h2>

            <div className="reveal mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full bg-primary text-black hover:bg-primary/90">
                <a href="mailto:hello@openforge.studio">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  hello@openforge.studio
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>

              <Button asChild size="lg" variant="outline" className="rounded-full border-white/12 bg-white/5 text-white hover:bg-white/10">
                <a href="https://instagram.com/openforge" target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Instagram DM
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>

            <div className="reveal mt-8 flex flex-wrap gap-4 text-mono text-[11px] uppercase tracking-[0.24em] text-white/55">
              <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" aria-hidden="true" /> Avg reply under 2 hours</span>
              <span>Mon - Fri | 09:00 - 19:00 WET</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10 text-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 sm:px-8 lg:px-12">
          <span>Openforge Studio - 2026</span>
          <span>Lisbon / Remote</span>
          <span>hello@openforge.studio</span>
          <span>Next.js + React + Tailwind + shadcn</span>
        </div>
      </footer>
    </div>
  );
}

function HeaderLink({ href, children }: React.PropsWithChildren<{ href: string }>) {
  return (
    <a href={href} className="text-mono text-[11px] uppercase tracking-[0.24em] text-white/50 transition-colors hover:text-white">
      {children}
    </a>
  );
}

function SectionShell({
  id,
  eyebrow,
  title,
  summary,
  children,
  compact = false,
}: React.PropsWithChildren<{
  id?: string;
  eyebrow: string;
  title: string;
  summary: string;
  compact?: boolean;
}>) {
  return (
    <section id={id} className={compact ? "border-t border-white/10 py-20 sm:py-24" : "border-t border-white/10 py-24 sm:py-32"}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="reveal mb-10 grid gap-4 lg:mb-14 lg:grid-cols-[1fr_1.6fr] lg:items-end">
          <div>
            <span className="text-mono text-[11px] uppercase tracking-[0.24em] text-white/45">{eyebrow}</span>
            <div className="mt-3 text-mono text-[11px] uppercase tracking-[0.24em] text-white/45">{summary}</div>
          </div>
          <h2 className="text-display text-[clamp(2.6rem,5vw,5rem)] leading-[0.94] tracking-[-0.05em] text-white">
            {title}
          </h2>
        </div>

        {children}
      </div>
    </section>
  );
}

function cnHeader(scrolled: boolean) {
  return [
    "fixed left-0 right-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-12",
    "border-b border-transparent transition-all duration-300",
    scrolled ? "glass-panel border-white/10" : "bg-transparent",
  ].join(" ");
}

function cnCardLink(extra: string) {
  return ["group block", extra].join(" ");
}

function cnProductCard(extra: string) {
  return ["reveal group overflow-hidden bg-white/[0.03]", extra].join(" ");
}