"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TableOfContents() {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])

  useEffect(() => {
    const articleHeadings = Array.from(document.querySelectorAll("article h2, article h3")).map((heading) => {
      const id = heading.textContent?.toLowerCase().replace(/\s+/g, "-") ?? ""
      heading.id = id
      return {
        id,
        text: heading.textContent ?? "",
        level: Number(heading.tagName.charAt(1)),
      }
    })
    setHeadings(articleHeadings)
  }, [])

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Table of Contents</CardTitle>
      </CardHeader>
      <CardContent>
        <nav>
          <ul className="space-y-2">
            {headings.map((heading) => (
              <li key={heading.id} className={`${heading.level === 3 ? "ml-4" : ""}`}>
                <a
                  href={`#${heading.id}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </CardContent>
    </Card>
  )
}

