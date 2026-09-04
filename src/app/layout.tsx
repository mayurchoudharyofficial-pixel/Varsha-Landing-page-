import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/site-footer";
import { content } from "@/data/content";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

const theBold = localFont({
  src: "../../fonts/THEBOLDFONT-FREEVERSION.otf",
  variable: "--font-the-bold",
  display: "swap",
});

export const metadata: Metadata = {
  title: content.site.clinicName,
  description: content.site.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${nunito.variable} ${theBold.variable}`}>
      <body className={`${nunito.className} min-h-dvh bg-paper font-sans text-ink antialiased`}>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
