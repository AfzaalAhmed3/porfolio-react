import { motion } from "framer-motion";
import ProgressBar from "../ProgressBar";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "Adobe Photoshop", level: 100 },
  { name: "Adobe Illustrator", level: 90 },
  { name: "Adobe InDesign", level: 95 },
  { name: "Adobe Color", level: 100 },
  { name: "Canva", level: 100 },
  { name: "Adobe XD", level: 100 },
  { name: "Figma", level: 100 },
  { name: "InPage", level: 80 },
  { name: "Corel Draw", level: 80 },
  { name: "Adobe Premiere Pro", level: 90 },
  { name: "Adobe After Effects", level: 92 },
  { name: "Filmora", level: 85 },
  { name: "Adobe Lightroom", level: 92 },
  { name: "Davinci Resolve", level: 90 },
];

export default function Skills() {
  return (
    <section id="skills-section" className="py-20 bg-black">
      <div className="max-w-[80%] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-yellow-400">My Skills</h2>
        </motion.div>

        <Card className="bg-muted/50 border border-gray-800 text-white">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <ProgressBar value={skill.level} />
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
