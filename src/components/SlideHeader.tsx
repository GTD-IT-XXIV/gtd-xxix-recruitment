interface SlideHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SlideHeader({ title, subtitle }: SlideHeaderProps) {
  return (
    <header className="relative z-10 px-6 pt-6 pb-12 text-center">
      <h1 className="font-serif text-xl font-semibold text-foreground sm:text-2xl lg:text-3xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-sm font-light tracking-wide text-muted">{subtitle}</p>
      )}
    </header>
  );
}
