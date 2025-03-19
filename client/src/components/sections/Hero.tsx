import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Graphic Designer", "UI/UX Designer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home-section"
      className="px-6 md:px-12 lg:px-20 lg:mt-4 md:mt-4 mt-[80px] sm:mt-8 pb-2 min-h-[100vh] flex items-center bg-background"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left w-full md:w-1/2"
        >
          <span className="text-3xl md:text-4xl font-bold mb-4 block">Hello!</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            I'm <span className="text-primary">Muhammad Waqar Aslam</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6">
            <span className="font-semibold" ref={el}></span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center md:items-start">
  <Button className="text-lg" size="default" asChild>
    <a
      href="https://www.truelancer.com/freelancer/waqaraslam7"
      target="_blank"
      rel="noopener noreferrer"
    >
      Hire me
    </a>
  </Button>
  <Button className="text-lg" variant="outline" size="default" asChild>
    <a href="#projects-section">My works</a>
  </Button>
</div>

        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 mt-10 md:mb-0 md:mt-0 flex justify-center"
        >
          <div className="relative ">
            <img
              src="/images/profile1.png"
              alt="Muhammad Waqar Aslam"
              className="object-cover w-full h-full "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
