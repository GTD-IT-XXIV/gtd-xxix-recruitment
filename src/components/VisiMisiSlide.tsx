import { visiMisi } from "@/data/pages";
import SlideHeader from "./SlideHeader";

export default function VisiMisiSlide() {
  return (
    <div className="relative min-h-screen">
      <SlideHeader title={visiMisi.title} subtitle={visiMisi.subtitle} />

      <main className="relative z-10 mx-auto flex max-w-3xl flex-col gap-8 px-6 pb-24">
        <div className="rounded-2xl border border-border bg-surface p-8">
          <p className="mb-5 border-b border-border pb-3 text-xs font-semibold tracking-[0.2em] text-faint uppercase">
            Visi
          </p>
          <p className="text-base font-light leading-relaxed text-foreground">
            {visiMisi.visi}
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-8">
          <p className="mb-5 border-b border-border pb-3 text-xs font-semibold tracking-[0.2em] text-faint uppercase">
            Misi
          </p>
          <ul className="flex flex-col gap-3.5">
            {visiMisi.misi.map((point, i) => (
              <li key={i} className="relative pl-5 text-sm font-light leading-relaxed text-foreground">
                <span className="absolute top-2 left-0 h-1.5 w-1.5 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
