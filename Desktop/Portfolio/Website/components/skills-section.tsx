"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Code, Laptop, Brain, Globe } from "lucide-react"

interface Skill {
  category: string
  icon: JSX.Element
  description: string
  items: string[]
  details: string // Added for pop-up
}

export function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const skills: Skill[] = [
    {
      category: "Python Development",
      icon: <Code className="h-8 w-8 text-primary" />,
      description: "Proficient in Python for scripting, data analysis, and backend development.",
      items: ["Django", "Flask", "FastAPI", "Pandas", "NumPy", "SQLAlchemy"],
      details:
        "Extensive experience in building robust backend systems and data processing pipelines using Python. Skilled in web frameworks like Django and Flask for RESTful APIs, and data manipulation with Pandas and NumPy. Familiar with ORMs like SQLAlchemy for database interactions.",
    },
    {
      category: "Web Development",
      icon: <Globe className="h-8 w-8 text-primary" />,
      description: "Experience in building responsive and dynamic web applications.",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "REST APIs"],
      details:
        "A strong foundation in modern front-end development using React and Next.js for server-side rendering and static site generation. Proficient in TypeScript for type-safe code and Tailwind CSS for rapid UI development. Experienced in consuming and building RESTful APIs.",
    },
    {
      category: "Machine Learning",
      icon: <Brain className="h-8 w-8 text-primary" />,
      description: "Knowledge of ML algorithms and frameworks for data-driven solutions.",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "Jupyter", "Data Preprocessing"],
      details:
        "Solid understanding of core machine learning concepts and algorithms, including supervised and unsupervised learning. Hands-on experience with TensorFlow and PyTorch for deep learning models, and Scikit-learn for traditional ML tasks. Proficient in data preprocessing and feature engineering.",
    },
    {
      category: "Desktop Development (Python)",
      icon: <Laptop className="h-8 w-8 text-primary" />,
      description: "Building cross-platform desktop applications with Python.",
      items: ["PyQt", "Tkinter", "Flet", "GUI Design", "Application Logic"],
      details:
        "Capable of developing interactive and user-friendly desktop applications using Python frameworks like PyQt and Flet. Experienced in designing intuitive graphical user interfaces (GUIs) and implementing complex application logic for various functionalities.",
    },
  ]

  const handleCardClick = (skill: Skill) => {
    setSelectedSkill(skill)
    setIsDialogOpen(true)
  }

  return (
    <section id="skills" className="container py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(skill)}
            className="cursor-pointer" // Indicate clickable
          >
            <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                {skill.icon}
                <CardTitle className="mt-4 text-xl">{skill.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{skill.description}</p>
                <ul className="list-disc list-inside text-sm text-left space-y-1">
                  {skill.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {selectedSkill && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{selectedSkill.category}</DialogTitle>
              <DialogDescription>{selectedSkill.description}</DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <h3 className="font-semibold mb-2">Key Technologies:</h3>
              <ul className="list-disc list-inside space-y-1">
                {selectedSkill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <h3 className="font-semibold mt-4 mb-2">Detailed Overview:</h3>
              <p className="text-sm text-muted-foreground">{selectedSkill.details}</p>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
