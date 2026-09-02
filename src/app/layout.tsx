import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { content } from "@/data/content";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto-mono",
});

const editorial = localFont({
  src: "../../fonts/EditorialToday-Regular.ttf",
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: content.site.clinicName,
  description: content.site.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoMono.variable} ${editorial.variable}`}
    >
      <body className={`${roboto.className} min-h-dvh bg-paper font-sans text-ink antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFab />
      </body>
    </html>
  );
}
