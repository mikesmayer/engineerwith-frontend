import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Zap, DollarSign, Puzzle } from "lucide-react"

export default function StaffPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 md:pr-8">
          <h1 className="text-5xl font-bold mb-4">Staff</h1>
          <h2 className="text-3xl font-semibold mb-6">Enhance Your Team with AI-Trained Experts</h2>
          <p className="text-xl mb-8">
            Access top-tier AI-trained engineers on demand. Scale your team efficiently and leverage cutting-edge AI
            expertise.
          </p>
          <Button size="lg" className="mb-4">
            Explore Staffing Options
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="AI-Trained Engineers Illustration"
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
            { icon: Users, title: "Expert AI Engineers", description: "Access to top-tier AI-trained talent" },
            { icon: Zap, title: "Rapid Integration", description: "Seamless onboarding and team integration" },
            { icon: DollarSign, title: "Cost-Effective", description: "Competitive rates for high-quality expertise" },
            { icon: Puzzle, title: "Flexible Scaling", description: "Easily scale your team up or down as needed" },
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
        <h3 className="text-2xl font-semibold mb-6">Our Staffing Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Needs Assessment",
              description: "We start by understanding your specific requirements, project scope, and team dynamics.",
            },
            {
              title: "Talent Matching",
              description: "Our AI algorithms match your needs with our pool of pre-vetted, AI-trained engineers.",
            },
            {
              title: "Seamless Onboarding",
              description: "We ensure a smooth transition and integration of the selected engineers into your team.",
            },
            {
              title: "Ongoing Support",
              description: "Our team provides continuous support to optimize performance and alignment.",
            },
          ].map((step, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16 bg-secondary/30 rounded-lg p-8">
        <h3 className="text-2xl font-semibold mb-6">Success Story</h3>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <p className="text-lg mb-4">
              A mid-sized fintech firm needed to expand its development team for a new AI-powered loan assessment tool.
              We provided three engineers who accelerated development, reducing the product's time-to-market by 40%.
            </p>
            <Button variant="outline">Read Full Case Study</Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Fintech Success Story"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Pricing</h3>
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <h4 className="text-xl font-semibold mb-4">Flexible and Competitive Rates</h4>
            <p className="text-lg mb-4">
              Our AI-supercharged engineers are available at competitive rates, starting from:
            </p>
            <p className="text-3xl font-bold text-primary mb-4">$6,000 per month</p>
            <p className="text-muted-foreground mb-4">
              Plus a nominal AI tool fee. Compare this to the typical $10,000-$25,000 monthly investment for traditional
              hiring.
            </p>
            <Button>Get Custom Quote</Button>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Related Blog Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "The Rise of AI-Trained Engineers in Tech", date: "July 5, 2023" },
            { title: "How to Integrate AI Engineers into Your Team", date: "July 18, 2023" },
            { title: "Cost-Benefit Analysis: AI Staffing vs. Traditional Hiring", date: "August 2, 2023" },
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
        <h3 className="text-2xl font-semibold mb-4">Ready to enhance your team with AI expertise?</h3>
        <Button asChild size="lg">
          <Link href="/contact">Contact us today!</Link>
        </Button>
      </div>
    </div>
  )
}

