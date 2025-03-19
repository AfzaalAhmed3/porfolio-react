import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experienceItems = [
  {
    title: "Google Certified UX Designer",
    company: "Google",
    skill: "UX Design",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/FRX94DU8ZXAV"
  },
  {
    title: "Trainee Certificate of Freelancing",
    id: "XFYY7QCMK",
    skill: "Freelance Marketing",
    link: "https://digiskills.pk/verify"
  },
  {
    title: "Trainee Certificate of Graphic Designing",
    id: "AFVFCV8MK",
    skill: "Adobe Suite",
    link: "https://digiskills.pk/verify"
  },
  {
    title: "6-Week Internship",
    company: "Cosmi Code",
    skill: "Graphic Design",
    link: "https://docs.google.com/spreadsheets/u/0/d/1f6ttG4ZMzDHhQ0SDFYGwU3NYamI4DlSdj30m1_nFsZY/htmlview"
  },
  {
    title: "4-Week Internship",
    company: "Next Gen Dev",
    skill: "UI Design",
    link: "https://drive.google.com/file/d/1T3Sa8DbK2GKDKZAUtoCOeP7j0KCq5V7U/view?usp=sharing"
  },
  {
    title: "4-Week Internship",
    company: "Young Dev Intern",
    skill: "Graphic Design",
    link: "https://drive.google.com/file/d/14652syC4HeITh2KATQxHaVb-7GbYd1PX/view?usp=sharing"
  },
  {
    title: "4-Week Internship",
    company: "Programmerstech",
    skill: "Graphic Design",
    link: "https://drive.google.com/file/d/1C64F4G2avlM_fCibTRfl2Wkj3c6YnZQ_/view?usp=drive_link"
  },
  {
    title: "Udemy Course For Complete Video Editing",
    company: "Udemy",
    skill: "Adobe Premiere Pro, Adobe After Effects, Filmora",
    link: "https://www.udemy.com/certificate/UC-89cb462f-b912-4c63-b028-dc6f35b3d326/"
  },
  {
    title: "Udemy Course For UI UX Design with Adobe XD",
    company: "Udemy",
    skill: "UI/UX Design (Adobe XD)",
    link: "https://www.udemy.com/certificate/UC-abf9fbd4-3c22-4504-bcda-75367dd0abfd/"
  },
  {
    title: "Udemy Course For T-Shirt Design",
    company: "Udemy",
    skill: "Adobe Photoshop",
    link: "https://www.udemy.com/certificate/UC-b29d9838-2e37-4bde-9786-ec6e2dba4adb/"
  }
];

export default function Experience() {
  return (
    <section id="experience-section" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-6xl font-bold mb-4">Experience</h2>
          </motion.div>
        </div>

        <div className="grid gap-6 max-w-[80%] mx-auto">
          {experienceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6  bg-muted/50">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <h1 className="text-primary text-[30px] font-extrabold">
                      {item.title}
                    </h1>
                  </div>
                  {item.id && <h3 className="text-muted-foreground">ID: {item.id}</h3>}
                  <h3 className="text-xl font-semibold">{item.skill}</h3>
                  {item.company && <p className="text-muted-foreground mt-1">{item.company}</p>}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline mt-2 inline-block"
                  >
                    View Certificate
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
