import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const posts = [
  {
    title: "OpenAI's Latest Model: A Fresh Perspective on Coding",
    excerpt: "Exploring the capabilities and implications of OpenAI's newest coding model.",
    image: "/placeholder.svg?height=400&width=600",
    category: "AI",
    readTime: "4 min read",
    slug: "openai-latest-model",
  },
  {
    title: "Turing's fireside chat at NeurIPS 2024",
    excerpt: "Key insights from AI leaders and their vision for the future.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Events",
    readTime: "6 min read",
    slug: "turing-neurips-2024",
  },
  {
    title: "NVIDIA and Turing Partner to Accelerate AI Progress",
    excerpt: "A groundbreaking partnership to advance AI capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Partnership",
    readTime: "3 min read",
    slug: "nvidia-turing-partnership",
  },
  // Add more posts as needed
]

export function BlogGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <article key={post.slug} className="group">
          <Link href={`/blog/${post.slug}`}>
            <div className="relative aspect-[16/9] mb-4 rounded-lg overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <Badge className="mb-2">{post.category}</Badge>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
            <p className="text-muted-foreground mb-2">{post.excerpt}</p>
            <div className="text-sm text-muted-foreground">{post.readTime}</div>
          </Link>
        </article>
      ))}
    </div>
  )
}

