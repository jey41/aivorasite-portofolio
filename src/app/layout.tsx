import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Muhammad Hisyam Nugroho — Digital Strategist & Operations Specialist",
    template: "%s | MHN Portfolio",
  },
  description:
    "Ahli strategi digital berdampak tinggi yang menjembatani teknologi dan dampak bisnis. Mengkhususkan diri dalam manajemen operasi, transformasi digital, dan kepemimpinan lintas fungsional.",
  metadataBase: new URL("https://mhn-portfolio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "MHN Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="light">
      <body className="bg-background text-on-surface font-body-md antialiased overflow-x-hidden selection:bg-primary-container selection:text-on-surface">
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
