const Footer = () => {
  return (
    <footer className="pb-10 pt-6">
      <div className="container">
        <div className="surface reveal-up flex flex-col gap-6 rounded-[32px] px-6 py-8 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-stone-400">Nitesh Singh</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-stone-300 sm:text-base">
              Full-stack developer building responsive interfaces and backend systems with a focus on clarity, reliability, and real-world usability.
            </p>
          </div>

          <div className="text-sm text-stone-400">
            <p>Based in India</p>
            <p className="mt-2 text-stone-300">niteshchauhan1717@gmail.com</p>
            <p className="mt-2">&copy; 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
