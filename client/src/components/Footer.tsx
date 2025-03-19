import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";
import { SiLinkedin, SiGithub, SiInstagram, SiFacebook } from "react-icons/si";
import SocialLinks from "./SocialLinks";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/muhammad-waqar-aslam-956959263",
    icon: SiLinkedin,
    label: "LinkedIn"
  },
  {
    href: "https://github.com/Deadbody001",
    icon: SiGithub,
    label: "GitHub"
  },
  {
    href: "#",
    icon: SiInstagram,
    label: "Instagram"
  },
  {
    href: "https://www.facebook.com/share/1A6NJmLmYA/?mibextid=wwXIfr",
    icon: SiFacebook,
    label: "Facebook"
  }
];

const navLinks = [
  { href: "#home-section", label: "Home" },
  { href: "#about-section", label: "About" },
  { href: "#experience-section", label: "Experience" },
  { href: "#services-section", label: "Services" },
  { href: "#projects-section", label: "Projects" },
  { href: "#contact-section", label: "Contact" }
];

export default function Footer() {
  return (
    <footer className="bg-muted/50 py-16">
      <div className="container max-w-[80%] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h2 className="text-center text-xl font-semibold mb-4">About</h2>
            <p className="text-muted-foreground mb-6">
              I am a passionate and creative graphic designer with over two years of experience in
              visual communication, branding, digital design, and UI/UX design. My journey in the
              design world has allowed me to collaborate with diverse clients, from startups to
              established brands, helping them bring their visions to life through compelling visuals.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="text-center justify-center">
            <h2 className="text-center text-xl font-semibold mb-4">Links</h2>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="justify-center  text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Questions Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Have Questions?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Islamabad, Punjab, Pakistan
                </span>
              </li>
              <li>
                <a
                  href="tel:+923216613850"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>0321-6613850</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:waqaraslammalikawan@gmail.com"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>waqaraslammalikawan@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved | Designed by Afzaal Ahmed
          </p>
        </div>
      </div>
    </footer>
  );
}