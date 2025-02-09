import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const recentPosts = [
  {
    title: "Turing AI Icons 5: Advancing AI with Jeff Dean and Gemini 2.0",
    slug: "turing-ai-icons-5",
  },
  {
    title: "Turing's fireside chat at NeurIPS 2024—Insights from AI leaders",
    slug: "neurips-2024-insights",
  },
  {
    title: "How to choose the right model evaluation framework | Turing",
    slug: "model-evaluation-framework",
  },
]

export function BlogSidebar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block hover:text-primary transition-colors">
              <h3 className="font-medium">{post.title}</h3>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

