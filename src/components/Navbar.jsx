import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const activeBox = useRef(null);
  const navRefs = useRef([]);
  const activeLink = useRef(null);

  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Work", link: "#work" },
    // { label: "Contact", link: "#contact" }
  ];

  const updateActiveBox = (element) => {
    if (!element || !activeBox.current) return;

    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = element;
    const box = activeBox.current;

    box.style.transform = `translate(${offsetLeft}px, ${offsetTop}px)`;
    box.style.width = `${offsetWidth}px`;
    box.style.height = `${offsetHeight}px`;
  };

  const handleClick = (e, index) => {
    if (activeLink.current) {
      activeLink.current.classList.remove("text-emerald-400", "font-semibold");
    }

    const clicked = navRefs.current[index];
    if (clicked) {
      clicked.classList.add("text-emerald-400", "font-semibold");
      activeLink.current = clicked;
      updateActiveBox(clicked);
    }
  };

  useEffect(() => {
    const first = navRefs.current[0];
    if (first) {
      first.classList.add("text-emerald-400", "font-semibold");
      activeLink.current = first;
      updateActiveBox(first);
    }

    const onResize = () => {
      if (activeLink.current) updateActiveBox(activeLink.current);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`relative flex items-center justify-center gap-8 px-6 py-3 rounded-xl transition-all duration-500 ${
        navOpen ? "block" : "hidden md:flex"
      } bg-white/10 backdrop-blur-md shadow-lg text-zinc-200`}
    >
      {navItems.map(({ label, link }, i) => (
        <a
          key={label}
          href={link}
          ref={(el) => (navRefs.current[i] = el)}
          onClick={(e) => handleClick(e, i)}
          className="relative px-3 py-1 rounded-md transition-all duration-300 hover:text-emerald-400 z-10"
        >
          {label}
        </a>
      ))}

      <div
        ref={activeBox}
        className="absolute bg-emerald-400/20 rounded-md transition-all duration-300 ease-in-out z-0"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "0px",
          height: "0px",
          transform: "translate(0, 0)",
        }}
      ></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
