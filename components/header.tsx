"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sparkles, Rocket, GraduationCap, Users, Menu } from "lucide-react"

const services = [
  {
    title: "Launch",
    description: "From Concept to MVP in Weeks",
    href: "/services/launch",
    icon: Rocket,
    iconClass: "bg-purple-500",
  },
  {
    title: "Staff",
    description: "Engineers + AI On Demand",
    href: "/services/staff",
    icon: Users,
    iconClass: "bg-blue-500",
  },
  {
    title: "Train",
    description: "Future-Proof Your Development",
    href: "/services/train",
    icon: GraduationCap,
    iconClass: "bg-teal-500",
  },
  {
    title: "Transform",
    description: "Transform Your Engineering Capability",
    href: "/services/transform",
    icon: Sparkles,
    iconClass: "bg-purple-400",
  },
]

const talentResources = [
  {
    title: "How to get hired",
    description: "How Turing works and how we match you to job opportunities.",
    href: "/talent/how-to-get-hired",
  },
  {
    title: "Developer resources",
    description: "Tips, tricks, and more to enhance your tech skills and stand out with clients.",
    href: "/talent/developer-resources",
  },
  {
    title: "Talent support",
    description: "Get answers to common questions about job matching and more.",
    href: "/talent/support",
  },
]

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 mr-6">
            <Sparkles className="h-6 w-6" />
            <span className="font-bold text-xl">EngineerWith.AI</span>
          </Link>
          <nav className="hidden md:flex items-center">
            <div className="flex items-center space-x-6">
              <Link href="/why-this-matters" className="text-sm font-medium hover:text-primary transition-colors">
                Why?
              </Link>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="mx-0">
                    <NavigationMenuTrigger className="px-0">What We Do</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {services.map((service) => (
                          <li key={service.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={service.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="flex items-center gap-3">
                                  <div className={`p-2 rounded-lg ${service.iconClass}`}>
                                    <service.icon className="h-4 w-4 text-white" />
                                  </div>
                                  <div className="text-sm font-medium leading-none">{service.title}</div>
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                                  {service.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
                Blog
              </Link>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="mx-0">
                    <NavigationMenuTrigger className="px-0">For Talent</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[400px] p-4">
                        {talentResources.map((resource) => (
                          <li key={resource.title} className="mb-3 last:mb-0">
                            <NavigationMenuLink asChild>
                              <Link
                                href={resource.href}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium mb-1">{resource.title}</div>
                                <p className="text-sm leading-snug text-muted-foreground">{resource.description}</p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Link href="/about-us" className="text-sm font-medium hover:text-primary transition-colors">
                About Us
              </Link>
            </div>
          </nav>
        </div>

        <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/roi-calculator">Calculate ROI</Link>
          </Button>
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Button size="sm">Schedule Consultation</Button>
        </div>
      </div>
    </header>
  )
}

