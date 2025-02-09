import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, Zap } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-secondary/30 to-background pt-32 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Pricing</h1>
            <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
              Elite AI-Powered Engineers. Transparent Pricing. No Surprises.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-6">
                At EngineerWith.AI, we believe in making AI-powered software development accessible, efficient, and
                cost-effective. Unlike traditional development firms that charge $10,000–$25,000 per engineer per month,
                we offer world-class AI-trained engineers for just $6,500/month—nearly just $40/hour.
              </p>
              <p className="text-lg mb-6">
                With AI-enhanced workflows, our engineers deliver up to 5x faster results while maintaining the highest
                standards of quality and innovation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Simple, Transparent Pricing</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-primary" />
                    AI-Enhanced Engineers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        <strong>$6,500/month per engineer</strong> (Less than $40/hour)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>AI-Trained & Ready to Work – No ramp-up time, no hidden fees.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        Work with Top-Tier Global Talent – Our engineers are hand-selected experts with AI-integrated
                        skill sets.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        Scales with Your Needs – Whether you need one engineer or an entire team, our pricing remains
                        predictable and fair.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-primary" />
                    AI Supercharged Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Our AI-trained engineers aren't just coders—they leverage the best AI-powered tools to speed up
                    development, automate testing, and optimize workflows. This means:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Faster time-to-market</strong> – AI automation accelerates coding, QA, and deployment.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Lower costs</strong> – AI reduces inefficiencies and unnecessary labor costs.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Higher quality software</strong> – Automated testing and AI-powered debugging ensure
                        cleaner, more robust code.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">How Our Pricing Compares</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service Type</TableHead>
                    <TableHead>Cost Per Month</TableHead>
                    <TableHead>Cost Per Hour</TableHead>
                    <TableHead>Speed of Delivery</TableHead>
                    <TableHead>AI-Powered Development</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">EngineerWith.AI</TableCell>
                    <TableCell>$6,500</TableCell>
                    <TableCell>~$40/hr</TableCell>
                    <TableCell>Up to 5x Faster</TableCell>
                    <TableCell>
                      <Check className="h-5 w-5 text-green-500" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Traditional US-Based Engineers</TableCell>
                    <TableCell>$10,000 – $25,000</TableCell>
                    <TableCell>$65 – $150/hr</TableCell>
                    <TableCell>Standard</TableCell>
                    <TableCell>❌</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Offshore Outsourcing Firms</TableCell>
                    <TableCell>$5,000 – $12,000</TableCell>
                    <TableCell>$30 – $75/hr</TableCell>
                    <TableCell>Slower</TableCell>
                    <TableCell>❌</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Freelancers</TableCell>
                    <TableCell>$7,000 – $18,000</TableCell>
                    <TableCell>$50 – $120/hr</TableCell>
                    <TableCell>Varies</TableCell>
                    <TableCell>❌</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="text-center mt-4 text-lg">
              With EngineerWith.AI, you get the best of both worlds: top-tier engineers, AI-powered efficiency, and
              predictable pricing.
            </p>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Scale Your Engineering Team on Demand</h2>
            <p className="text-center mb-8 max-w-3xl mx-auto">
              Whether you're a startup looking for rapid MVP development or an enterprise scaling engineering teams, we
              make it easy to hire elite AI-trained engineers without the high costs of traditional development.
            </p>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Team Size</TableHead>
                    <TableHead>Cost Per Month</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>1 Engineer</TableCell>
                    <TableCell>$6,500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2 Engineers</TableCell>
                    <TableCell>$13,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>5 Engineers</TableCell>
                    <TableCell>$32,500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>10 Engineers</TableCell>
                    <TableCell>$65,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="text-center mt-4 text-lg flex items-center justify-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Need More? We can provide a custom team tailored to your needs—just reach out for a custom quote.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">What's Included?</h2>
            <ul className="space-y-4 max-w-3xl mx-auto">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span>
                  <strong>AI-Trained Engineering Talent</strong> – Experts in AI-assisted development, automation, and
                  optimization.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span>
                  <strong>Full Integration with Your Team</strong> – Engineers work seamlessly alongside your existing
                  teams.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span>
                  <strong>Flexible Workflows</strong> – Agile, Scrum, or your preferred development framework.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span>
                  <strong>AI-Enhanced Speed & Quality</strong> – Faster coding, automated testing, and intelligent
                  debugging.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span>
                  <strong>Dedicated Account Support</strong> – Get personalized assistance to ensure success.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-8 max-w-3xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-2">Q: Are there any hidden fees?</h3>
                <p>
                  No. Our pricing is fully transparent—$6,500 per engineer per month. No long-term contracts, no
                  surprise costs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Q: How do I get started?</h3>
                <p>
                  Easy! Schedule a consultation, tell us about your needs, and we'll match you with AI-trained engineers
                  ready to work.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Q: Can I hire for short-term or long-term projects?</h3>
                <p>
                  Yes! Whether you need an engineer for a few months or a full-time team, we offer flexible engagement
                  models to fit your goals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Q: Can your engineers work with my existing team?</h3>
                <p>
                  Absolutely. Our engineers integrate seamlessly into your workflows, collaborating just like your
                  in-house developers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Q: Do I need to pay for AI tools separately?</h3>
                <p>
                  We include access to cutting-edge AI-powered development tools for a nominal AI fee, ensuring you get
                  the best efficiency without additional overhead.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
            <p className="text-xl mb-8">
              Hiring top-tier engineering talent has never been this easy, fast, or cost-effective.
              <br />
              Ready to build better, faster, and cheaper with AI?
            </p>
            <Button size="lg" asChild>
              <a href="/contact">Schedule a Free Consultation</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

