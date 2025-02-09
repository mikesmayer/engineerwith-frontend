"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, DollarSign, CheckCircle, Users } from "lucide-react"

const benefits = [
  {
    title: "Speed Without Sacrifice",
    icon: Zap,
    points: [
      "Deliver projects up to 5x faster than traditional methods",
      "Maintain high code quality through AI-assisted reviews",
      "Automate repetitive tasks while focusing on innovation",
      "Accelerate testing and deployment cycles",
    ],
  },
  {
    title: "Cost Efficiency",
    icon: DollarSign,
    points: [
      "Significant savings compared to traditional hiring",
      "$6,000 per AI-supercharged engineer (plus nominal AI tool fee)",
      "Versus typical $10,000-$25,000 monthly investment",
      "Reduce overhead and operational costs",
    ],
  },
  {
    title: "Quality Assurance",
    icon: CheckCircle,
    points: [
      "AI-powered code review and testing",
      "Automated quality checks and optimization",
      "Consistent coding standards enforcement",
      "Early bug detection and prevention",
    ],
  },
  {
    title: "Team Empowerment",
    icon: Users,
    points: [
      "Upskill your existing engineering team",
      "Access to cutting-edge AI tools and training",
      "Focus on high-value creative work",
      "Create an innovation-driven culture",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Benefits() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="section-container pt-14">
        {" "}
        {/* Add 56px (14 in Tailwind) of top padding */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl font-bold">Benefits</h2>
          <p className="text-xl text-muted-foreground">Why Choose AI-Driven Engineering?</p>
        </div>
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit) => (
            <motion.div key={benefit.title} variants={itemVariants}>
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-primary/5 dark:bg-primary/10 pb-6">
                  <CardTitle className="flex items-center text-2xl font-bold text-primary">
                    <benefit.icon className="w-8 h-8 mr-3" />
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2 text-muted-foreground">
                    {benefit.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-primary font-bold">•</span>
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

