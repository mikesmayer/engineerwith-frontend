import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, GraduationCap, Code, Lightbulb, Users, BarChart } from "lucide-react"

export default function TrainPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 md:pr-8">
          <h1 className="text-5xl font-bold mb-4">Train</h1>
          <h2 className="text-3xl font-semibold mb-6">Empower Your Team with AI Expertise</h2>
          <p className="text-xl mb-8">
            Future-proof your development team with cutting-edge AI training programs tailored to your needs.
          </p>
          <Button size="lg" className="mb-4">
            Explore Training Programs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="AI Training Illustration"
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
              icon: GraduationCap,
              title: "Customized Learning",
              description: "Tailored curriculum for your team's needs",
            },
            {
              icon: Code,
              title: "Hands-on Experience",
              description: "Practical training with real-world AI applications",
            },
            { icon: Lightbulb, title: "Innovation Culture", description: "Foster a culture of AI-driven innovation" },
            { icon: Users, title: "Team Upskilling", description: "Elevate your entire team's AI capabilities" },
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
        <h3 className="text-2xl font-semibold mb-6">Our Training Process</h3>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
          {[
            { title: "Team Assessment", description: "Evaluate current skill levels and objectives" },
            { title: "Curriculum Design", description: "Develop a training program tailored to your team" },
            {
              title: "Workshops & Hands-On Training",
              description: "Deliver engaging sessions with practical exercises",
            },
            {
              title: "Post-Training Support",
              description: "Offer continued guidance and resources to solidify learning",
            },
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
        <h3 className="text-2xl font-semibold mb-6">Success Story</h3>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <p className="text-lg mb-4">
              A healthcare technology company used our training services to equip its team with skills in natural
              language processing (NLP). Post-training, the team successfully implemented an AI chatbot that improved
              patient engagement by 30%.
            </p>
            <Button variant="outline">Read Full Case Study</Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Healthcare AI Success Story"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Training Programs</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "AI Fundamentals",
              description: "Introduction to AI concepts and applications",
              duration: "4 weeks",
            },
            {
              title: "Machine Learning Mastery",
              description: "Deep dive into ML algorithms and implementation",
              duration: "8 weeks",
            },
            {
              title: "AI for Software Engineers",
              description: "Integrating AI into existing software projects",
              duration: "6 weeks",
            },
          ].map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-2">{program.title}</h4>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Duration: {program.duration}</span>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Training Outcomes</h3>
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8">
                <h4 className="text-xl font-semibold mb-4">Measurable Results</h4>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>30% average increase in team productivity</li>
                  <li>50% reduction in AI-related project timelines</li>
                  <li>25% improvement in code quality and efficiency</li>
                  <li>40% increase in successful AI project implementations</li>
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
        <h3 className="text-2xl font-semibold mb-6">Related Blog Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "The Importance of AI Training in Modern Software Development", date: "August 15, 2023" },
            { title: "5 Key AI Skills Every Developer Should Master", date: "August 28, 2023" },
            { title: "How AI Training Transformed Our Development Team", date: "September 10, 2023" },
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
        <h3 className="text-2xl font-semibold mb-4">Ready to empower your team with AI expertise?</h3>
        <Button asChild size="lg">
          <Link href="/contact">Contact us today!</Link>
        </Button>
      </div>
    </div>
  )
}

