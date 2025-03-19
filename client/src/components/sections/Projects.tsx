import { motion } from "framer-motion";

const projects = [
  // { title: "Mobile App SignIn/SignUp Page", image: "/images/mobile.jpg" },
  { title: "Books Store Mobile App Design", image: "/images/MobileApp.jpg" },
  { title: "E-Commerce Web Design", image: "/images/web.jpg" },
  { title: "Dashboard Design", image: "/images/DashboardDesign.jpg" },
  // { title: "Email Template Design", image: "/images/emaildesign.jpg" },
  { title: "Shoe E-Commerce", image: "/images/Ecommerce.jpg" },
  { title: "Vector Illustration Design", image: "/images/vector.png" },
  { title: "Flyer Design", image: "/images/flyer.jpg" },
  { title: "Social Media Post", image: "/images/socialmedia.jpg" },
  // { title: "Mood Board Design", image: "/images/Mood.jpg" },
  // { title: "Poster Design", image: "/images/poster.png" },
  // { title: "Brand Style Guidelines", image: "/images/BrandStyle.jpg" },
  { title: "Business Card Design", image: "/images/business.jpg" },
  { title: "Brochure Design", image: "/images/brochier.jpg" },
  // { title: "Tri Fold Brochure Design", image: "/images/trifold.png" },
  { title: "Magazine Cover Design", image: "/images/magzine.jpg" },
  // { title: "Brand Packing Design", image: "/images/packaging.png" },
  // { title: "T-Shirt Design", image: "/images/T-Shirt.jpg" },
  { title: "Logo Design", image: "/images/smartmockups_lxvnhp74.jpg" },
  { title: "Infographics", image: "/images/infographics.png" },
  { title: "Photo Editing", image: "/images/photoEditing.jpg" },
];

export default function Projects() {
  return (
    <section id="projects-section" className="py-20">
      <div className="max-w-[80%] container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl font-bold mb-4">Projects</h1>
            <h2 className="text-2xl">Our Projects</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="w-full h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold text-center px-4">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
