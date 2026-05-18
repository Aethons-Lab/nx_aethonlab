/* Aethon Lab — section components */

const { useEffect, useRef, useState } = React;

// ──────────────────────────────────────────────────────────────────────
// Nav
// ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <a href="#top" className="logo">
        <span className="logo-mark"></span>
        Aethon Lab
      </a>
      <ul>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#process">Process</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <span className="status">Booking Q3 · 2026</span>
    </nav>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Hero — cursor-follow spotlight, huge typography
// ──────────────────────────────────────────────────────────────────────
function Hero({ accent, headline, showTicker }) {
  const hl = headline || { strike: "build", em: "think", suffix: "first." };
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      setPos({
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const spotlight = {
    background: `radial-gradient(520px circle at ${pos.x}% ${pos.y}%, color-mix(in oklab, ${accent} 10%, transparent), transparent 60%)`,
  };

  return (
    <section
      id="top"
      style={{
        padding: "160px 0 120px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
      ref={ref}
    >
      <div className="hero-spotlight" style={spotlight}></div>
      <div className="wrap hero-wrap">
        <div className="hero-meta mono reveal">
          <span>[ 01 / Studio ]</span>
          <span>Lisbon · Remote</span>
        </div>

        <h1 className="display hero-headline reveal">
          We don't just <span className="hero-strike">{hl.strike}</span>.
          <br />
          We <em className="hero-em">{hl.em}</em> {hl.suffix}
        </h1>

        <div className="hero-foot reveal">
          <p className="hero-sub">
            A small, strategy‑first studio forging websites,
            <br />
            mobile apps and AI automation for founders who
            <br />
            refuse to ship generic.
          </p>
          <div className="hero-ctas">
            <a
              className="btn btn-green"
              href="https://wa.me/000000000"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsappGlyph />
              Start on WhatsApp
              <span className="arrow">↗</span>
            </a>
            <a className="btn btn-ghost" href="#work">
              See the work
              <span className="arrow">↓</span>
            </a>
          </div>
        </div>

        {showTicker !== false && (
          <div className="hero-ticker mono">
            <span>● Currently forging</span>
            <span>— AI ops platform for a fintech</span>
            <span>— Mobile app for a sports club</span>
            <span>— Marketing site for a YC startup</span>
          </div>
        )}
      </div>
    </section>
  );
}

function WhatsappGlyph() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.63 4.06 1.72 5.7L2 22l4.5-1.78a9.87 9.87 0 0 0 5.54 1.68c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.73 14.03c-.24.68-1.19 1.27-1.89 1.38-.52.08-1.18.11-3.23-.69-2.72-1.07-4.44-3.8-4.58-3.98-.13-.18-1.07-1.43-1.07-2.72 0-1.3.68-1.93.92-2.2.23-.25.51-.31.68-.31.17 0 .34 0 .49.01.16.01.37-.06.58.44.24.57.79 1.98.86 2.12.07.14.11.31.02.49-.09.19-.14.3-.27.47-.13.17-.28.38-.4.5-.13.13-.27.28-.12.54.15.26.67 1.1 1.43 1.78.99.88 1.83 1.16 2.09 1.28.26.13.42.11.57-.07.16-.18.66-.77.84-1.03.17-.26.35-.22.58-.13.23.09 1.47.69 1.72.82.25.12.42.18.48.28.06.1.06.59-.18 1.26Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramGlyph() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Services
// ──────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    num: "S.01",
    name: "Websites",
    line: "Marketing sites, product pages and platforms engineered to convert, not decorate.",
    tags: ["Next.js", "Framer", "Shopify"],
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <rect
          x="3"
          y="6"
          width="34"
          height="24"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="3"
          y1="12"
          x2="37"
          y2="12"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="7" cy="9" r="0.8" fill="currentColor" />
        <circle cx="10" cy="9" r="0.8" fill="currentColor" />
        <line
          x1="14"
          y1="34"
          x2="26"
          y2="34"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    num: "S.02",
    name: "Mobile Apps",
    line: "iOS and Android apps with native‑feel motion, shipped to the store in weeks, not quarters.",
    tags: ["Swift", "React Native", "Expo"],
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <rect
          x="11"
          y="4"
          width="18"
          height="32"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="17"
          y1="31"
          x2="23"
          y2="31"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="11"
          y1="9"
          x2="29"
          y2="9"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    num: "S.03",
    name: "AI Automation",
    line: "Agents, pipelines and internal tools that take the grunt work off your team's plate.",
    tags: ["Claude", "LangGraph", "n8n"],
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle
          cx="6"
          cy="10"
          r="2.4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="6"
          cy="30"
          r="2.4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="34"
          cy="20"
          r="2.4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="8.2"
          y1="11.4"
          x2="16.5"
          y2="17.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="8.2"
          y1="28.6"
          x2="16.5"
          y2="22.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="24"
          y1="20"
          x2="31.6"
          y2="20"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">02 — Services</span>
            <div className="num mono" style={{ marginTop: 12 }}>
              Three lanes. Zero fluff.
            </div>
          </div>
          <h2>
            What we forge,
            <br />
            end to end.
          </h2>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <article
              className="service reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
              key={s.num}
            >
              <div className="service-top">
                <span className="mono">{s.num}</span>
                <span className="mono service-avail">Available</span>
              </div>
              <div className="service-icon">{s.icon}</div>
              <h3 className="display service-name">{s.name}</h3>
              <p className="service-line">{s.line}</p>
              <ul className="service-tags">
                {s.tags.map((t) => (
                  <li key={t} className="mono">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="service-arrow">↗</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Why Us — one punchy line
// ──────────────────────────────────────────────────────────────────────
function WhyUs() {
  return (
    <section id="why" className="whyus">
      <div className="wrap">
        <span className="eyebrow reveal">03 — Why Aethon Lab</span>
        <p className="whyus-line display reveal">
          Most studios ship{" "}
          <span className="whyus-dim">what you asked for</span>.
          <br />
          We ship <span className="whyus-accent">what you actually needed</span>
          .
        </p>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Work — full-bleed visuals (striped placeholders)
// ──────────────────────────────────────────────────────────────────────
const WORK = [
  {
    num: "W.01",
    client: "Parallel Capital",
    kind: "Fintech · Website + Dashboard",
    year: "2026",
    label: "HERO — PARALLEL / ABOVE THE FOLD",
    ratio: "16 / 9",
    image: "work/01-parallel.svg",
  },
  {
    num: "W.02",
    client: "Nocturne FC",
    kind: "Sports Club · Mobile App",
    year: "2025",
    label: "IOS / MATCHDAY SCREEN",
    ratio: "3 / 4",
    image: "work/02-nocturne.svg",
  },
  {
    num: "W.03",
    client: "Halcyon Health",
    kind: "Healthtech · AI Triage Agent",
    year: "2025",
    label: "DASHBOARD / AGENT ROUTING",
    ratio: "16 / 10",
    image: "work/03-halcyon.svg",
  },
  {
    num: "W.04",
    client: "Studio Otira",
    kind: "D2C · Storefront",
    year: "2024",
    label: "PDP / ABOVE THE FOLD",
    ratio: "4 / 5",
    image: "work/04-otira.svg",
  },
];

function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">04 — Selected Work</span>
            <div className="num mono" style={{ marginTop: 12 }}>
              A small, deliberate portfolio.
            </div>
          </div>
          <h2>
            Nothing here
            <br />
            is a template.
          </h2>
        </div>
      </div>

      <div className="work-grid">
        {WORK.map((w, i) => (
          <a
            key={w.num}
            href="#"
            className={"work-item reveal " + (i % 3 === 0 ? "work-wide" : "")}
          >
            <div
              className="work-frame"
              style={{ aspectRatio: w.ratio.replace("/", "/") }}
            >
              <img
                src={w.image}
                alt={w.client + " — " + w.kind}
                className="work-img"
                loading="lazy"
              />
              <span className="mono work-label">&lt;{w.label}&gt;</span>
              <span className="mono work-ratio">{w.ratio}</span>
              <div className="work-hover">
                <span className="mono">View case →</span>
              </div>
            </div>
            <div className="work-meta">
              <span className="mono">{w.num}</span>
              <span className="work-client display">{w.client}</span>
              <span className="mono work-kind">{w.kind}</span>
              <span className="mono work-year">{w.year}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Products — premium storefront, orange accent
// ──────────────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    num: "P.01",
    name: "Forge Kit",
    line: "Our internal Next.js + design token starter. Deploys in an afternoon.",
    tag: "€2,400 · one‑time",
    featured: true,
  },
  {
    num: "P.02",
    name: "Signal",
    line: "AI inbox that drafts replies in your founder voice. Gmail + Superhuman.",
    tag: "€49 / mo",
  },
  {
    num: "P.03",
    name: "Runway",
    line: "Finance ops automation for early‑stage startups. QuickBooks → insights.",
    tag: "Private beta",
  },
  {
    num: "P.04",
    name: "Studio OS",
    line: "The Notion + Linear setup we run the studio on. Template + 1h setup call.",
    tag: "€180 · one‑time",
  },
];

function Products() {
  return (
    <section id="products">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">05 — Products</span>
            <div className="num mono" style={{ marginTop: 12 }}>
              Things we ship on our own time.
            </div>
          </div>
          <h2>
            Built for us,
            <br />
            shared with you.
          </h2>
        </div>

        <div className="products-grid">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.num}
              className={
                "product reveal" + (p.featured ? " product-featured" : "")
              }
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="product-top">
                <span className="mono">{p.num}</span>
                <span className="mono product-tag">{p.tag}</span>
              </div>
              <h3 className="display product-name">{p.name}</h3>
              <p className="product-line">{p.line}</p>
              <div className="product-cta mono">
                <span>Learn more</span>
                <span className="arrow">↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Process — THINK → FORGE → LAUNCH (marquee)
// ──────────────────────────────────────────────────────────────────────
const STEPS = [
  {
    n: "01",
    name: "Think",
    line: "Week one is strategy, not Figma. We pressure‑test the idea before we touch pixels.",
  },
  {
    n: "02",
    name: "Forge",
    line: "Design and engineering run in the same sprint. One team, one source of truth.",
  },
  {
    n: "03",
    name: "Launch",
    line: "We ship, measure, iterate. You get the keys and a team that sticks around.",
  },
];

function Process() {
  return (
    <section id="process" className="process">
      <div className="process-marquee" aria-hidden="true">
        <div className="process-marquee-track display">
          <span>THINK</span>
          <span className="dot">◆</span>
          <span>FORGE</span>
          <span className="dot">◆</span>
          <span>LAUNCH</span>
          <span className="dot">◆</span>
          <span>THINK</span>
          <span className="dot">◆</span>
          <span>FORGE</span>
          <span className="dot">◆</span>
          <span>LAUNCH</span>
          <span className="dot">◆</span>
          <span>THINK</span>
          <span className="dot">◆</span>
          <span>FORGE</span>
          <span className="dot">◆</span>
          <span>LAUNCH</span>
          <span className="dot">◆</span>
        </div>
      </div>

      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">06 — Process</span>
            <div className="num mono" style={{ marginTop: 12 }}>
              Three steps. No theatre.
            </div>
          </div>
          <h2>
            Think. Forge.
            <br />
            Launch.
          </h2>
        </div>

        <div className="steps">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="step reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="step-num display">{s.n}</div>
              <div className="step-body">
                <h3 className="display step-name">{s.name}</h3>
                <p className="step-line">{s.line}</p>
              </div>
              <div className="step-bar">
                <div className="step-bar-fill"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// About — 4 lines
// ──────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="about">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">07 — About</span>
            <div className="num mono" style={{ marginTop: 12 }}>
              Four lines. That's enough.
            </div>
          </div>
          <h2>
            A studio of
            <br />
            four, on purpose.
          </h2>
        </div>

        <ol className="about-lines">
          <li className="reveal">
            <span className="mono about-num">01</span>
            <p className="display">We're a four‑person studio. On purpose.</p>
          </li>
          <li className="reveal">
            <span className="mono about-num">02</span>
            <p className="display">
              Every project has a partner on it. Every day.
            </p>
          </li>
          <li className="reveal">
            <span className="mono about-num">03</span>
            <p className="display">
              We take two clients at a time. Never three.
            </p>
          </li>
          <li className="reveal">
            <span className="mono about-num">04</span>
            <p className="display">
              If we say yes, we already know how it ends.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Contact
// ──────────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <span className="eyebrow reveal">08 — Contact</span>
        <h2 className="display contact-headline reveal">
          Ready to build
          <br />
          something real?
        </h2>
        <div className="contact-ctas reveal">
          <a
            className="btn btn-green"
            href="https://wa.me/000000000"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsappGlyph />
            WhatsApp
            <span className="arrow">↗</span>
          </a>
          <a
            className="btn btn-blue"
            href="https://instagram.com/Aethon Lab"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramGlyph />
            Instagram DM
            <span className="arrow">↗</span>
          </a>
        </div>
        <div className="contact-meta mono reveal">
          <span>Avg reply · under 2 hours</span>
          <span>Mon – Fri · 09:00 – 19:00 WET</span>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Footer
// ──────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer>
      <div className="wrap row">
        <span>© Aethon Lab Studio · 2026</span>
        <span>Lisbon / Remote</span>
        <span>hello@Aethon Lab.studio</span>
        <span>v 4.0 — forged in the dark</span>
      </div>
    </footer>
  );
}

// Expose to global scope so the main script can use them
Object.assign(window, {
  Nav,
  Hero,
  Services,
  WhyUs,
  Work,
  Products,
  Process,
  About,
  Contact,
  Footer,
});
