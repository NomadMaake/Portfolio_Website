import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TypingEffect } from "./typing-effect" // Import the new component

export function HeroSection() {
  return (
    <section className="relative flex h-[calc(100vh-3.5rem)] items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted">
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        {/* Background pattern inspired by seacat.rossinavi.it's subtle textures */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <div className="relative mb-8 h-48 w-48 overflow-hidden rounded-full border-4 border-primary shadow-lg">
          <Image
            src="/profile.jpg"
            alt="Mabusha Maake Profile" // Updated alt text
            layout="fill"
            objectFit="cover"
            className="grayscale dark:grayscale-0"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Hi, I&apos;m{" "}
          <span className="text-primary">
            <TypingEffect text="Mabusha Maake" />
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-muted-foreground">
          A passionate Computer Science student with a strong focus on{" "}
          <span className="font-semibold text-foreground">Python, Web Development, Machine Learning,</span> and{" "}
          <span className="font-semibold text-foreground">Desktop Applications.</span>I love building innovative
          solutions from front-end interfaces to robust back-end systems.
        </p>
        <div className="flex space-x-4">
          <Button asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
