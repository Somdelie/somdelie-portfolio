import { Instagram, Facebook, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/somdeliegraphics/",
      icon: Instagram,
    },
    {
      name: "Facebook",
      href: "https://facebook.com/somdelie.ndlovu/",
      icon: Facebook,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@cautiesomdelie",
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
    { name: "Email", href: "mailto:admin@cautiousndlovu.co.za", icon: Mail },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-background">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2">
              Cautious Ndlovu
            </h3>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer crafting beautiful and functional web
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-muted/50 hover:bg-primary/10 border border-border/50 hover:border-primary/50 flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {currentYear} Cautious Ndlovu. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-primary fill-primary" />{" "}
            using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
