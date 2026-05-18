/* Openforge — app entry, tweaks wiring, scroll reveal */

const { useEffect, useState } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "green",
  "showTicker": true,
  "headlineVariant": 0,
  "density": "spacious"
}/*EDITMODE-END*/;

const ACCENTS = {
  green:  "oklch(0.88 0.22 142)",
  orange: "oklch(0.72 0.20 45)",
  blue:   "oklch(0.72 0.18 245)",
  white:  "#F5F5F2",
};

const HEADLINES = [
  { strike: "build", em: "think", suffix: "first." },
  { strike: "ship", em: "strategize", suffix: "first." },
  { strike: "design", em: "decide", suffix: "first." },
];

function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

    const run = () => {
      document.querySelectorAll(".reveal, .step").forEach((el) => {
        if (!el.classList.contains("in")) io.observe(el);
      });
    };
    run();
    // re-run after any DOM changes (tweaks)
    const mo = new MutationObserver(run);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, []);
}

function App() {
  const [tweaks, setTweaks] = useTweaks(TWEAK_DEFAULTS);
  useScrollReveal();

  // apply accent to CSS var
  useEffect(() => {
    const c = ACCENTS[tweaks.accent] || ACCENTS.green;
    document.documentElement.style.setProperty("--hero-accent", c);
  }, [tweaks.accent]);

  // density
  useEffect(() => {
    document.documentElement.dataset.density = tweaks.density;
  }, [tweaks.density]);

  const accent = ACCENTS[tweaks.accent] || ACCENTS.green;
  const hl = HEADLINES[tweaks.headlineVariant] || HEADLINES[0];

  return (
    <>
      <Nav />
      <Hero accent={accent} headline={hl} showTicker={tweaks.showTicker} />
      <Services />
      <WhyUs />
      <Work />
      <Products />
      <Process />
      <About />
      <Contact />
      <Footer />

      <TweaksPanel title="Tweaks" width={320}>
        <TweakSection title="Accent">
          <TweakRadio
            value={tweaks.accent}
            onChange={(v) => setTweaks({ accent: v })}
            options={[
              { value: "green",  label: "Neon Green" },
              { value: "orange", label: "Hot Orange" },
              { value: "blue",   label: "Electric Blue" },
              { value: "white",  label: "Mono" },
            ]}
          />
        </TweakSection>

        <TweakSection title="Hero headline">
          <TweakRadio
            value={tweaks.headlineVariant}
            onChange={(v) => setTweaks({ headlineVariant: Number(v) })}
            options={[
              { value: 0, label: "We don't build. We think first." },
              { value: 1, label: "We don't ship. We strategize first." },
              { value: 2, label: "We don't design. We decide first." },
            ]}
          />
        </TweakSection>

        <TweakSection title="Density">
          <TweakRadio
            value={tweaks.density}
            onChange={(v) => setTweaks({ density: v })}
            options={[
              { value: "spacious", label: "Spacious" },
              { value: "compact",  label: "Compact" },
            ]}
          />
        </TweakSection>

        <TweakSection title="Hero">
          <TweakToggle
            label="Show status ticker"
            value={tweaks.showTicker}
            onChange={(v) => setTweaks({ showTicker: v })}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

// density overrides
const densityStyle = document.createElement("style");
densityStyle.textContent = `
  html[data-density="compact"] section { padding: 96px 0; }
  html[data-density="compact"] .hero-headline { font-size: clamp(56px, 9vw, 128px); }
  html[data-density="compact"] .contact { padding: 120px 0 100px; }
  html[data-density="compact"] .whyus { padding: 120px 0; }
`;
document.head.appendChild(densityStyle);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
