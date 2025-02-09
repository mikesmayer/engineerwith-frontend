import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Cog, TrendingUp, Layers, BarChart } from "lucide-react"

export default function TransformPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 md:pr-8">
          <h1 className="text-5xl font-bold mb-4">Transform</h1>
          <h2 className="text-3xl font-semibold mb-6">Revolutionize Your Engineering with AI</h2>
          <p className="text-xl mb-8">
            Integrate AI into your existing workflows, modernize your development process, and unlock unprecedented
            efficiency and innovation.
          </p>
          <Button size="lg" className="mb-4">
            Start Your Transformation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="AI Transformation Illustration"
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
            {
              icon: Zap,
              title: "Accelerated Development",
              description: "Reduce time-to-market with AI-powered workflows",
            },
            { icon: Cog, title: "Enhanced Efficiency", description: "Optimize processes and reduce operational costs" },
            {
              icon: TrendingUp,
              title: "Scalable Solutions",
              description: "Future-proof your engineering capabilities",
            },
            {
              icon: Layers,
              title: "Seamless Integration",
              description: "Integrate AI without disrupting existing systems",
            },
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
        <h3 className="text-2xl font-semibold mb-6">Our Transformation Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Diagnostic Evaluation",
              description:
                "We start by thoroughly assessing your current workflows, tools, and challenges to identify areas for AI integration.",
            },
            {
              title: "Strategy Design",
              description:
                "Our experts develop a comprehensive roadmap for AI integration, tailored to your specific needs and goals.",
            },
            {
              title: "Implementation",
              description:
                "We execute the strategy with minimal disruption to your existing operations, ensuring a smooth transition.",
            },
            {
              title: "Iterative Refinement",
              description:
                "We continuously monitor, optimize, and refine the AI integration to maximize efficiency and outcomes.",
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
              A retail company partnered with us to transform its legacy inventory management system using AI. The
              result was a predictive analytics tool that reduced stockouts by 25% and cut operational costs by 15%.
            </p>
            <Button variant="outline">Read Full Case Study</Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Retail AI Transformation"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Transformation Impact</h3>
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8">
                <h4 className="text-xl font-semibold mb-4">Measurable Results</h4>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>40% average reduction in development time</li>
                  <li>25% improvement in code quality and efficiency</li>
                  <li>35% increase in successful project deliveries</li>
                  <li>20% reduction in overall operational costs</li>
                </ul>
                <Button>View Detailed Analytics</Button>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <BarChart className="w-full h-64 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">AI Integration Areas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Code Generation & Optimization",
              description:
                "Leverage AI to generate and optimize code, reducing development time and improving quality.",
            },
            {
              title: "Automated Testing & QA",
              description: "Implement AI-driven testing and quality assurance processes for more robust software.",
            },
            {
              title: "Predictive Maintenance",
              description: "Use AI to predict and prevent software issues before they impact your users.",
            },
          ].map((area, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-2">{area.title}</h4>
                <p className="text-muted-foreground mb-4">{area.description}</p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Related Blog Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "The Future of Software Engineering: AI-Driven Transformation", date: "September 22, 2023" },
            { title: "5 Ways AI is Revolutionizing Software Development Workflows", date: "October 5, 2023" },
            {
              title: "Case Study: How AI Transformed a Legacy System into a Cutting-Edge Solution",
              date: "October 18, 2023",
            },
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
        <h3 className="text-2xl font-semibold mb-4">Ready to transform your engineering capabilities with AI?</h3>
        <Button asChild size="lg">
          <Link href="/contact">Contact us today!</Link>
        </Button>
      </div>
    </div>
  )
}

