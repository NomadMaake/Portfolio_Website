import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Crypto Dashboard (Streamlit)",
      description:
        "An interactive web dashboard built with Streamlit to track real-time Ethereum and Bitcoin prices using public APIs.",
      technologies: ["Python", "Streamlit", "API Integration", "Pandas"],
      link: "https://github.com/NomadMaake/crypto-dashboard",
    },
    {
      title: "Finance Tracker (Data Science)",
      description:
        "A personal finance tracker application leveraging data science modules like NumPy and Matplotlib for financial analysis and visualization.",
      technologies: ["Python", "NumPy", "Matplotlib", "Pandas", "Data Visualization"],
      link: "https://github.com/NomadMaake/Portfolio-",
    },
    {
      title: "COVID-19 Tracker (Data Science APIs)",
      description:
        "A data-driven application that tracks COVID-19 statistics globally, fetching data from various data science APIs and presenting it visually.",
      technologies: ["Python", "API Integration", "Data Analysis", "Plotly", "Dash"],
      link: "https://github.com/NomadMaake/CovidTracker",
    },
    {
      title: "Django E-commerce Store",
      description:
        "A full-featured e-commerce platform developed with Django, including product listings, shopping cart, user authentication, and order management. (In Progress)",
      technologies: ["Python", "Django", "PostgreSQL", "HTML/CSS", "JavaScript"],
      link: null,
    },
    {
      title: "Flet Desktop Application",
      description:
        "A cross-platform desktop application built using Flet, demonstrating modern UI/UX principles and efficient data handling. (In Progress)",
      technologies: ["Python", "Flet", "Desktop Development", "SQLite"],
      link: null,
    },
    {
      title: "Drone Marketplace Mobile App (Flet)",
      description:
        "A cross-platform mobile application built with Flet, allowing users to browse, view details, and purchase various drone models. (In Progress)",
      technologies: ["Python", "Flet", "Mobile Development", "E-commerce", "SQLite"],
      link: null,
    },
    {
      title: "Full-stack Spotify Clone",
      description:
        "A complete music streaming application featuring user authentication, playlist creation, and music playback, built with both front-end and back-end components. (In Progress)",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Authentication (JWT)", "Music Streaming API"],
      link: null,
    },
  ]

  return (
    <section id="projects" className="container py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              {project.link ? (
                <Button variant="outline" asChild>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </Link>
                </Button>
              ) : (
                <Button variant="outline" disabled>
                  <Github className="mr-2 h-4 w-4" /> In Progress
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
