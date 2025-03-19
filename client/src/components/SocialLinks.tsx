import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/johndoe",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/johndoe",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/johndoe",
    icon: Twitter,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social, index) => (
        <motion.div
          key={social.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:text-primary"
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <social.icon className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
