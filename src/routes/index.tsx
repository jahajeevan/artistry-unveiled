import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import artist from "@/assets/artist.jpg";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200",
      },
    ],
  }),
  component: Home,
});

const STUDIO = "Maison Lumière";

/* ---------------- Nav ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md border-b border-border/60 py-4"
          : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="font-display text-xl tracking-tight">
            {STUDIO}
          </span>
          <span className="hidden text-[10px] tracking-[0.3em] text-muted-foreground md:inline">
            EST. 2014
          </span>
        </a>
        <nav className="hidden items-center gap-10 text-xs tracking-[0.24em] uppercase md:flex">
          <a href="#portfolio" className="hover:text-gold transition-colors">Portfolio</a>
          <a href="#stories" className="hover:text-gold transition-colors">Stories</a>
          <a href="#artist" className="hover:text-gold transition-colors">Studio</a>
          <a href="#process" className="hover:text-gold transition-colors">Experience</a>
          <a href="#book" className="hover:text-gold transition-colors">Contact</a>
        </nav>
        <a
          href="#book"
          className="group inline-flex items-center gap-2 rounded-full border border-foreground/80 px-5 py-2 text-[11px] tracking-[0.24em] uppercase transition-all hover:bg-foreground hover:text-ivory"
        >
          Book
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const slides = [hero1, hero2];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden bg-ink">
      {slides.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ease-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt=""
            className={`h-full w-full object-cover ${i === idx ? "animate-ken-burns" : ""}`}
          />
        </div>
      ))}
      {/* vignette + grain */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/10 to-ink/70" />
      <div className="pointer-events-none absolute inset-0 grain" />

      {/* Frame markers */}
      <div className="pointer-events-none absolute inset-6 border border-ivory/15 md:inset-10" />
      <div className="pointer-events-none absolute left-6 top-6 flex items-center gap-2 text-[10px] tracking-[0.32em] text-ivory/70 md:left-10 md:top-10">
        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        ROLL 01 · FRAME {String(i + 1).padStart(2, "0")}
      </div>
      <div className="pointer-events-none absolute right-6 top-6 text-[10px] tracking-[0.32em] text-ivory/70 md:right-10 md:top-10">
        ƒ/1.4 · 1⁄250 · ISO 200
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-ivory">
        <div className="eyebrow mb-6 text-champagne">
          <span className="gold-line mr-4 align-middle" />
          A Cinematic Photography House
          <span className="gold-line ml-4 align-middle" />
        </div>
        <h1 className="font-display text-[13vw] leading-[0.95] md:text-[8.2vw] lg:text-[7rem]">
          <span className="block italic font-light">Every Frame</span>
          <span className="block">Holds a Story.</span>
        </h1>
        <p className="mt-8 max-w-xl font-serif text-lg italic text-ivory/85 md:text-xl">
          Luxury photography experiences crafted with emotion, detail and timeless beauty.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#portfolio"
            className="group relative overflow-hidden rounded-full bg-ivory px-8 py-3.5 text-[11px] tracking-[0.28em] uppercase text-ink transition-all hover:bg-champagne"
          >
            Explore Portfolio
          </a>
          <a
            href="#book"
            className="rounded-full border border-ivory/70 px-8 py-3.5 text-[11px] tracking-[0.28em] uppercase text-ivory transition-all hover:bg-ivory hover:text-ink"
          >
            Book a Session
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[10px] tracking-[0.32em] text-ivory/70">
          <span>SCROLL</span>
          <span className="animate-scroll-hint block h-10 w-px bg-ivory/60" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Marquee ---------------- */
