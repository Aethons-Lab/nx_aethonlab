import { Bot, Globe, Smartphone } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  //   icon: React.ReactNode;
};

export type WorkItem = {
  id: string;
  title: string;
  category: string;
  year: string;
  label: string;
  ratio: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    id: "01",
    title: "Websites",
    description:
      "Marketing sites, product pages, and platforms designed to convert rather than decorate.",
    tags: ["Next.js", "Tailwind", "SEO"],
    // icon: <Globe className="h-6 w-6" aria-hidden="true" />,
  },
  {
    id: "02",
    title: "Mobile Apps",
    description:
      "iOS and Android experiences with a native feel, shipped with a product mindset.",
    tags: ["React Native", "Expo", "Motion"],
    // icon: <Smartphone className="h-6 w-6" aria-hidden="true" />,
  },
  {
    id: "03",
    title: "AI Automation",
    description:
      "Workflows, agents, and internal tools that remove repetitive work from the operating model.",
    tags: ["Claude", "n8n", "Routing"],
    // icon: <Bot className="h-6 w-6" aria-hidden="true" />,
  },
];

export const WORK: WorkItem[] = [
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

export const PRODUCTS = [
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

export const STEPS = [
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

export const ABOUT_LINES = [
  "We are a four-person studio, on purpose.",
  "Every project has a partner involved every day.",
  "We take two clients at a time. Never three.",
  "If we say yes, we already know how it ends.",
];
