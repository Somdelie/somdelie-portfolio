import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Palette,
  Smartphone,
  ShoppingCart,
  Search,
  Server,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building responsive and high-performance websites using modern web technologies like React, Next.js, and Tailwind CSS.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing user interfaces with a focus on user experience and accessibility.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Designing and developing cross-platform mobile applications using React Native.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Developing scalable and efficient backend systems with Node.js, Express, and database management.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "Building robust e-commerce platforms with seamless payment integrations and user-friendly interfaces.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improving website visibility and search engine rankings through effective SEO strategies.",
    gradient: "from-indigo-500 to-blue-500",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-20 px-6 lg:px-8 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-secondary/30 to-background" />

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              What I Offer
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            My{" "}
            <span className="bg-linear-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions to bring your digital vision to life with
            cutting-edge technology
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="h-px w-16 bg-linear-to-r from-transparent via-border to-transparent" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <div className="h-px w-16 bg-linear-to-r from-transparent via-border to-transparent" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              style={{ animationDelay: `${index * 100}ms` }}
              className="group relative border-border/50 dark:border-border/30 bg-card/50 dark:bg-card/30 backdrop-blur-sm hover:border-primary/50 dark:hover:border-primary/60 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/20 cursor-pointer overflow-hidden animate-in fade-in slide-in-from-bottom-4"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Shine effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <CardHeader className="relative z-10">
                {/* Icon container with gradient */}
                <div
                  className={`relative h-14 w-14 rounded-xl bg-linear-to-br ${service.gradient} p-0.5 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  <div className="h-full w-full rounded-xl bg-background dark:bg-card flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-foreground group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                <CardTitle className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>

                {/* Arrow indicator on hover */}
                <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </CardContent>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Don&apos;t see what you&apos;re looking for?
          </p>
          <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300">
            Let&apos;s discuss your project
          </button>
        </div>
      </div>
    </section>
  );
}
