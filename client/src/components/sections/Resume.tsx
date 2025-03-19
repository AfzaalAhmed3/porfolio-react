import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const educationItems = [
  {
    period: "2022-continue",
    title: "BS.c Software Engineering",
    institution: "UET Taxila"
  },
  {
    period: "2020-2022",
    title: "Intermediate In Computer Science",
    institution: "APS EME Rawalpindi"
  },
  {
    period: "2018-2020",
    title: "Matric",
    institution: "Punjab College Jand"
  }
];

export default function Resume() {
  return (
    <section id="resume-section" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-6xl font-bold mb-4">Resume</h2>
          </motion.div>
        </div>

        <div className="grid gap-6 max-w-[80%]  mx-auto">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6  bg-muted/50">
                  <span className="text-primary text-[34px] font-extrabold">{item.period}</span>
                  <h3 className="text-2xl font-semibold mb-2 mt-2">{item.title}</h3>
                  <span className="text-xl text-muted-foreground">{item.institution}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button className="w-[15rem] h-[4rem]  " asChild>
            <a href="#" className="px-8 text-xl font-semibold">Download CV</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
