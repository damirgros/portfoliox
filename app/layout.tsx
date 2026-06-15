import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import LanguageProvider from "./components/LanguageProvider";
import SiteHeader from "./components/SiteHeader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Damir Groš | Portfolio",
  description:
    "Portfolio website for Damir Groš with smooth page transitions and modern UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
      >
        <body className="min-h-full bg-slate-950 text-slate-100 font-sans">
          <div className="relative isolate overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-cyan-500/20 via-transparent to-transparent blur-3xl" />
            <LanguageProvider>
              <SiteHeader />
              <main className="min-h-[calc(100vh-80px)]">{children}</main>
            </LanguageProvider>
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
