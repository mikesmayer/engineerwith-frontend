"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ROICalculator } from "@/components/roi-calculator"

export default function ROICalculatorPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">ROI Calculator</h1>
          <p className="text-xl mb-8">
            Discover the potential savings and efficiency gains by working with EngineerWith.AI. Use our ROI calculator
            to estimate your cost savings, time-to-market acceleration, and team productivity improvements.
          </p>
          <ROICalculator />
        </div>
      </main>
      <Footer />
    </div>
  )
}

