const name = "DAMIR GROŠ";

export default function Home() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-16 sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_45%),radial-gradient(circle_at_bottom_left,_rgba(139,92,246,0.15),_transparent_30%)]" />
      <div className="relative z-10 flex w-full flex-col items-center justify-center text-center overflow-visible">
        <div className="flex flex-wrap justify-center gap-4 text-[clamp(5rem,16vw,10rem)] font-black uppercase leading-[0.8] tracking-[-0.08em] text-white whitespace-pre">
          {name.split("").map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              className="inline-block animate-rise"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
