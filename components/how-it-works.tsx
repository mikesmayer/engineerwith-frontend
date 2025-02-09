"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ClipboardCheck, PenTool, Users, Rocket } from "lucide-react"

const steps = [
  {
    title: "Project Evaluation",
    icon: ClipboardCheck,
    points: [
      "Deep dive into business objectives",
      "Understand challenges and goals",
      "Assess tech stack and workflow",
      "Define clear success metrics",
    ],
  },
  {
    title: "AI Tool Assessment",
    icon: PenTool,
    points: [
      "Analyze AI tools for your needs",
      "Create tailored tech recommendations",
      "Consider scalability and integration",
      "Present cost-benefit analysis",
    ],
  },
  {
    title: "Engineer Matching",
    icon: Users,
    points: [
      "Match with experienced engineers",
      "Ensure AI tool expertise",
      "Consider team culture fit",
      "Verify technical proficiency",
    ],
  },
  {
    title: "Project Launch",
    icon: Rocket,
    points: [
      "Choose management style",
      "Set up communication channels",
      "Structured onboarding process",
      "Regular alignment check-ins",
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function HowItWorks() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl font-bold">How It Works</h2>
          <p className="text-xl text-muted-foreground">Transform Your Engineering with AI: Four Simple Steps</p>
        </div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div key={step.title} variants={itemVariants}>
              <Card className="h-full overflow-hidden group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold flex items-center">{step.title}</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    {step.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

