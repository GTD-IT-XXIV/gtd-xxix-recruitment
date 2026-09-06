"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { portfolios, type Portfolio } from "@/data/portfolios";
import SlideHeader from "./SlideHeader";

export default function PortfolioBoard() {
  const [selected, setSelected] = useState<Portfolio | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!selected) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <div className="relative min-h-screen">
      <SlideHeader
        eyebrow="GTD XXIX"
        title="Job Description"
        subtitle="Select a portfolio to view its full role details"
      />

      <main className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 justify-center gap-6 px-6 pb-24 sm:grid-cols-3 lg:grid-cols-5">
        {portfolios.map((p) => (
          <motion.div
            key={p.id}
            layoutId={selected ? undefined : `card-${p.id}`}
            style={{ borderRadius: 18 }}
            onClick={() => setSelected(p)}
            className="flex min-h-[230px] cursor-pointer flex-col items-center justify-center gap-4 border border-border bg-gradient-to-br from-surface to-background p-6 text-center transition-colors hover:border-border-hover hover:bg-surface-hover"
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <span className="font-serif text-[0.7rem] tracking-[0.2em] text-faint uppercase">
              {p.code}
            </span>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/25 bg-accent-soft text-xl text-accent">
              {p.icon}
            </div>
            <div className="text-lg font-semibold text-foreground">{p.name}</div>
            <div className="text-sm font-light text-muted">{p.tagline}</div>
          </motion.div>
        ))}
      </main>

      {mounted && createPortal(
        <AnimatePresence>
          {selected && (
          <motion.div
            layoutId={`card-${selected.id}`}
            style={{ borderRadius: 0 }}
            transition={{ type: "spring", stiffness: 250, damping: 30 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-surface"
          >
            <button
              aria-label="Close"
              onClick={() => setSelected(null)}
              className="fixed top-8 right-8 z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-all hover:rotate-90 hover:border-border-hover hover:text-accent"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M1 1L19 19M19 1L1 19"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.25, duration: 0.3 } }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="mx-auto max-w-4xl px-6 pt-24 pb-24 sm:px-10"
            >
              <p className="mb-2 font-serif text-xs tracking-[0.28em] text-accent uppercase">
                {selected.code} — Job Description
              </p>
              <h2 className="mb-6 font-serif text-4xl font-semibold text-foreground sm:text-5xl">
                {selected.name}
              </h2>
              <p className="mb-5 border-b border-border pb-3 text-xs font-semibold tracking-[0.2em] text-faint uppercase">
                    Objektif
              </p>
              <p className="mb-12 max-w-2xl text-base font-light leading-relaxed text-muted">
                {selected.overview}
              </p>

              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr]">
                <div>
                  <p className="mb-5 border-b border-border pb-3 text-xs font-semibold tracking-[0.2em] text-faint uppercase">
                    Job Description
                  </p>
                  <ul className="flex flex-col gap-3.5">
                    {selected.responsibilities.map((r, i) => {
                      const item = typeof r === "string" ? { text: r } : r;
                      return (
                        <li key={i} className="relative pl-5 text-sm font-light leading-relaxed text-foreground">
                          <span className="absolute top-2 left-0 h-1.5 w-1.5 rounded-full bg-accent" />
                          {item.text}
                          {item.subpoints && (
                            <ul className="mt-2.5 flex flex-col gap-2">
                              {item.subpoints.map((sp, j) => (
                                <li key={j} className="relative pl-5 text-sm font-light leading-relaxed text-muted">
                                  <span className="absolute top-2 left-0 h-1 w-1 rounded-full border border-accent/60" />
                                  {sp}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <p className="mb-5 border-b border-border pb-3 text-xs font-semibold tracking-[0.2em] text-faint uppercase">
                    Hal yang bisa didapatkan
                  </p>
                  <ul className="flex flex-col gap-3.5">
                    {selected.requirements.map((r, i) => (
                      <li key={i} className="relative pl-5 text-sm font-light leading-relaxed text-foreground">
                        <span className="absolute top-2 left-0 h-1.5 w-1.5 rounded-full bg-accent" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
