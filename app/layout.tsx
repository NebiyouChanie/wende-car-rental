import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"
import { I18nProvider } from "@/lib/i18n"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Wende Luxury Car Rental | Wedding & Executive Cars in Addis Ababa",
    template: "%s | Wende Luxury Car Rental",
  },
  description:
    "Premium wedding cars, executive sedans, and luxury SUVs in Addis Ababa. Professional chauffeurs, elegant car decorations, and reliable service for weddings, business, and events.",
  openGraph: {
    title: "Wende Luxury Car Rental | Wedding & Executive Cars in Addis Ababa",
    description:
      "Premium wedding cars, executive sedans, and luxury SUVs in Addis Ababa. Professional chauffeurs, elegant car decorations, and reliable service for weddings, business, and events.",
    url: "https://wende.example.com/",
    
    siteName: "Wende Luxury Car Rental",
    images: [
      {
        url: "/hero1.png",
        width: 1200,
        height: 630,
        alt: "Wende Luxury Car Rental - Wedding & Executive Cars",
      },
      {
        url: "/hero1.png",
        width: 1200,
        height: 630,
        alt: "Luxury Wedding Car",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-background`}
      >
        <I18nProvider>
          <Header />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
