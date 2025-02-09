import { Header } from "@/components/header"
import BackgroundPaths from "@/components/background-paths"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ServicesList } from "@/components/services-list"
import { LogoCarousel } from "@/components/logo-carousel"
import { HowItWorks } from "@/components/how-it-works"
import { Benefits } from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="relative pt-16 pb-32 bg-background">
        <BackgroundPaths title="Better, Faster, Cheaper" />

        <div className="container mx-auto px-4 relative z-10 -mt-32">
          <div className="text-center max-w-4xl mx-auto space-y-12">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Have it all. Ship game-changing software at unprecedented speed.
              </h1>
            </div>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our AI-powered engineering and product teams deliver enterprise-grade solutions while maximizing your
              development budget.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="gap-2 w-full sm:w-auto">
                Schedule Consultation <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Calculate Your ROI
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className="my-16">
        <ServicesList />
      </div>
      <div className="my-16">
        <LogoCarousel />
      </div>
      <div className="my-16">
        <HowItWorks />
      </div>
      <div className="my-16">
        <Benefits />
      </div>
      <div className="my-16">
        <Testimonials />
      </div>
      <div className="my-16">
        <FAQ />
      </div>
      <Footer />
    </main>
  )
}

