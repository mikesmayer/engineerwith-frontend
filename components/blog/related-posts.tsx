import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const relatedPosts = [
  {
    title: "Procure the Right People: Trusting AI Vetting for Software Engineers",
    image: "/placeholder.svg?height=200&width=300",
    slug: "ai-vetting-software-engineers",
  },
  {
    title: "Building Responsible AI – The Human Way",
    image: "/placeholder.svg?height=200&width=300",
    slug: "building-responsible-ai",
  },
  {
    title: "5 Key Considerations for Building an AI Implementation Strategy",
    image: "/placeholder.svg?height=200&width=300",
    slug: "ai-implementation-strategy",
  },
]

export function RelatedPosts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>You might also like</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {relatedPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <div className="relative aspect-[3/2] mb-2 rounded-lg overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium group-hover:text-primary transition-colors">{post.title}</h3>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

