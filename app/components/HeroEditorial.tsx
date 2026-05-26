"use client";

import { motion } from "framer-motion";
import { siteMetadata } from "../data/siteMetadata";

const social = [
  { label: "GitHub", value: "@HamnaCh456", href: siteMetadata.github },
  {
    label: "LinkedIn",
    value: "/in/hamna-hameed",
    href: siteMetadata.linkedin,
  },
  { label: "Email", value: "hamnahameed555", href: siteMetadata.email },
];

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
});

export function HeroEditorial() {
  return (
    <section
      aria-label="Introduction"
      className="relative isolate overflow-hidden rounded-[28px] border border-border bg-surface text-ink"
    >
      <SurfaceTexture />
      <CornerTicks />

      <div className="relative grid grid-cols-1 gap-8 px-5 pb-8 pt-7 sm:px-8 md:grid-cols-12 md:gap-6 md:px-10 md:pb-10 md:pt-9 lg:gap-10 lg:px-14 lg:pb-12 lg:pt-10">
        {/* Left column — editorial column */}
        <div className="relative md:col-span-7">
          <motion.h1
            {...reveal(0)}
            className="font-display text-[clamp(3.8rem,10vw,7.5rem)] leading-[0.9] tracking-tight text-ink"
          >
            Hamna
            <br />
            <span className="italic text-ink-muted">Hameed</span>
            <span className="text-ink-muted">.</span>
          </motion.h1>

          <motion.p
            {...reveal(0.16)}
            className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted"
          >
            <span className="inline-block h-px w-6 bg-ink-muted/60" />
            Generative AI Engineer
            <span className="text-ink-dim">/</span>
            Full-Stack Developer
          </motion.p>

          <motion.p
            {...reveal(0.24)}
            className="mt-5 max-w-md text-[15px] leading-[1.65] text-ink-muted md:text-base"
          >
            I&apos;m Hamna, a Generative AI Engineer and full-stack developer
            focused on building intelligent, real-world applications. I work
            with autonomous agents, RAG systems, LLM orchestration, multi-agent
            architectures, and API integrations to create scalable AI solutions.
            I also develop modern web applications from front-end to back-end,
            combining AI with seamless user experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...reveal(0.3)}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group relative inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-bg transition hover:bg-accent-soft"
            >
              View Selected Work
              <span className="grid h-5 w-5 place-items-center rounded-full bg-bg/15 transition group-hover:rotate-45">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path
                    d="M1 8L8 1M8 1H2.5M8 1V6.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition hover:border-ink hover:bg-ink hover:text-bg"
            >
              The Story So Far
            </a>
          </motion.div>

          {/* Labeled social cluster */}
          <motion.div
            {...reveal(0.42)}
            className="mt-8 border-t border-border pt-5"
          >
            <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-dim">
              <span>Elsewhere</span>
              <span className="inline-block h-px flex-1 bg-border" />
            </div>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.label === "Email" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-border bg-surface-2 px-4 py-3 transition hover:border-ink/40 hover:bg-surface-2"
                  >
                    <span className="flex flex-col">
                      <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-ink-dim group-hover:text-ink">
                        {item.label}
                      </span>
                      <span className="mt-0.5 font-sans text-sm font-medium tracking-tight text-ink">
                        {item.value}
                      </span>
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="text-ink-dim transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    >
                      <path
                        d="M3 11L11 3M11 3H5M11 3V9"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right column — composed editorial art */}
        <div className="relative md:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative mx-auto aspect-square w-full max-w-md md:max-w-none"
          >
            <CompositionArt />
          </motion.div>

          {/* metadata stat strip */}
          <motion.div
            {...reveal(0.55)}
            className="mt-6 grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-dim"
          >
            <Stat n="14+" label="Shipped projects" />
            <Stat n="2 yr" label="Building agents" />
            <Stat n="∞" label="Cups of chai" />
          </motion.div>
        </div>
      </div>

      {/* Bottom bar — status badge + scroll cue */}
      <div className="relative flex flex-wrap items-end justify-between gap-4 border-t border-border px-5 py-4 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          {...reveal(0.55)}
          className="inline-flex items-center gap-2.5 rounded-full border border-border-strong bg-surface-2 px-3 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
            Currently @ Spiral Lab
          </span>
        </motion.div>

        <motion.a
          {...reveal(0.65)}
          href="#work"
          aria-label="Scroll to work"
          className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim transition hover:text-ink"
        >
          Scroll
          <span className="grid h-8 w-8 place-items-center rounded-full border border-border-strong transition group-hover:border-ink group-hover:bg-ink group-hover:text-bg">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M5 1V9M5 9L1 5M5 9L9 5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </motion.a>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface-2 px-3 py-3">
      <div className="font-sans text-xl font-semibold tracking-tight text-ink">
        {n}
      </div>
      <div className="mt-1.5 text-[9px] leading-tight text-ink-dim">
        {label}
      </div>
    </div>
  );
}

function SurfaceTexture() {
  return (
    <>
      {/* subtle gradient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 80% 0%, rgba(247,248,248,0.05), transparent 55%), radial-gradient(80% 60% at 0% 100%, rgba(247,248,248,0.04), transparent 60%)",
        }}
      />
      {/* fine grain */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12] mix-blend-screen"
      >
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </>
  );
}

