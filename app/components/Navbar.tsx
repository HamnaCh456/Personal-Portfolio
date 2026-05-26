"use client";

import { siteMetadata } from "../data/siteMetadata";

const Navbar: React.FC = () => {
  return (
    <header
      role="banner"
      className="relative z-30 flex w-full items-center justify-between gap-4 px-4 py-5 md:px-8"
    >
      <a
        href="/"
        className="group flex items-baseline gap-2"
        aria-label="Hamna Hameed — home"
      >
        <span className="font-display text-2xl leading-none tracking-tight text-ink">
          Hamna<span className="italic text-ink-muted">.</span>
        </span>
      </a>

      <nav
        aria-label="Primary"
        className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted md:flex"
      >
        <a href="#work" className="transition hover:text-ink">
          Work
        </a>
        <a href="#stack" className="transition hover:text-ink">
          Stack
        </a>
        <a href="#experience" className="transition hover:text-ink">
          Experience
        </a>
      </nav>

      <a
        href={siteMetadata.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-bg shadow-[0_8px_24px_-12px_rgba(247,248,248,0.25)] transition hover:bg-accent-soft"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-bg transition" />
        Resume
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        >
          <path
            d="M3 9L9 3M9 3H4M9 3V8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </header>
  );
};

export default Navbar;
