import Image from "next/image";
import { introduction } from "@/data/pages";
import SlideHeader from "./SlideHeader";

export default function IntroductionSlide() {
  return (
    <div className="relative min-h-screen">
      <SlideHeader
        eyebrow={introduction.eyebrow}
        title={introduction.title}
        subtitle={introduction.subtitle}
      />

      <main className="relative z-10 mx-auto flex max-w-3xl flex-col gap-6 px-6 pb-24">
        <div className="overflow-hidden rounded-2xl border border-border">
          <Image
            src={introduction.image}
            alt=""
            width={introduction.imageWidth}
            height={introduction.imageHeight}
            className="h-auto w-full"
          />
        </div>

        <h2 className="text-center font-serif text-xl font-semibold text-foreground sm:text-2xl">
          {introduction.imageCaption}
        </h2>

        {introduction.body.map((paragraph, i) => (
          <p key={i} className="text-base font-light leading-relaxed text-foreground">
            {paragraph}
          </p>
        ))}
      </main>
    </div>
  );
}
