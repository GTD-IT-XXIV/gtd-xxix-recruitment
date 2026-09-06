"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import Background from "./Background";
import IntroductionSlide from "./IntroductionSlide";
import VisiMisiSlide from "./VisiMisiSlide";
import PortfolioBoard from "./PortfolioBoard";

const TABS = ["Introduction", "Visi & Misi", "Job Desc"] as const;

const slides = [
  <IntroductionSlide key="intro" />,
  <VisiMisiSlide key="visi-misi" />,
  <PortfolioBoard key="job-desc" />,
];

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 48 : -48,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -48 : 48,
    opacity: 0,
  }),
};

export default function PageShell() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const goTo = (next: number) => {
    if (next === index) return;
    setIndex([next, next > index ? 1 : -1]);
  };

  const prev = () => goTo((index - 1 + TABS.length) % TABS.length);
  const next = () => goTo((index + 1) % TABS.length);

  return (
    <div className="relative min-h-screen">
      <Background />

      <nav className="relative z-20 flex items-center justify-center gap-1.5 px-3 pt-6 sm:gap-3 sm:px-6 sm:pt-10">
        <button
          aria-label="Previous tab"
          onClick={prev}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-hover hover:text-accent sm:h-9 sm:w-9"
        >
          <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 sm:h-4 sm:w-4">
            <path d="M10 2L4 8L10 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex items-center gap-0.5 rounded-full border border-border bg-surface/70 p-0.5 sm:gap-1 sm:p-1">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => goTo(i)}
              className={`rounded-full px-2 py-1.5 text-[9px] font-semibold tracking-[0.04em] uppercase transition-colors whitespace-nowrap sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.15em] ${
                i === index
                  ? "bg-accent text-black"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <button
          aria-label="Next tab"
          onClick={next}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-hover hover:text-accent sm:h-9 sm:w-9"
        >
          <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 sm:h-4 sm:w-4">
            <path d="M6 2L12 8L6 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </nav>

      <div className="relative z-10 overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            {slides[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
