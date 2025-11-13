"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { SuccessModal } from "./SuccessModal";
import { ScrollAnimation } from "../common/ScrollAnimation";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    detail: "+27 603 121 981",
    link: "tel:+27603121981",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "admin@cautiousndlovu.co.za",
    link: "mailto:admin@cautiousndlovu.co.za",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "Johannesburg, South Africa",
    link: "#",
    gradient: "from-green-500 to-emerald-500",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Show loading toast
    const loadingToast = toast.loading("Sending your message...", {
      description: "Please wait while we process your request",
    });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      if (response.ok) {
        // Show success toast with rich content
        toast.success("Message sent successfully! 🎉", {
          description: `Hi ${formData.name}! Your message has been received. Check your email (${formData.email}) for a confirmation. I'll get back to you within 24-48 hours.`,
          duration: 6000,
        });

        setSubmitStatus({
          type: "success",
          message:
            "Message sent successfully! Check your email for confirmation.",
        });

        // Show success modal
        setShowSuccessModal(true);

        // Reset form after short delay to allow modal to appear
        setTimeout(() => {
          setFormData({ name: "", email: "", subject: "", message: "" });
        }, 500);
      } else {
        toast.error("Failed to send message", {
          description: data.error || "Please try again or contact me directly.",
          duration: 5000,
        });

        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch {
      toast.dismiss(loadingToast);

      toast.error("Something went wrong", {
        description:
          "Please check your internet connection and try again, or contact me directly via email or phone.",
        duration: 5000,
      });

      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 lg:px-8 overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-secondary/30 to-background" />

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />

      {/* Decorative blurred circles */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 dark:bg-primary/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 mb-6">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Get In Touch
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let&apos;s{" "}
              <span className="bg-linear-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                Work Together
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Let&apos;s create something amazing
              together. I&apos;m always open to discussing new opportunities.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info Cards */}
          <ScrollAnimation direction="right" delay={0.3}>
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-linear-to-b from-primary to-primary/50 rounded-full" />
                Contact Information
              </h3>

              {contactInfo.map((info) => (
                <a key={info.title} href={info.link} className="block group">
                  <Card className="p-4 border-border/50 dark:border-border/30 bg-card/50 dark:bg-card/30 backdrop-blur-sm hover:border-primary/50 dark:hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-primary/20 cursor-pointer relative overflow-hidden">
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <div className="relative flex items-start gap-4">
                      {/* Icon with gradient border */}
                      <div
                        className={`shrink-0 w-12 h-12 rounded-lg bg-linear-to-br ${info.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="w-full h-full rounded-lg bg-background dark:bg-card flex items-center justify-center">
                          <info.icon className="w-5 h-5 text-foreground" />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-muted-foreground mb-1">
                          {info.title}
                        </p>
                        <p className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                          {info.detail}
                        </p>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}

              {/* Quick Links */}
              <Card className="p-6 border-border/50 dark:border-border/30 bg-linear-to-br from-primary/5 to-transparent backdrop-blur-sm mt-8">
                <h4 className="text-sm font-semibold text-foreground mb-4">
                  Quick Response
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I typically respond within 24 hours. For urgent matters, feel
                  free to call directly.
                </p>
              </Card>
            </div>
          </ScrollAnimation>

          {/* Contact Form */}
          <ScrollAnimation direction="left" delay={0.5}>
            <div className="lg:col-span-2">
              <Card className="p-6 md:p-8 border-border/50 dark:border-border/30 bg-card/50 dark:bg-card/30 backdrop-blur-sm shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-background/50 dark:bg-background/30 border-border/50 focus:border-primary transition-colors"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="bg-background/50 dark:bg-background/30 border-border/50 focus:border-primary transition-colors"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-foreground"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Discussion"
                      className="bg-background/50 dark:bg-background/30 border-border/50 focus:border-primary transition-colors"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="bg-background/50 dark:bg-background/30 border-border/50 focus:border-primary transition-colors resize-none"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="flex flex-col gap-4 pt-2">
                    <div className="flex items-center gap-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="group gap-2 hover:gap-3 transition-all duration-300 bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 px-8 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span>
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </span>
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </Button>

                      <p className="text-sm text-muted-foreground">
                        All fields are required
                      </p>
                    </div>

                    {submitStatus.type && (
                      <div
                        className={`p-4 rounded-lg border ${
                          submitStatus.type === "success"
                            ? "bg-green-500/10 border-green-500/50 text-green-600 dark:text-green-400"
                            : "bg-red-500/10 border-red-500/50 text-red-600 dark:text-red-400"
                        }`}
                      >
                        {submitStatus.message}
                      </div>
                    )}
                  </div>
                </form>

                {/* Form decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent" />
              </Card>

              {/* Additional Info */}
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <Card className="p-4 border-border/50 dark:border-border/30 bg-card/30 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Fast Response
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Within 24 hours
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-border/50 dark:border-border/30 bg-card/30 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Remote Friendly
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Work worldwide
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        senderName={formData.name}
        senderEmail={formData.email}
      />
    </section>
  );
}
