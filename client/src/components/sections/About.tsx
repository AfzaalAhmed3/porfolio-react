import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about-section" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-5/12"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <img
                src="/images/profile1.png"
                alt="Muhammad Waqar Aslam"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-7/12"
          >
            <h2 className="text-6xl font-bold mb-8">About Me</h2>
            <Card>
              <CardContent className="p-6">
                <dl className="space-y-4">
                  <div className="flex gap-[1rem]">
                    <dt className="font-bold">Name:</dt>
                    <dd className="text-muted-foreground">Muhammad Waqar Aslam</dd>
                  </div>
                  <div className="flex gap-[1rem]">
                    <dt className="font-bold">Date of birth:</dt>
                    <dd className="text-muted-foreground">May 11, 2004</dd>
                  </div>
                  <div className="flex  gap-[1rem]  ">
                    <dt className="font-bold">Address:</dt>
                    <dd  className="text-muted-foreground">Islamabad, Punjab, Pakistan</dd>
                  </div>
                  <div className="flex gap-[1rem]">
                    <dt className="font-bold">Email:</dt>
                    <dd>
                      <a href="mailto:waqaraslammalikawan@gmail.com" className=" text-muted-foreground hover:underline">
                        waqaraslammalikawan@gmail.com
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-[1rem] ">
                    <dt className="font-bold ">Phone:</dt>
                    <dd>
                      <a href="tel:03216613850" className=" hover:underline text-muted-foreground">
                        03216613850
                      </a>
                    </dd>
                  </div>
                </dl>

                <div className="mt-8">
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">40+</span>
                    <span className="block text-lg text-muted-foreground">Projects completed</span>
                  </div>
                  <Button className="text-md">Download CV</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}