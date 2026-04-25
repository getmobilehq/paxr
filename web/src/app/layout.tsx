import type { Metadata } from "next";
import { DM_Sans, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = process.env.URL ?? "https://getpaxr.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Paxr — Your AI Warranty Agent | Peace, handled.",
    template: "%s | Paxr",
  },
  description:
    "Paxr manages every warranty in your home. Scan a QR code to register in under 20 seconds. Get WhatsApp reminders before warranties expire. Renew automatically. Start free.",
  applicationName: "Paxr",
  openGraph: {
    type: "website",
    url: "https://getpaxr.com",
    siteName: "Paxr",
    title: "Paxr — Peace, handled.",
    description:
      "Your AI warranty agent for every product you own. Free to start.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paxr — Peace, handled.",
    description:
      "Your AI warranty agent for every product you own. Free to start.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paxr-stone text-paxr-deep">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
