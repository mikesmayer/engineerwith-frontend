"use client"

import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Facebook, Link2 } from "lucide-react"
import { toast } from "sonner"

export function ShareButtons() {
  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = document.title

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    }

    if (platform === "copy") {
      navigator.clipboard.writeText(url)
      toast.success("Link copied to clipboard!")
      return
    }

    window.open(shareUrls[platform as keyof typeof shareUrls], "_blank")
  }

  return (
    <div className="flex items-center gap-4 my-8">
      <span className="text-sm font-medium">Share:</span>
      <div className="flex gap-2">
        <Button variant="outline" size="icon" onClick={() => handleShare("twitter")} aria-label="Share on Twitter">
          <Twitter className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => handleShare("linkedin")} aria-label="Share on LinkedIn">
          <Linkedin className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => handleShare("facebook")} aria-label="Share on Facebook">
          <Facebook className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => handleShare("copy")} aria-label="Copy link">
          <Link2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