function CornerTicks() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {[
        "left-3 top-3",
        "right-3 top-3",
        "left-3 bottom-3",
        "right-3 bottom-3",
      ].map((pos) => (
        <span
          key={pos}
          className={`absolute ${pos} block h-3 w-3 border-ink-muted/40`}
          style={{
            borderTopWidth: pos.includes("top") ? 1 : 0,
            borderBottomWidth: pos.includes("bottom") ? 1 : 0,
            borderLeftWidth: pos.includes("left") ? 1 : 0,
            borderRightWidth: pos.includes("right") ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
}

/**
 * Composition: nine-cell editorial grid in monochrome.
 */
function CompositionArt() {
  // Linear-inspired monochrome palette for SVG stroke/fill
  const STROKE = "#F7F8F8";      // primary ink
  const FILL_DARK = "#F7F8F8";   // primary ink as solid
  const FILL_MID = "#8A8F98";    // muted gray
  const FILL_SOFT = "#3A3D42";   // dim surface

  return (
    <div className="relative h-full w-full">
      {/* outer frame ticks */}
      <div className="absolute -inset-2 grid grid-cols-3 grid-rows-3 gap-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="rounded-sm border border-border bg-surface-2/40"
          />
        ))}
      </div>

      <svg
        viewBox="0 0 360 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative h-full w-full"
        aria-hidden
      >
        <defs>
          <pattern
            id="hatch"
            patternUnits="userSpaceOnUse"
            width="6"
            height="6"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="6"
              stroke={STROKE}
              strokeWidth="1"
              opacity="0.45"
            />
          </pattern>
        </defs>

        {/* row 1 */}
        {/* — eclipse */}
        <g transform="translate(20 20)">
          <circle cx="50" cy="50" r="46" stroke={STROKE} strokeWidth="1.2" />
          <circle cx="60" cy="40" r="22" fill={FILL_DARK} />
        </g>
        {/* — pie chart */}
        <g transform="translate(140 20)">
          <circle cx="50" cy="50" r="46" stroke={STROKE} strokeWidth="1.2" />
          <path
            d="M50 50 L96 50 A46 46 0 0 0 50 4 Z"
            fill={FILL_MID}
            opacity="0.9"
          />
          <path
            d="M50 50 L50 96 A46 46 0 0 0 96 50 Z"
            fill={FILL_DARK}
            opacity="0.85"
          />
        </g>
        {/* — chart spike */}
        <g transform="translate(260 20)">
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            stroke={STROKE}
            strokeWidth="1.2"
            fill="none"
          />
          <polyline
            points="8,72 28,58 48,64 68,30 92,12"
            stroke={STROKE}
            strokeWidth="1.6"
            fill="none"
          />
          <circle cx="28" cy="58" r="3" fill={FILL_MID} />
          <circle cx="48" cy="64" r="3" fill={FILL_DARK} />
          <circle cx="68" cy="30" r="3" fill={FILL_MID} />
          <circle cx="92" cy="12" r="3" fill={FILL_DARK} />
        </g>

        {/* row 2 */}
        {/* — arrow up-right */}
        <g transform="translate(20 140)">
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            stroke={STROKE}
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M22 80 L80 22 M50 22 H80 V52"
            stroke={STROKE}
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        {/* — gauge donut */}
        <g transform="translate(140 140)">
          <circle cx="50" cy="50" r="46" stroke={STROKE} strokeWidth="1.2" />
          <circle cx="50" cy="50" r="26" stroke={STROKE} strokeWidth="1.2" />
          <path
            d="M50 4 A46 46 0 0 1 96 50 L76 50 A26 26 0 0 0 50 24 Z"
            fill={FILL_MID}
            opacity="0.9"
          />
          <line
            x1="50"
            y1="50"
            x2="86"
            y2="22"
            stroke={STROKE}
            strokeWidth="1.4"
          />
        </g>
        {/* — diagonal hatch tile */}
        <g transform="translate(260 140)">
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            fill="url(#hatch)"
            opacity="0.55"
          />
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            stroke={STROKE}
            strokeWidth="1.2"
            fill="none"
          />
          <circle cx="76" cy="24" r="8" fill={FILL_MID} stroke={STROKE} />
        </g>

        {/* row 3 */}
        {/* — wave/area */}
        <g transform="translate(20 260)">
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            stroke={STROKE}
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M0 70 C20 50 30 40 50 50 C70 60 80 80 100 70 L100 100 L0 100 Z"
            fill={FILL_SOFT}
            opacity="0.85"
          />
          <path
            d="M0 70 C20 50 30 40 50 50 C70 60 80 80 100 70"
            stroke={STROKE}
            strokeWidth="1.4"
            fill="none"
          />
        </g>
        {/* — scatter */}
        <g transform="translate(140 260)">
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            stroke={STROKE}
            strokeWidth="1.2"
            fill="none"
          />
          {[
            [22, 38, 4, FILL_DARK],
            [38, 70, 3, FILL_MID],
            [54, 46, 6, FILL_DARK],
            [70, 60, 3, FILL_DARK],
            [80, 32, 4, FILL_MID],
            [30, 80, 2, FILL_DARK],
            [62, 80, 2, FILL_MID],
          ].map(([cx, cy, r, fill], i) => (
            <circle
              key={i}
              cx={cx as number}
              cy={cy as number}
              r={r as number}
              fill={fill as string}
            />
          ))}
        </g>
        {/* — bars + arrow */}
        <g transform="translate(260 260)">
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            stroke={STROKE}
            strokeWidth="1.2"
            fill="none"
          />
          <rect x="14" y="62" width="14" height="26" fill={FILL_DARK} />
          <rect
            x="34"
            y="46"
            width="14"
            height="42"
            fill={FILL_DARK}
            opacity="0.6"
          />
          <rect x="54" y="32" width="14" height="56" fill={FILL_MID} />
          <rect x="74" y="18" width="14" height="70" fill={FILL_DARK} />
          <path
            d="M10 90 L90 14 M68 14 H90 V36"
            stroke={STROKE}
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}
