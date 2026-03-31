import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="container">
        <div className="surface flex items-center justify-between rounded-full px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:px-6">
          <a href="#home" className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.24em] text-stone-200">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-orange-300 text-sm font-bold text-stone-950">
              NS
            </span>
            <span className="hidden sm:inline">Nitesh Singh</span>
          </a>

          <button
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-stone-100 md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
          >
            Menu
          </button>

          <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />

          <a
            href="#contact"
            className="hidden rounded-full border border-orange-200/30 bg-orange-300/10 px-4 py-2 text-sm font-medium text-orange-100 transition hover:bg-orange-300/20 md:inline-flex"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
