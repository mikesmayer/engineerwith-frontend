import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, DollarSign, Zap, Lightbulb, FileText, Users, Brain } from "lucide-react"
import { Footer } from "@/components/footer"

export default function WhyThisMattersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {" "}
        {/* Added pt-16 to account for the fixed header */}
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">A Fundamental Change in How We Build Software</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                AI isn't just augmenting our tools—it's transforming how we think about, design, and build software
                systems.
              </p>
            </div>
          </div>
        </section>
        {/* Understanding the Change */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Understanding the Depth of Change</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Software development is undergoing a significant transformation. While change is constant in our
                industry, the integration of AI represents a fundamental shift in how we approach building software.
                This isn't just about new tools—it's about rethinking our entire approach to product development and
                engineering.
              </p>
            </div>
          </div>
        </section>
        {/* Evolution of Documentation */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">The Evolution of Software Documentation</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Then: User Story-Focused Development</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Brief user stories drove development decisions</li>
                    <li>• "As a user, I want to..." guided feature development</li>
                    <li>• Documentation was often minimal and informal</li>
                    <li>• Focus on individual features and behaviors</li>
                    <li>• Communication primarily between humans</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Now: System-Level Architecture & Documentation</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Comprehensive Product Requirements Documents (PRDs)</li>
                    <li>• Detailed system architecture specifications</li>
                    <li>• Precise technical constraints and requirements</li>
                    <li>• Clear data flow and API documentation</li>
                    <li>• Documentation serves both human and AI consumption</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* Documentation Framework */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">The New Documentation Framework</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-6">Strategy, Branding, and Messaging</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Business goals and objectives</li>
                  <li>• Target audience analysis</li>
                  <li>• Brand voice and guidelines</li>
                  <li>• Market positioning strategy</li>
                  <li>• Value proposition definition</li>
                  <li>• Messaging framework</li>
                  <li>• Success metrics and KPIs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Product Requirements Document (PRD)</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• System overview and context</li>
                  <li>• Detailed functional requirements</li>
                  <li>• Technical constraints</li>
                  <li>• Integration requirements</li>
                  <li>• Performance expectations</li>
                  <li>• Security requirements</li>
                  <li>• Error handling specifications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">System Architecture Documents</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Component diagrams</li>
                  <li>• Data flow specifications</li>
                  <li>• API definitions</li>
                  <li>• Database schemas</li>
                  <li>• State management patterns</li>
                  <li>• Integration patterns</li>
                  <li>• Scaling considerations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Key Metrics */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Metrics</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Clock, title: "5x Faster", description: "Deliver projects up to 5x faster" },
                { icon: DollarSign, title: "40-60% Savings", description: "Reduce costs by 40-60%" },
                { icon: Zap, title: "90% Reduction", description: "Eliminate 90% of repetitive tasks" },
                { icon: Lightbulb, title: "3x Innovation", description: "Triple innovation capacity" },
              ].map((metric, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <metric.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">{metric.title}</h3>
                    <p className="text-muted-foreground">{metric.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Impact Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Navigating This Change</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: FileText,
                  title: "For Organizations",
                  items: [
                    "Adapt governance and oversight",
                    "Adjust budgeting and resource allocation",
                    "Address new security considerations",
                    "Invest in training and upskilling",
                  ],
                },
                {
                  icon: Users,
                  title: "For Teams",
                  items: [
                    "Embrace new collaboration patterns",
                    "Modify review processes",
                    "Focus on system-level thinking",
                    "Develop AI literacy",
                  ],
                },
                {
                  icon: Brain,
                  title: "For Individuals",
                  items: [
                    "Evolve technical skills",
                    "Adapt to new workflows",
                    "Emphasize problem solving",
                    "Learn to work with AI",
                  ],
                },
              ].map((section, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <section.icon className="w-12 h-12 mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

