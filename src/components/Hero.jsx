import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ButtonOutline, ButtonPrimary } from "./Button";

const metrics = [
  { value: "10+", label: "projects shipped" },
  { value: "4", label: "core stacks" },
  { value: "100%", label: "focus on responsive UX" },
];

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.15 }
    );
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="eyebrow">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Associate Software Engineer building full-stack web experiences
            </span>

            <h1 className="headline-1 max-w-[11ch] text-stone-50">
              Building polished full-stack products for the web.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
              I&apos;m Nitesh Singh, a developer focused on turning backend logic and frontend design into products that feel fast,
              thoughtful, and ready for real users.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonPrimary href="#work" label="Explore projects" icon="arrow" />
              <ButtonOutline
                href="https://drive.google.com/file/d/1gQeGg4cfobiG-dUkwvViPxgOhm6olbX_/view?usp=drivesdk"
                target="_blank"
                label="View resume"
                icon="download"
              />
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {metrics.map(({ value, label }) => (
                <div key={label} className="surface rounded-3xl p-5 transition duration-300 hover:-translate-y-1">
                  <p className="text-3xl font-bold text-orange-200">{value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-stone-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-12 hidden h-24 w-24 rounded-full bg-orange-300/20 blur-3xl lg:block" />
            <div className="absolute -right-6 bottom-10 hidden h-28 w-28 rounded-full bg-teal-300/20 blur-3xl lg:block" />

            <div className="surface relative overflow-hidden rounded-[36px] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.25)]">
              <div className="rounded-[28px] border border-white/10 bg-stone-900/80 p-3">
                <img
                  src="/images/niteshpro.png"
                  alt="Portrait of Nitesh Singh"
                  className="h-[460px] w-full rounded-[24px] object-cover object-top"
                />
              </div>

              <div className="absolute bottom-10 left-0 right-0 mx-auto w-[85%] rounded-[24px] border border-white/10 bg-stone-950/80 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.22em] text-stone-400">Design + Engineering</p>
                <p className="mt-2 text-lg text-stone-100">
                  I like interfaces with personality, backed by clean APIs and practical database design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