function Marquee() {
  const items = [
    "Weddings",
    "Portraits",
    "Fashion",
    "Editorial",
    "Events",
    "Commercial",
    "Pre-Wedding Films",
    "Fine Art Prints",
  ];
  const line = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-cream py-6">
      <div className="flex w-max animate-marquee items-center gap-14 whitespace-nowrap">
        {line.map((t, k) => (
          <span key={k} className="flex items-center gap-14">
            <span className="font-display text-3xl italic text-charcoal/80 md:text-4xl">
              {t}
            </span>
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Section wrapper with reveal ---------------- */
function Reveal({
  as: Tag = "div",
  className = "",
  children,
  delay = 0,
}: {
  as?: any;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ---------------- Portfolio ---------------- */
function Portfolio() {
  const tiles: {
    src: string;
    label: string;
    tag: string;
    span: string;
    ratio: string;
  }[] = [
    { src: gallery1, label: "Golden Hour", tag: "Fashion", span: "md:col-span-5 md:row-span-2", ratio: "aspect-[3/4]" },
    { src: gallery2, label: "The Field", tag: "Pre-Wedding", span: "md:col-span-7", ratio: "aspect-[16/10]" },
    { src: gallery3, label: "Vows in Ivory", tag: "Wedding", span: "md:col-span-4", ratio: "aspect-[4/5]" },
    { src: gallery4, label: "Candlelight", tag: "Events", span: "md:col-span-3", ratio: "aspect-[4/5]" },
    { src: gallery5, label: "The Groom", tag: "Portraits", span: "md:col-span-5", ratio: "aspect-[4/5]" },
    { src: hero1, label: "Silk & Sun", tag: "Editorial", span: "md:col-span-7", ratio: "aspect-[16/10]" },
    { src: hero2, label: "Two Souls", tag: "Commercial", span: "md:col-span-5", ratio: "aspect-[4/5]" },
  ];
  return (
    <section id="portfolio" className="relative bg-ivory px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="eyebrow mb-4">
              <span className="gold-line mr-3 align-middle" /> Selected Works
            </div>
            <h2 className="font-display text-5xl leading-[1] md:text-7xl">
              A gallery of <span className="italic">quiet</span> moments,
              <br className="hidden md:block" />
              printed in light.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Six chapters of the studio's ongoing archive — weddings, pre-weddings,
            portraits, fashion, events and commercial commissions, shot on medium
            format and film.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[minmax(0,1fr)]">
          {tiles.map((t, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              className={`group relative ${t.span}`}
            >
              <figure className={`image-zoom relative ${t.ratio} w-full overflow-hidden bg-cream`}>
                <img
                  src={t.src}
                  alt={t.label}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-6 bottom-6 flex items-end justify-between text-ivory opacity-0 transition-all duration-700 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
                  <div>
                    <div className="text-[10px] tracking-[0.32em] uppercase text-champagne">
                      {t.tag}
                    </div>
                    <div className="font-display text-2xl">{t.label}</div>
                  </div>
                  <ArrowUpRight className="h-5 w-5" />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <a
            href="#stories"
            className="group inline-flex items-center gap-3 text-xs tracking-[0.32em] uppercase"
          >
            <span className="gold-line" />
            View the full archive
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Signature Stories ---------------- */
function Stories() {
  const stories = [
    {
      no: "N° 01",
      title: "The Wedding Story of Arjun & Meera",
      place: "Captured in Chennai",
      desc:
        "Three days of ceremony, silk and monsoon light — a family gathering that unfolded like a slow film.",
      cover: hero2,
      side: [gallery3, gallery4],
    },
    {
      no: "N° 02",
      title: "Ines, in the Villa d'Este",
      place: "Lake Como, Italy",
      desc:
        "A private editorial for a couture atelier, photographed at sunrise across five terraces.",
      cover: gallery1,
      side: [gallery5, gallery2],
    },
  ];
  return (
    <section id="stories" className="relative bg-cream px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-20 text-center">
          <div className="eyebrow mb-4">Signature Stories</div>
          <h2 className="font-display text-5xl md:text-7xl">
            Films made from <span className="italic">stills.</span>
          </h2>
        </Reveal>

        <div className="space-y-32">
          {stories.map((s, i) => (
            <Reveal
              key={i}
              className={`grid gap-8 md:grid-cols-12 md:gap-12 ${
                i % 2 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className="md:col-span-7 md:[direction:ltr]">
                <figure className="image-zoom aspect-[4/3] w-full overflow-hidden">
                  <img src={s.cover} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
                </figure>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {s.side.map((src, k) => (
                    <figure key={k} className="image-zoom aspect-[4/5] w-full overflow-hidden">
                      <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
                    </figure>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center md:col-span-5 md:[direction:ltr]">
                <div className="eyebrow mb-3 text-gold">{s.no}</div>
                <h3 className="font-display text-4xl leading-[1.05] md:text-5xl">
                  {s.title}
                </h3>
                <div className="mt-4 flex items-center gap-3 text-xs tracking-[0.32em] uppercase text-muted-foreground">
                  <span className="gold-line" /> {s.place}
                </div>
                <p className="mt-6 font-serif text-lg italic leading-relaxed text-charcoal/80">
                  {s.desc}
                </p>
                <a
                  href="#book"
                  className="mt-8 inline-flex w-fit items-center gap-2 border-b border-foreground/70 pb-1 text-xs tracking-[0.28em] uppercase transition-colors hover:text-gold hover:border-gold"
                >
                  Read the story <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Before / After ---------------- */
function BeforeAfter() {
  const [pos, setPos] = useState(52);
  const wrap = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const move = (clientX: number) => {
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  };
  return (
    <section className="relative bg-ivory px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="eyebrow mb-3">The Edit</div>
            <h2 className="font-display text-5xl md:text-7xl">
              Raw capture, <span className="italic">then</span> masterpiece.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Every frame is colour-graded by hand — a slow process closer to
            painting than retouching. Drag the divider to see the transformation.
          </p>
        </Reveal>

        <Reveal>
          <div
            ref={wrap}
            className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden bg-ink"
            onMouseDown={(e) => {
              dragging.current = true;
              move(e.clientX);
            }}
            onMouseMove={(e) => dragging.current && move(e.clientX)}
            onMouseUp={() => (dragging.current = false)}
            onMouseLeave={() => (dragging.current = false)}
            onTouchStart={(e) => move(e.touches[0].clientX)}
            onTouchMove={(e) => move(e.touches[0].clientX)}
          >
            <img src={afterImg} alt="After" className="absolute inset-0 h-full w-full object-cover" />
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${pos}%` }}
            >
              <img
                src={beforeImg}
                alt="Before"
                className="absolute inset-y-0 left-0 h-full object-cover"
                style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
              />
            </div>
            {/* labels */}
            <span className="absolute left-5 top-5 rounded-full bg-ink/60 px-3 py-1 text-[10px] tracking-[0.28em] uppercase text-ivory backdrop-blur">
              Raw
            </span>
            <span className="absolute right-5 top-5 rounded-full bg-ivory/80 px-3 py-1 text-[10px] tracking-[0.28em] uppercase text-ink backdrop-blur">
              Final
            </span>
            {/* handle */}
            <div
              className="pointer-events-none absolute inset-y-0 z-10 w-px bg-ivory"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory bg-ivory/10 backdrop-blur">
                <span className="text-ivory">‹ ›</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Artist ---------------- */
function Artist() {
  return (
    <section id="artist" className="relative bg-cream px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <figure className="image-zoom relative aspect-[4/5] w-full overflow-hidden">
            <img src={artist} alt="The photographer" loading="lazy" className="h-full w-full object-cover" />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-ivory/85 px-3 py-1 text-[10px] tracking-[0.28em] uppercase text-ink backdrop-blur">
              The Artist
            </figcaption>
          </figure>
        </Reveal>
        <Reveal delay={120} className="flex flex-col justify-center md:col-span-7">
          <div className="eyebrow mb-3">About the Studio</div>
          <h2 className="font-display text-5xl leading-[1.02] md:text-6xl">
            I photograph the <span className="italic">in-between.</span>
          </h2>
          <p className="mt-8 max-w-xl font-serif text-lg italic leading-relaxed text-charcoal/85">
            The half-second before a first look. The way silk falls when nobody
            is watching. The kind of light you only get for eleven minutes at
            dusk.
          </p>
          <p className="mt-6 max-w-xl text-sm leading-[1.9] text-muted-foreground">
            {STUDIO} is a small, intentional studio led by Rafael Adán, a
            cinematographer-turned-photographer who has spent the last decade
            documenting weddings, editorial fashion and quiet human portraits
            across India, Italy and the Middle East. Every commission is
            personally shot, edited and delivered — no assistants, no filters,
            no compromises.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
            <div>
              <div className="font-display text-4xl">10+</div>
              <div className="mt-1 text-[10px] tracking-[0.28em] uppercase text-muted-foreground">Years</div>
            </div>
            <div>
              <div className="font-display text-4xl">14</div>
              <div className="mt-1 text-[10px] tracking-[0.28em] uppercase text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="font-display text-4xl">Vogue</div>
              <div className="mt-1 text-[10px] tracking-[0.28em] uppercase text-muted-foreground">Featured In</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  const steps = [
    { n: "01", t: "Discovery Call", d: "A quiet conversation about who you are and the film you want to remember." },
    { n: "02", t: "Creative Planning", d: "A moodboard, a shot list, locations scouted at your golden hour." },
    { n: "03", t: "The Photoshoot", d: "Directed but never posed. We shoot on medium format and film." },
    { n: "04", t: "Hand Editing", d: "Every frame graded by hand over four to six weeks in the studio." },
    { n: "05", t: "Final Memories", d: "A private online gallery and a linen-bound heirloom archive box." },
  ];
  return (
    <section id="process" className="relative bg-ivory px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-16 text-center">
          <div className="eyebrow mb-3">The Experience</div>
          <h2 className="font-display text-5xl md:text-7xl">
            From first call to <span className="italic">final print.</span>
          </h2>
        </Reveal>
        <div className="divide-y divide-border">
          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 60}
              className="group grid grid-cols-12 items-center gap-6 py-8 md:py-10"
            >
              <div className="col-span-2 font-display text-3xl text-gold md:col-span-1 md:text-5xl">
                {s.n}
              </div>
              <h3 className="col-span-10 font-display text-3xl md:col-span-4 md:text-4xl">
                {s.t}
              </h3>
              <p className="col-span-12 text-sm leading-relaxed text-muted-foreground md:col-span-6">
                {s.d}
              </p>
              <ArrowUpRight className="col-span-12 h-5 w-5 justify-self-end text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold md:col-span-1" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Counter ---------------- */
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1800;
          const step = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setV(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [end]);
  return (
    <span ref={ref} className="font-display text-6xl md:text-7xl">
      {v.toLocaleString()}
      {suffix}
    </span>
  );
}
function Achievements() {
  const items = [
    { n: 500, s: "+", l: "Stories Captured" },
    { n: 100, s: "+", l: "Weddings" },
    { n: 10, s: "+", l: "Years in Practice" },
    { n: 50, s: "K+", l: "Moments Preserved" },
  ];
  return (
    <section className="relative bg-ink px-6 py-28 text-ivory md:px-10 md:py-32 grain">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-14 md:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 100} className="text-center">
            <Counter end={it.n} suffix={it.s} />
            <div className="mt-3 text-[10px] tracking-[0.32em] uppercase text-champagne">
              {it.l}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const t = [
    {
      q: "He didn't take photographs — he preserved the entire feeling of the day, in the exact temperature we lived it.",
      n: "Arjun & Meera",
      c: "Wedding, Chennai",
      img: client1,
    },
    {
      q: "Every frame felt like a page from a couture magazine I had somehow written myself.",
      n: "Ines Cordero",
      c: "Editorial, Lake Como",
      img: client2,
    },
    {
      q: "Ten years from now, our children will know exactly what our love looked like in the light.",
      n: "Daniel Rhys",
      c: "Portraits, Marrakech",
      img: client3,
    },
  ];
  return (
    <section className="relative bg-cream px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-16 flex items-end justify-between">
          <div>
            <div className="eyebrow mb-3">Client Love</div>
            <h2 className="font-display text-5xl md:text-7xl">
              Words from <span className="italic">the archive.</span>
            </h2>
          </div>
          <div className="hidden text-xs tracking-[0.32em] uppercase text-muted-foreground md:block">
            — Selected letters, 2019–2026
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {t.map((x, i) => (
            <Reveal
              key={i}
              delay={i * 120}
              className="flex flex-col justify-between border border-border bg-ivory p-8"
            >
              <div>
                <div className="font-display text-5xl leading-none text-gold">"</div>
                <p className="mt-2 font-serif text-lg italic leading-relaxed text-charcoal">
                  {x.q}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <img src={x.img} alt={x.n} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <div className="text-sm font-medium">{x.n}</div>
                  <div className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
                    {x.c}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Social wall ---------------- */
function Social() {
  const imgs = [gallery1, gallery3, hero1, gallery5, gallery4, hero2, gallery2, artist];
  return (
    <section className="relative bg-ivory px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="eyebrow mb-3">The Studio Journal</div>
            <h2 className="font-display text-5xl md:text-7xl">@maison.lumiere</h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase hover:text-gold"
          >
            <Instagram className="h-4 w-4" /> Follow the studio
          </a>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {imgs.map((src, i) => (
            <Reveal
              key={i}
              delay={i * 40}
              className="image-zoom aspect-square w-full overflow-hidden"
            >
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Booking ---------------- */
function Booking() {
  return (
    <section id="book" className="relative overflow-hidden bg-ink px-6 py-32 text-ivory md:px-10 md:py-40 grain">
      <img
        src={hero1}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/80 to-ink" />
      <div className="relative mx-auto grid max-w-[1400px] gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-6">
          <div className="eyebrow mb-4 text-champagne">Begin a Commission</div>
          <h2 className="font-display text-5xl leading-[1] md:text-7xl">
            Your moments deserve to <span className="italic">live forever.</span>
          </h2>
          <p className="mt-8 max-w-md font-serif text-lg italic text-ivory/80">
            The studio accepts a small number of commissions each season. Share
            a few details and we'll write back within 48 hours.
          </p>

          <div className="mt-12 space-y-5 text-sm">
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/30">
                <MapPin className="h-4 w-4 text-gold" />
              </span>
              Studio 07 · Boat Club Road, Chennai · Available worldwide
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/30">
                <Mail className="h-4 w-4 text-gold" />
              </span>
              hello@maisonlumiere.studio
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/30">
                <Phone className="h-4 w-4 text-gold" />
              </span>
              +91 98 400 000 00
            </div>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 text-[11px] tracking-[0.28em] uppercase text-ink transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="md:col-span-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you — the studio will be in touch shortly.");
            }}
            className="space-y-6 rounded-sm border border-ivory/15 bg-ivory/5 p-8 backdrop-blur-md md:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Your name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Occasion & date" name="occasion" />
            <Field label="Location" name="location" />
            <div>
              <label className="text-[10px] tracking-[0.28em] uppercase text-ivory/70">
                Tell us the story
              </label>
              <textarea
                rows={4}
                className="mt-2 w-full resize-none border-b border-ivory/30 bg-transparent py-3 text-sm outline-none placeholder:text-ivory/40 focus:border-gold"
                placeholder="A few sentences about the moment you'd like to preserve…"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-ivory px-8 py-4 text-[11px] tracking-[0.32em] uppercase text-ink transition-all hover:bg-champagne"
            >
              Request the Studio
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.28em] uppercase text-ivory/70">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        className="mt-2 w-full border-b border-ivory/30 bg-transparent py-3 text-sm outline-none placeholder:text-ivory/40 focus:border-gold"
      />
    </div>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-ink px-6 py-16 text-ivory/70 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 border-t border-ivory/10 pt-10 text-xs tracking-[0.24em] uppercase md:flex-row">
        <div className="font-display text-xl tracking-tight text-ivory normal-case">
          {STUDIO}
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-gold">Instagram</a>
          <a href="#" className="hover:text-gold">Behance</a>
          <a href="#" className="hover:text-gold">Vimeo</a>
          <a href="#" className="hover:text-gold">Journal</a>
        </div>
        <div>© {new Date().getFullYear()} — All frames reserved.</div>
      </div>
    </footer>
  );
}

/* ---------------- Shutter loader ---------------- */
function Shutter() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-[100]">
      <div className="animate-shutter-top absolute inset-x-0 top-0 h-1/2 bg-ink" />
      <div className="animate-shutter-bottom absolute inset-x-0 bottom-0 h-1/2 bg-ink" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-3xl italic text-ivory/90">
          {STUDIO}
        </span>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="bg-ivory text-charcoal">
      <Shutter />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Portfolio />
        <Stories />
        <BeforeAfter />
        <Artist />
        <Process />
        <Achievements />
        <Testimonials />
        <Social />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
