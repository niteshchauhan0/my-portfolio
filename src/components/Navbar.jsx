import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const navItems = [
  { label: "Home", link: "#home" },
  { label: "About", link: "#about" },
  { label: "Experience", link: "#experience" },
  { label: "Capabilities", link: "#skills" },
  { label: "Projects", link: "#work" },
  { label: "Contact", link: "#contact" },
];

const Navbar = ({ navOpen, setNavOpen }) => {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = navItems
      .map(({ link }) => document.querySelector(link))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const updateActiveSection = () => {
      const headerOffset = 140;
      const scrollPosition = window.scrollY + headerOffset;
      let currentSection = "#home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = `#${section.id}`;
        }
      });

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
        currentSection = "#contact";
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleNavClick = (link) => {
    setActiveSection(link);
    setNavOpen(false);
  };

  return (
    <nav
      className={`absolute left-0 right-0 top-[calc(100%+0.75rem)] ${
        navOpen ? "block" : "hidden"
      } surface rounded-[28px] p-3 md:static md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0`}
    >
      <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-2">
        {navItems.map(({ label, link }) => (
          <li key={label}>
            <a
              href={link}
              onClick={() => handleNavClick(link)}
              aria-current={activeSection === link ? "page" : undefined}
              className={`block rounded-full px-4 py-2 text-sm transition ${
                activeSection === link
                  ? "bg-orange-300/15 text-orange-100 ring-1 ring-inset ring-orange-200/30"
                  : "text-stone-300 hover:bg-white/8 hover:text-orange-100"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  setNavOpen: PropTypes.func.isRequired,
};

export default Navbar;
