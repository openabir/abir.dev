import "./globals.css";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";


// Components
import { ThemeProvider } from "@/components/theme-provider";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/Navbar";
import { Doock } from "@/components/Doock";

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

// Page metadata
export const metadata: Metadata = {
  title: "openabir",
  description: "Made with ❤️ by Abir",
};

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="theme"
          disableTransitionOnChange
        >
          <Providers>
            <Navbar />
            {children}
            <div className="fixed bottom-10 left-0 right-0 flex justify-center"><Doock /></div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
