import "./globals.css";

import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import ClickSpark from "@/components/ui/spark";
import { Particles } from "@/components/ui/Particles";
import Aura from "@/components/aura";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "openabir",
  description: "Made with ❤️ by Abir",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={workSans.className} suppressHydrationWarning>
      <body className="dark antialiased">
        <ClickSpark
          sparkColor="#22c55e"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <Aura />
          <main className="relative z-20 mx-auto max-w-2xl px-6">
            {children}
          </main>
        </ClickSpark>
        <Particles
          className="absolute inset-0 z-[-1]"
          quantity={100}
          ease={80}
          refresh
        />
      </body>
    </html>
  );
}
