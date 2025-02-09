import { Header } from "@/components/header"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"
import { Newsletter } from "@/components/blog/newsletter"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { SearchBlog } from "@/components/blog/search-blog"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 py-8">
            <div>
              <BlogHero />
              <section className="py-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Latest Posts</h2>
                  <SearchBlog />
                </div>
                <BlogGrid />
              </section>
            </div>
            <aside className="space-y-8">
              <BlogSidebar />
              <Newsletter />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

