import "./globals.css";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import ClickSpark from "@/components/ui/spark";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
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
    <html lang="en" className={montserrat.className} suppressHydrationWarning>
      <body className="dark relative antialiased">
        <ClickSpark
          sparkColor="#22c55e"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <main className="relative z-20 mx-auto max-w-xl px-6">
            {children}
          </main>
        </ClickSpark>
      </body>
    </html>
  );
}
