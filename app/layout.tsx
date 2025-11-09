import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { ThemeProvider } from "@/components/common/theme-provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: "Cautious | Full Stack Developer & UI/UX Enthusiast",
    template: "%s | Cautious - Full Stack Developer",
  },
  description:
    "Full Stack Developer based in South Africa specializing in building accessible, pixel-perfect web and mobile applications. Expert in React, Next.js, TypeScript, and modern web technologies.",

  // Keywords for SEO
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "Mobile App Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Developer",
    "South Africa Developer",
    "Portfolio",
    "Cautious Developer",
  ],

  // Author information
  authors: [{ name: "Cautious", url: "https://cautiousndlovu.co.za" }],
  creator: "Cautious",
  publisher: "Cautious",

  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://cautiousndlovu.co.za",
    title: "Cautious | Full Stack Developer & UI/UX Enthusiast",
    description:
      "Full Stack Developer based in South Africa specializing in building accessible, pixel-perfect web and mobile applications.",
    siteName: "Cautious Portfolio",
    images: [
      {
        url: "https://cautiousndlovu.co.za/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cautious - Full Stack Developer Portfolio",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Cautious | Full Stack Developer & UI/UX Enthusiast",
    description:
      "Full Stack Developer based in South Africa specializing in building accessible, pixel-perfect web and mobile applications.",
    creator: "@yourtwitterhandle",
    images: ["https://cautiousndlovu.co.za/twitter-image.jpg"],
  },

  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },

  // Manifest for PWA
  manifest: "/site.webmanifest",

  // Verification for search engines
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },

  // Category
  category: "technology",

  // Additional metadata
  alternates: {
    canonical: "https://cautiousndlovu.co.za/",
  },

  // App links for mobile
  appleWebApp: {
    capable: true,
    title: "Cautious Portfolio",
    statusBarStyle: "black-translucent",
  },

  // Format detection
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster
            position="top-right"
            richColors
            closeButton
            duration={4000}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
