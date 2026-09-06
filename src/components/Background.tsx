import Image from "next/image";

export default function Background() {
  return (
    <>
      {/* Desktop/tablet: full-bleed fixed background image */}
      <div className="pointer-events-none fixed inset-0 z-0 hidden sm:block">
        <Image
          src="/images/background.JPG"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-15"
        />
      </div>

      {/* Mobile: image banner across the top, fading into the black background below */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[42vh] sm:hidden">
        <Image
          src="/images/background.JPG"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 60%, rgba(0,0,0,0.55) 100%), linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 12%, transparent 88%, rgba(0,0,0,0.45) 100%), linear-gradient(to right, rgba(0,0,0,0.35) 0%, transparent 8%, transparent 92%, rgba(0,0,0,0.35) 100%)",
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(212,175,55,0.08), transparent 60%), radial-gradient(ellipse 50% 50% at 80% 100%, rgba(120,100,60,0.05), transparent 60%)",
        }}
      />
    </>
  );
}
