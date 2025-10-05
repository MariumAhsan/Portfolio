import { useState, useEffect, useRef } from "react";

const observedSectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "education",
  "publications",
  "work-experience",
];

const mapSectionToNav = (id: string) => {
  if (id === "about" || id === "skills") return "home";
  return id;
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const firstFocusableElementRef = useRef<HTMLAnchorElement>(null);
  const lastFocusableElementRef = useRef<HTMLAnchorElement>(null);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#publications", label: "Publications" },
    { href: "#work-experience", label: "Experience" },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = (): void => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return (): void => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scrollspy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(mapSectionToNav(entry.target.id));
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );

    observedSectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return (): void => observer.disconnect();
  }, []);

  // Escape key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === "Escape" && isMenuOpen) setIsMenuOpen(false);
    };
    if (isMenuOpen) document.addEventListener("keydown", handleEscape);
    return (): void => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  // Focus trap & body scroll
  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      firstFocusableElementRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return (): void => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <a href="#home" className="skip-to-content" aria-label="Skip to main content">Skip to content</a>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-gray-700/30 transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#home" className="text-2xl font-bold text-[#C026D3]">Portfolio</a>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      activeId === link.href.slice(1)
                        ? "text-[#C026D3] border-b-2 border-[#C026D3]"
                        : "text-gray-200 hover:text-[#14B8A6]"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#C026D3] transition-colors duration-200"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger */}
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Close */}
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-md border-b border-gray-700/30">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                ref={
                  index === 0
                    ? firstFocusableElementRef
                    : index === navLinks.length - 1
                    ? lastFocusableElementRef
                    : undefined
                }
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#C026D3] focus:ring-offset-2 ${
                  activeId === link.href.slice(1) ? "text-[#C026D3]" : "text-gray-200 hover:text-[#14B8A6]"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
