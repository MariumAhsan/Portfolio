import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
  const [activeId, setActiveId] = useState<string>("home");
  const [scrollY, setScrollY] = useState(0);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#publications", label: "Publications" },
    { href: "#work-experience", label: "Experience" },
  ];

  // Track scroll for transparency
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active link
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(mapSectionToNav(entry.target.id));
          }
        }),
      { rootMargin: "-30% 0px -55% 0px", threshold: 0.05 }
    );

    observedSectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Escape key closes menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) setIsMenuOpen(false);
    };
    if (isMenuOpen) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  // Calculate dynamic transparency
  const opacity = Math.min(0.05 + scrollY / 500, 0.95); // min 0.05, max 0.95

  return (
    <>
      <a href="#home" className="skip-to-content sr-only" aria-label="Skip to main content">
        Skip to content
      </a>

      {/* Main navbar */}
      <nav
        className={`fixed top-6 left-8 right-8 z-50 flex items-center justify-between
          rounded-full px-6 py-3 transition-all duration-300
          backdrop-blur-2xl border border-white/20 shadow-lg`}
        style={{
          background: `rgba(15,23,42,${opacity})`, // dynamically transparent
          boxShadow: `0 4px 15px rgba(0,0,0,${opacity * 0.2})`,
        }}
      >
        {/* Logo / brand */}
        <a href="#home" className="flex items-center gap-2 text-[#14B8A6] font-semibold text-lg">
          <span className="w-6 h-6 rounded-full bg-[#14B8A6]/20 flex items-center justify-center text-[#14B8A6] font-bold">
            M
          </span>
          
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-100">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={`relative px-3 py-1 rounded-full transition-colors duration-200 ${
                activeId === link.href.slice(1)
                  ? "text-[#14B8A6] font-semibold"
                  : "text-gray-200 hover:text-[#14B8A6]"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {link.label}
              {activeId === link.href.slice(1) && (
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-[#14B8A6] rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-gray-100 hover:text-[#14B8A6] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/50"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu with animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed left-8 right-8 top-20 z-40
              bg-[#0b1220]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl
              px-4 pt-4 pb-6 space-y-2 text-gray-100"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeId === link.href.slice(1)
                    ? "bg-white text-[#14B8A6] font-semibold"
                    : "hover:bg-white/5 hover:text-[#14B8A6]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
