import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Rocket, Clock, Target, Zap } from "lucide-react"

export default function LaunchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 md:pr-8">
          <h1 className="text-5xl font-bold mb-4">Launch</h1>
          <h2 className="text-3xl font-semibold mb-6">Accelerate Your Development with Launch Services</h2>
          <p className="text-xl mb-8">
            From concept to MVP in weeks. Validate your ideas faster and more efficiently with our AI-powered
            development process.
          </p>
          <Button size="lg" className="mb-4">
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Launch Service Illustration"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Key Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Rocket, title: "Swift Market Entry", description: "Launch your MVP in record time" },
            { icon: Clock, title: "Time Efficiency", description: "Reduce development cycles significantly" },
            { icon: Target, title: "Targeted Solutions", description: "Tailored MVPs for your specific needs" },
            { icon: Zap, title: "AI-Powered Development", description: "Leverage cutting-edge AI tools" },
          ].map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex flex-col items-center p-6">
                <benefit.icon className="h-12 w-12 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                <p className="text-center text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Our Process</h3>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
          {[
            { title: "Initial Consultation", description: "Identify goals, target audience, and feature priorities" },
            {
              title: "Concept Validation",
              description: "Use AI-driven tools to assess feasibility and define MVP scope",
            },
            {
              title: "Rapid Development",
              description: "Build core features using pre-trained AI models and frameworks",
            },
            {
              title: "Deployment",
              description: "Ensure readiness for launch, including testing and deployment support",
            },
            { title: "Feedback Integration", description: "Facilitate iterative improvements based on user responses" },
          ].map((step, index) => (
            <div key={index} className="flex items-center mb-8">
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              <div className="rounded-full bg-primary text-white w-8 h-8 flex items-center justify-center z-10">
                {index + 1}
              </div>
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 bg-secondary/30 rounded-lg p-8">
        <h3 className="text-2xl font-semibold mb-6">Sample Use Case</h3>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <p className="text-lg mb-4">
              A tech startup approached EngineerWith.AI to develop a social media analytics platform. Leveraging AI, we
              delivered an MVP with sentiment analysis and data visualization features in six weeks, enabling the
              startup to secure seed funding.
            </p>
            <Button variant="outline">Read Full Case Study</Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Social Media Analytics Platform"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Related Blog Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "5 Key Factors for a Successful MVP Launch", date: "May 15, 2023" },
            { title: "How AI is Revolutionizing MVP Development", date: "June 2, 2023" },
            { title: "From Idea to Market: A Launch Success Story", date: "June 20, 2023" },
          ].map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Image
                  src={`/placeholder.svg?height=200&width=400&text=Blog+${index + 1}`}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <h4 className="text-lg font-semibold mb-2">{post.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{post.date}</p>
                <Link href="#" className="text-primary hover:underline">
                  Read More <ArrowRight className="inline h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="text-center mb-16">
        <h3 className="text-2xl font-semibold mb-4">Ready to turn your idea into reality?</h3>
        <Button asChild size="lg">
          <Link href="/contact">Contact us today!</Link>
        </Button>
      </div>
    </div>
  )
}

