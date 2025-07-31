/**
 * @copyright 2024 niteshsingh
 * @license Apache-2.0
 */

import { ButtonPrimary } from "./Button";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      }
    );
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="pt-28 lg:pt-36 bg-transparent text-zinc-100"
    >
      <div className="container mx-auto px-5 grid items-center lg:grid-cols-2 gap-10">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3">
            <figure className="w-10 h-10 rounded-xl overflow-hidden border-2 border-emerald-400 shadow-md">
              <img
                src="/images/nitesh_s.jpg"
                alt="Nitesh Singh Portrait"
                className="w-full h-full object-cover"
              />
            </figure>

            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-[20ch] leading-tight">
            Hi, I&apos;m Nitesh Singh,
            <br />
            <span className="text-emerald-400">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Spring Boot Enthusiast",
                  "React + Tailwind Pro",
                  "MongoDB & .NET Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <p className="mt-4 text-zinc-400 max-w-xl text-base sm:text-lg">
            I build scalable modern web applications using the latest tech — fast, beautiful, and responsive.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <ButtonPrimary
              href="https://drive.google.com/file/d/1gQeGg4cfobiG-dUkwvViPxgOhm6olbX_/view?usp=drivesdk"
              label="Download Resume"
              icon="download"
            />
          </div>
        </div>

        {/* Right */}
        <div className="hidden lg:block">
          <figure className="mx-auto max-w-[350px] rounded-[60px] overflow-hidden backdrop-blur-lg bg-white/5 border border-zinc-700 shadow-2xl">
            <img
              src="/images/cover.png"
              alt="Nitesh Singh Cover"
              className="w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
