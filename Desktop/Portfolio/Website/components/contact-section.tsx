import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="container py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-muted-foreground">
        I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button asChild>
          <Link href="mailto:your.email@example.com">
            <Mail className="mr-2 h-4 w-4" /> Email Me
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="https://www.linkedin.com/in/mabusha-maake-9956802ba" target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="https://github.com/NomadMaake" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Link>
        </Button>
      </div>
    </section>
  )
}
