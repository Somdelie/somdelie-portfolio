import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured online store with payment integration, inventory management, and user authentication.",
    tags: ["Next.js", "Stripe", "MongoDB"],
    image: "/modern-ecommerce-interface.png",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Portfolio Website",
    description:
      "A minimalist portfolio showcasing creative work with smooth animations and responsive design.",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: "/minimal-portfolio-website.png",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates and team features.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    image: "/task-management-app.png",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Restaurant Booking",
    description:
      "Online reservation system with table management and customer notifications.",
    tags: ["React", "Node.js", "Express"],
    image: "/restaurant-booking-system.png",
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 lg:px-8 overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-secondary via-background to-secondary/50 dark:from-secondary/80 dark:via-background dark:to-secondary/30" />

      {/* Decorative blurred circles */}
      <div className="absolute top-40 -right-20 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -left-20 w-96 h-96 bg-primary/5 dark:bg-primary/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Featured Work
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Selected{" "}
            <span className="bg-linear-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A showcase of recent work and personal experiments that demonstrate
            my approach to solving problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              style={{ animationDelay: `${index * 100}ms` }}
              className="group relative overflow-hidden border-border/50 dark:border-border/30 bg-card/50 dark:bg-card/30 backdrop-blur-sm hover:border-primary/50 dark:hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-primary/20 animate-in fade-in slide-in-from-bottom-4"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-multiply dark:mix-blend-screen`}
                />

                {/* Image */}
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  width={640}
                  height={360}
                />

                {/* Overlay with icon */}
                <div className="absolute inset-0 bg-background/80 dark:bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                    <ArrowUpRight className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Corner number */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 dark:bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-sm font-bold text-foreground z-30">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <CardContent className="p-6 relative">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <div className="relative">
                  {/* Title with hover effect */}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground/90 dark:text-muted-foreground mb-4 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-medium bg-background/80 dark:bg-card/50 text-foreground rounded-lg border border-border/50 dark:border-border/30 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 group/btn hover:gap-3 transition-all duration-300 -ml-2 text-primary hover:text-primary hover:bg-primary/10"
                  >
                    <span className="font-medium">View project</span>
                    <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Bottom gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-card/50 dark:bg-card/30 backdrop-blur-sm border border-border/50 dark:border-border/30">
            <p className="text-lg text-muted-foreground">
              Want to see more of my work?
            </p>
            <Button className="gap-2 group hover:gap-3 transition-all duration-300 bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30">
              <span>View all projects</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
