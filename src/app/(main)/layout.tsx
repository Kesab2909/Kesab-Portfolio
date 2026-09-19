import type { Metadata } from "next";
import { Inter, Prata } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";
import MotionProvider from "@/components/ui/MotionProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const prata = Prata({ weight: "400", subsets: ["latin"], variable: "--font-prata" });

export const viewport: import('next').Viewport = {
  themeColor: "#F5F1E6",
};

export const metadata: Metadata = {
  title: {
    default: "Kesab Maharana — Full-Stack Developer",
    template: "%s | Kesab Maharana"
  },
  description: "Kesab Maharana — Computer Science student and full-stack developer building AI-native products, real-time applications, and thoughtful interfaces.",
  metadataBase: new URL("https://example.com"),
  keywords: ["Kesab Maharana", "full-stack developer", "Next.js", "React", "TypeScript", "AI engineer", "software engineer"],
  openGraph: {
    title: "Kesab Maharana — Full-Stack Developer",
    description: "Full-stack development, AI-native products, real-time applications, and systems engineering.",
    url: "https://example.com",
    siteName: "Kesab Maharana",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kesab Maharana — Full-Stack Developer",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kesab Maharana — Full-Stack Developer",
    description: "Full-stack development, AI-native products, real-time applications, and systems engineering.",
    images: ["/images/og-image.jpg"],
  },
  manifest: "/manifest.json",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kesab Maharana",
  "jobTitle": "Full-Stack Developer",
  "email": "kesab142909maharan@gmail.com",
  "description": "Computer Science student and full-stack developer building AI-native products, real-time applications, and thoughtful interfaces."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${prata.variable}`}>
      <body className="bg-brand-bg text-brand-text font-sans antialiased selection:bg-brand-primary selection:text-brand-bg flex flex-col min-h-screen">
        <MotionProvider>
          <Header />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <PageTransition>
            <main className="flex-grow">{children}</main>
          </PageTransition>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
