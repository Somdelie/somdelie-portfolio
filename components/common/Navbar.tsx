"use client";
import Image from "next/image";

import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ModeToggle } from "./mode-toogle";
import { Menu } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="text-2xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                <Image
                  src="/somdelie-logo.png"
                  alt="Logo"
                  width={150}
                  height={40}
                />
              </div>

              <div className="hidden md:flex items-center gap-8">
                <ul className="flex items-center gap-8">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => handleScroll(e, link.href)}
                        className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
                      >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <ModeToggle />
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center justify-between h-16">
          <div className="text-xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            <Image
              src="/somdelie-logo.png"
              alt="Logo"
              width={150}
              height={40}
            />
          </div>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-accent">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="text-left">
                  <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
                  <SheetDescription>
                    Navigate to different sections of the portfolio
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-1 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className="text-lg font-medium px-4 py-3 rounded-lg hover:bg-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
