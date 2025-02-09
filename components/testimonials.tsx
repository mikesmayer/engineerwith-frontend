"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "In just six weeks, EngineerWith.AI helped us build an MVP that would have taken months with traditional development. Their AI-driven approach not only accelerated our timeline but also helped us secure our seed funding ahead of schedule.",
    author: "Sarah Chen",
    title: "Founder, TechStartup Inc.",
  },
  {
    quote:
      "We were skeptical about AI integration at first, but their approach changed everything. Our development cycles are 40% faster, and our team is more engaged than ever, focusing on creative problem-solving instead of repetitive tasks.",
    author: "Michael Rodriguez",
    title: "CTO, GrowthCo",
  },
  {
    quote:
      "The cost savings were immediate and significant. We got access to top-tier engineering talent at a fraction of our previous spend, and the AI tools they introduced have transformed our development process.",
    author: "Jennifer Smith",
    title: "Engineering Director, ScaleUp Solutions",
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

export function Testimonials() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl font-bold">Testimonials</h2>
          <p className="text-xl text-muted-foreground">Hear from our satisfied clients</p>
        </div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="w-10 h-10 text-primary mb-4" />
                  <p className="text-foreground mb-6 flex-grow">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

