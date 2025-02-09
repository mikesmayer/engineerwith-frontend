import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Rocket, Users, GraduationCap, Sparkles } from "lucide-react"
import { Footer } from "@/components/footer"

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary/30 to-background pt-32 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">About EngineerWith.AI</h1>
            <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
              Better. Faster. Cheaper. Have It All with AI-Driven Engineering.
            </p>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-4">
                  EngineerWith.AI is a forward-thinking software engineering firm headquartered in Los Angeles,
                  California, but operating globally. Our network of elite, AI-trained engineers spans every major
                  market, enabling companies to scale their development efforts efficiently—without sacrificing speed,
                  quality, or cost-effectiveness.
                </p>
                <p className="text-lg">
                  We exist to make building software better, faster, and cheaper by leveraging engineers trained in the
                  most advanced AI tools. Unlike traditional development models, we integrate AI across the entire
                  software lifecycle—from product ideation to deployment—allowing companies to accelerate timelines,
                  reduce expenses, and maintain exceptional engineering quality.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-lg">
                  We believe in a world where AI enhances, not replaces, human engineers—empowering developers to create
                  more, innovate faster, and build with confidence. Our mission is to help businesses harness the full
                  potential of AI-driven software development, transforming engineering challenges into strategic
                  advantages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why EngineerWith.AI Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Why EngineerWith.AI?</h2>
            <p className="text-lg mb-6">Many companies today face three critical challenges in software development:</p>
            <ul className="list-disc list-inside text-lg mb-6 space-y-2">
              <li>Speed vs. Quality: Rushing to market often leads to technical debt, bugs, or missed deadlines.</li>
              <li>
                Talent Shortages & High Costs: Skilled developers are expensive and hard to find, making scaling
                engineering teams difficult.
              </li>
              <li>
                Adapting to AI: AI has revolutionized product development, but many teams struggle to adopt it
                effectively.
              </li>
            </ul>
            <p className="text-lg">
              At EngineerWith.AI, we solve these problems by providing elite AI-trained engineers who deliver results up
              to 5x faster at a fraction of the cost. Our clients don't have to choose between speed, quality, and
              affordability—they can have all three.
            </p>
          </div>
        </section>

        {/* What Sets Us Apart Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">What Sets Us Apart?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "AI Supercharged Engineering",
                  description:
                    "We don't just use AI for automation; we integrate it across the full development cycle for maximum efficiency and impact.",
                },
                {
                  title: "5x Faster Project Delivery",
                  description: "AI-enhanced workflows compress development timelines, ensuring rapid time-to-market.",
                },
                {
                  title: "Significant Cost Savings",
                  description:
                    "Our AI-powered engineers cost $6,000/month (+ AI tool fee), compared to the $10,000–$25,000 monthly cost of traditional developers.",
                },
                {
                  title: "End-to-End AI Integration",
                  description:
                    "From requirements gathering to testing and optimization, we ensure that AI doesn't just automate but transforms your development process.",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <CheckCircle className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How We Help Companies Win with AI Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">How We Help Companies Win with AI</h2>
            <p className="text-lg mb-6">
              We offer four distinct service lines to help businesses integrate AI into their development workflows:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Rocket,
                  title: "Launch: From Concept to MVP in Weeks",
                  description: "For startups and innovators needing rapid market validation.",
                  points: [
                    "AI-powered MVP development with clear timelines and fixed pricing.",
                    "Accelerated time-to-market with real user feedback loops.",
                    "Predictable costs without the risk of over-engineering.",
                  ],
                },
                {
                  icon: Users,
                  title: "Staff: Engineers + Best AI Engineering Practices On Demand",
                  description: "For growing companies that need AI-trained engineering talent.",
                  points: [
                    "Access elite AI-trained developers at $6,000/month—a fraction of typical costs.",
                    "Seamless integration into your team's workflows.",
                    "Scale faster without ballooning your budget.",
                  ],
                },
                {
                  icon: GraduationCap,
                  title: "Train: Future-Proof Your Development Team",
                  description: "For teams needing hands-on AI upskilling.",
                  points: [
                    "AI training tailored to your company's tech stack.",
                    "Workshops, hands-on sessions, and ongoing support.",
                    "Cultivating AI adoption across product and engineering teams.",
                  ],
                },
                {
                  icon: Sparkles,
                  title: "Transform: Full-Scale AI-Driven Engineering Optimization",
                  description:
                    "For enterprises looking to fully integrate AI into their software development processes.",
                  points: [
                    "Custom AI strategy for large-scale modernization.",
                    "Cost savings and efficiency through AI-powered automation.",
                    "Scalable transformation that enhances human creativity, not replaces it.",
                  ],
                },
              ].map((service, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="mb-4">{service.description}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {service.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Our Vision for the Future of Software Development</h2>
            <p className="text-lg mb-6">
              We envision a world where AI democratizes software engineering, making high-quality development accessible
              to startups, scale-ups, and enterprises alike.
            </p>
            <ul className="list-disc list-inside text-lg mb-6 space-y-2">
              <li>
                <strong>Better:</strong> AI-driven precision and robust engineering standards.
              </li>
              <li>
                <strong>Faster:</strong> Compressing product cycles to help you go to market in record time.
              </li>
              <li>
                <strong>Cheaper:</strong> Optimizing engineering budgets while maintaining quality.
              </li>
            </ul>
            <p className="text-lg font-semibold">
              At EngineerWith.AI, we don't just build software. We redefine how software is built.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

