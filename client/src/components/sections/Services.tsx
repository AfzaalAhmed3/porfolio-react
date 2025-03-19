import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { title: "Vector Illustration", icon: "/images/icons8-vector-64.png" },
  { title: "Logo Design", icon: "/images/icons8-logo-64.png" },
  { title: "Brochure Design", icon: "/images/icons8-brochure-64.png" },
  { title: "Flyer Design", icon: "/images/icons8-flyer-64.png" },
  { title: "Poster Design", icon: "/images/icons8-poster-64.png" },
  { title: "Business Card", icon: "/images/icons8-business-card-64.png" },
  { title: "UI/UX Design", icon: "/images/icons8-ui-ux-design-64.png" },
  { title: "Branding And Identity", icon: "/images/icons8-branding-64.png" },
  { title: "T-Shirt Design", icon: "/images/icons8-shirt-64.png" },
  { title: "Photo Editing", icon: "/images/icons8-photo-editor-64.png" },
  { title: "Infographics", icon: "/images/icons8-infographics-64.png" },
  { title: "Sass", icon: "/images/icons8-sass-64.png" },
  { title: "Social Media Graphic Design", icon: "/images/icons8-social-media-marketing-64.png" },
  { title: "Online Graphics", icon: "/images/icons8-online-shopping-64.png" },
  { title: "Color Theory", icon: "/images/icons8-color-mode-64.png" }
];

export default function Services() {
  return (
    <section id="services-section" className="py-20">
      <div className="container max-w-[80%] mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-6xl font-bold mb-4">Services</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:border-primary transition-colors duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
