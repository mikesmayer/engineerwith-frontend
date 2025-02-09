import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full">
      {/* CTA Section */}
      <div className="w-full bg-gradient-to-br from-indigo-900 to-indigo-800 dark:from-indigo-950 dark:to-indigo-900">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Software Development?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Let's discuss how AI can revolutionize your engineering process.
          </p>
          <Button
            size="lg"
            className="bg-white text-indigo-900 hover:bg-indigo-50 dark:bg-indigo-950 dark:text-white dark:hover:bg-indigo-900"
          >
            Get Started Today
          </Button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full bg-white dark:bg-neutral-950 border-t dark:border-neutral-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Sparkles className="h-6 w-6" />
                <span className="font-bold text-xl">EngineerWith.AI</span>
              </Link>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xs">
                Better, Faster, Cheaper—Have It All with AI-Driven Engineering
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                {["Launch", "Staff", "Train", "Transform"].map((service) => (
                  <li key={service}>
                    <Link
                      href={`/services/${service.toLowerCase()}`}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                {["Blog", "Case Studies", "FAQ"].map((resource) => (
                  <li key={resource}>
                    <Link
                      href={`/${resource.toLowerCase().replace(" ", "-")}`}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      {resource}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Talent */}
            <div>
              <h3 className="font-semibold text-lg mb-4">For Talent</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/for-talent/how-to-get-hired"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    Get Hired
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-talent/developer-resources"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    Tech Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-talent/support"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:info@engineerwith.ai"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    info@engineerwith.ai
                  </a>
                </li>
                <li>
                  <a
                    href="tel:1-800-AI-ENGNR"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    1-800-AI-ENGNR
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t dark:border-neutral-800 mt-12 pt-8 text-center text-sm text-neutral-600 dark:text-neutral-400">
            <p>© {new Date().getFullYear()} EngineerWith.AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

