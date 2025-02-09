"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does AI-driven engineering differ from traditional development?",
    answer:
      "AI-driven engineering integrates artificial intelligence throughout the development lifecycle, automating repetitive tasks, enhancing code quality, and accelerating delivery times. This approach allows human engineers to focus on creative problem-solving and strategic decisions.",
  },
  {
    question: "Will AI replace our current engineering team?",
    answer:
      "No. Our approach enhances rather than replaces human expertise. We help your team leverage AI tools to become more productive and focus on higher-value work. The goal is to empower your engineers, not replace them.",
  },
  {
    question: "How much can we really save with AI-driven engineering?",
    answer:
      "Our clients typically see significant cost savings. With our AI-supercharged engineers at $6,000 per month (plus nominal AI tool fee) compared to traditional costs of $10,000-$25,000, the savings are substantial. Additionally, faster development cycles and reduced technical debt contribute to long-term cost efficiency.",
  },
  {
    question: "How do you ensure quality when development is accelerated?",
    answer:
      "Our AI tools enhance quality control through automated testing, continuous code review, and predictive analytics. This actually leads to fewer bugs and more robust code compared to traditional methods, even with faster delivery times.",
  },
  {
    question: "What kind of training do you provide for our existing team?",
    answer:
      "We offer comprehensive training programs tailored to your team's needs, covering both technical skills and strategic thinking. This includes hands-on workshops, real-world projects, and ongoing support to ensure successful AI adoption.",
  },
  {
    question: "How long does it take to see results from AI-driven engineering?",
    answer:
      "Most clients see immediate impacts in development speed and cost savings. However, the full benefits of AI transformation, including team upskilling and process optimization, typically manifest over 3-6 months of implementation.",
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button className="flex justify-between items-center w-full py-4 text-left" onClick={() => setIsOpen(!isOpen)}>
        <span className="text-lg font-semibold text-foreground">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="py-4 text-muted-foreground">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  return (
    <section className="section-padding">
      <div className="section-container pt-14">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Get answers to common questions about AI-driven engineering</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

