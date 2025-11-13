import { ScrollAnimation } from "../common/ScrollAnimation";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 lg:px-8 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-secondary via-background to-secondary/50 dark:from-secondary/80 dark:via-background dark:to-secondary/30" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 dark:bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Title with decorative elements */}
          <ScrollAnimation direction="right" delay={0.2}>
            <div className="relative">
              <div className="sticky top-24">
                {/* Decorative line */}
                <div className="w-16 h-1 bg-linear-to-r from-primary to-primary/50 mb-6 rounded-full" />

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="bg-linear-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    About me
                  </span>
                </h2>

                <p className="text-lg text-primary font-medium">
                  Full Stack Developer & Designer
                </p>

                {/* Decorative pattern */}
                <div className="mt-8 space-y-2 opacity-20 dark:opacity-10">
                  <div className="h-px w-32 bg-linear-to-r from-primary to-transparent" />
                  <div className="h-px w-24 bg-linear-to-r from-primary to-transparent" />
                  <div className="h-px w-16 bg-linear-to-r from-primary to-transparent" />
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right Column - Content */}
          <ScrollAnimation direction="left" delay={0.4}>
            <div className="space-y-8">
              {/* Description with enhanced styling */}
              <div className="space-y-6 relative">
                {/* Quote decoration */}
                <div className="absolute -left-4 top-0 text-6xl text-primary/20 dark:text-primary/10 font-serif leading-none">
                  &ldquo;
                </div>

                <div className="relative">
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed pl-6">
                    I&apos;m a{" "}
                    <span className="text-foreground font-semibold">
                      Full Stack Web Developer
                    </span>{" "}
                    with specialization in both backend and frontend
                    development. With{" "}
                    <span className="text-primary font-semibold">
                      9+ years of experience
                    </span>{" "}
                    in web development, I bring ideas to life through code.
                  </p>
                </div>

                <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed">
                  My expertise spans across{" "}
                  <span className="text-foreground font-medium">Node.js</span>{" "}
                  and{" "}
                  <span className="text-foreground font-medium">WordPress</span>{" "}
                  on the backend, while excelling in{" "}
                  <span className="text-foreground font-medium">React</span>,{" "}
                  <span className="text-foreground font-medium">Next.js</span>,
                  and modern JavaScript frameworks on the frontend. I thrive at
                  the intersection of design and development, crafting
                  experiences that are both visually stunning and meticulously
                  optimized for performance.
                </p>
              </div>

              {/* Skills Section with enhanced cards */}
              <div className="pt-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-linear-to-r from-primary to-transparent" />
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    Technical Expertise
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    "React",
                    "Next.js",
                    "Node.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "WordPress",
                    "Express",
                    "MongoDB",
                  ].map((skill, index) => (
                    <span
                      key={skill}
                      style={{ animationDelay: `${index * 50}ms` }}
                      className="group px-4 py-2 text-sm font-medium bg-background/80 dark:bg-card/50 backdrop-blur-sm text-foreground rounded-lg border border-border/50 dark:border-border/30 hover:border-primary/50 dark:hover:border-primary/60 hover:shadow-md hover:shadow-primary/10 dark:hover:shadow-primary/20 transition-all duration-300 cursor-default hover:-translate-y-0.5 relative overflow-hidden animate-in fade-in slide-in-from-bottom-2"
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <span className="relative">{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Optional: Experience highlight */}
              {/* <div className="flex items-center gap-6 pt-4">
              <div className="shrink-0 w-px h-12 bg-linear-to-b from-transparent via-border to-transparent" />
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">9+</div>
                <div className="text-sm text-muted-foreground">
                  Years of Experience
                </div>
              </div>
              <div className="shrink-0 w-px h-12 bg-linear-to-b from-transparent via-border to-transparent" />
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
            </div> */}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
