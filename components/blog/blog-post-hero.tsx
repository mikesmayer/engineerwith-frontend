import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock } from "lucide-react"

interface BlogPostHeroProps {
  post: {
    title: string
    date: string
    readTime: string
    tags: string[]
    author: {
      name: string
      image: string
    }
  }
}

export function BlogPostHero({ post }: BlogPostHeroProps) {
  return (
    <div className="relative bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-03%20at%205.39.38%E2%80%AFPM-TnzTa1FoKp4Vxoe3iz6uqQ9UHvRH9j.png"
          alt="Abstract wave pattern"
          fill
          className="object-cover opacity-50"
        />
      </div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <div className="flex gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-white/10 hover:bg-white/20">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Image
                src={post.author.image || "/placeholder.svg"}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-sm">{post.author.name}</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

