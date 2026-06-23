import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InstagramButton from "@/components/InstagramButton";
import LinkedInButton from "@/components/LinkedInButton";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Hansa Technologies | AI-Based Software Training Since 1994",
  description:
    "Google 5-Star rated AI-Based Software Training Institute. 30+ years, 5000+ students, 1000+ placements. Python, Data Science, AI, Java & more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <InstagramButton />
        <LinkedInButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
