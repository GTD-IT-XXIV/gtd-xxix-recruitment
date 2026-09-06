interface SlideHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SlideHeader({ eyebrow, title, subtitle }: SlideHeaderProps) {
  return (
    <header className="relative z-10 px-6 pt-10 pb-12 text-center">
      <p className="mb-2 font-serif text-3xl font-semibold tracking-[0.05em] text-accent uppercase sm:text-4xl lg:text-5xl">
        {eyebrow}
      </p>
      <h1 className="font-serif text-xl font-semibold text-foreground sm:text-2xl lg:text-3xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-sm font-light tracking-wide text-muted">{subtitle}</p>
      )}
    </header>
  );
}
