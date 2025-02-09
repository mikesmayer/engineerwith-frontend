import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Users, GraduationCap, Sparkles } from "lucide-react"

const services = [
  {
    title: "Launch",
    description: "Accelerate your MVP development with AI-powered engineering",
    icon: Rocket,
    color: "from-purple-500 to-blue-500",
  },
  {
    title: "Staff",
    description: "Access top AI-trained engineers at competitive rates",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Train",
    description: "Upskill your team with cutting-edge AI development practices",
    icon: GraduationCap,
    color: "from-cyan-500 to-emerald-500",
  },
  {
    title: "Transform",
    description: "Complete AI integration for your development workflow",
    icon: Sparkles,
    color: "from-emerald-500 to-purple-500",
  },
]

export function ServicesList() {
  return (
    <section className="pt-32">
      {" "}
      {/* Increased overall section padding */}
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          {" "}
          {/* Added container for better text alignment */}
          <h2 className="text-4xl font-bold">How We Help You Scale</h2>
          <p className="text-xl text-muted-foreground">Leading enterprises, startups, and more trust us to help them</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="relative overflow-hidden group">
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

