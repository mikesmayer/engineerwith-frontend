import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPostHero } from "@/components/blog/blog-post-hero"
import { TableOfContents } from "@/components/blog/table-of-contents"
import { ShareButtons } from "@/components/blog/share-buttons"
import { Newsletter } from "@/components/blog/newsletter"
import { RelatedPosts } from "@/components/blog/related-posts"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link"

// This would typically come from a CMS or API
const post = {
  title: "Turing Surpasses $300M ARR in a Profitable Year, Scaling for the Future of AI",
  date: "Feb 3, 2024",
  readTime: "5 min read",
  content: `
    Over the past year, AI has shifted from experimentation to full-scale enterprise deployment. Companies are no longer questioning its value. They're working to implement it effectively, integrate it with existing systems, and expand it across multiple business activities.

    With a new signing of ARR and continued profitability, Turing strengthened its role as a key infrastructure partner for companies deploying AI at scale. Our work with leading enterprises demonstrates how AI can enhance development processes across the business field, systems, and deploy AI systems that bridge today's capabilities with the future of AI.

    ## Advancing AI from Research to Enterprise Impact

    As AI adoption accelerates, enterprises face increasing complexity in making models operational, launching core performance, and integration with existing workflows. Our platform helps enterprises navigate these challenges, providing the foundation for large-scale training optimizations, and expand multimodal intelligence capabilities.

    By focusing on efficient model deployment to deliver decisive systems, and multimodal learning, Turing helps enterprises:

    - Optimize model efficiency to reduce compute costs while maintaining accuracy
    - Develop AI systems capable of reasoning across text, vision, and structured data
    - Streamline infrastructure to support high performance at all scale

    With more than 1 million developers and growing community adoption, enterprises and organizations need solutions that enable AI more scalable, cost-effective, and compliant. Turing continues to define these capabilities, enabling businesses to drive measurable impact.

    ## 2024 Milestones: Growth, Scale, and Market Expansion

    Over the past year, Turing has:

    - In growth mode, with top increased demand for AI infrastructure and intelligence
    - Expanded partnerships, demonstrating the scalability of our model
    - Strategic collaborations with AI research labs and enterprises, further integrating Turing's capabilities into real-world AI systems

    We've gone from $150 to $300 million in ARR in a single year and we're profitable, said Jonathan Siddharth, Turing Co-Founder and CEO. "2024 is the year of agents, delivered through infrastructure that's scalable, cost-effective, and enterprise ready."

    This growth reinforces the increasing need for enterprise-grade AI infrastructure technology enabling companies to deploy AI confidently, efficiently, and flexibly across their operations.

    ## Looking Ahead: AI That Scales With Enterprise Needs

    Turing continues to build enterprise infrastructure, helping the next evolution of AI that work and continue to enable enterprises to:

    - Integrate multimodal reasoning and multifidelity into production AI systems
    - Improve training and inference efficiency to manage AI's rising data demands
    - Develop AI architectures that bridge today's models with future AI capabilities

    "Powerful AI models need a massive amount of data to keep the scaling laws going, and they're clearly particularly key for AI chat scaling and model-gen foundation for enterprises," said Jonathan Siddharth. "We're building the most comprehensive intelligence platform of intelligent developers, data scientists, and 1700 professionals."

    As technology advances, enterprises need more than just models - they need scalable frameworks to operationalize them. And in that rapidly evolving world, Turing remains committed to ensuring its AI not only cutting-edge but also compatible, efficient, and built for large-scale impact.
  `,
  tags: ["AI", "News", "Turing stats"],
  author: {
    name: "Turing Staff",
    image: "/placeholder.svg?height=50&width=50",
  },
}

export default function BlogPostPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span className="text-muted-foreground">{post.title}</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <BlogPostHero post={post} />

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8">
            <article className="prose prose-neutral dark:prose-invert max-w-none">
              <Newsletter />
              <TableOfContents />
              <div className="mt-8" dangerouslySetInnerHTML={{ __html: post.content }} />
              <ShareButtons />
              <Newsletter />
            </article>
            <aside className="space-y-8">
              <RelatedPosts />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

