import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function BlogHero() {
  return (
    <div className="relative aspect-[2/1] overflow-hidden rounded-xl">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-03%20at%205.29.14%E2%80%AFPM-9SM19zC5UpdKfuQ0axLHceBt8s0mvw.png"
        alt="Blog hero image"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
        <div className="max-w-2xl">
          <div className="flex gap-2 mb-4">
            <Badge variant="secondary" className="bg-white/10 hover:bg-white/20">
              News
            </Badge>
            <Badge variant="secondary" className="bg-white/10 hover:bg-white/20">
              AI
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Turing Surpasses $300M ARR in Profitable Year, Scaling the Future of AI
          </h1>
          <div className="flex items-center gap-4">
            <Button variant="secondary" size="sm" asChild>
              <Link href="/blog/turing-surpasses-300m-arr">Read more</Link>
            </Button>
            <div className="text-sm text-white/80">5 min read</div>
          </div>
        </div>
      </div>
    </div>
  )
}

