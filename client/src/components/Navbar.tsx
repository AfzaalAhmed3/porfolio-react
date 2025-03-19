import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

const navLinks = [
  { href: "#home-section", label: "Home" },
  { href: "#about-section", label: "About" },
  { href: "#resume-section", label: "Resume" },
  { href: "#experience-section", label: "Experience" },
  { href: "#services-section", label: "Services" },
  { href: "#skills-section", label: "Skills" },
  { href: "#projects-section", label: "Projects" },
  { href: "#contact-section", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-background/10 backdrop-blur-sm border-b border-primary/20 py-4 transition-transform ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container  ml-4 px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="#home-section" className="text-2xl font-bold text-primary">
          Muhammad Waqar Aslam
        </Link>

        {/* Desktop Menu */}
        <div className="hidden  mr-6 md:flex space-x-8 text-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden lg:hidden "
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-8 w-8 text-primary" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-primary">Menu</h2>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-primary" />
          </button>
        </div>

        <div className="flex flex-col space-y-4 p-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg text-muted-foreground hover:text-primary transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}