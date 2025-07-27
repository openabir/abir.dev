import { Providers } from '@/components/providers'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Ubuntu } from 'next/font/google';
import "./globals.css";
import { Navbar } from '@/components/Navbar';
import { Doock } from '@/components/Doock';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-ubuntu',
  display: 'swap',
});


export const metadata: Metadata = {
  title: "openabir",
  description: "Made with ❤️ by Abir",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={ubuntu.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          storageKey="theme" // Optional. The default is "theme"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <Navbar />
            {children}
            <div className="flex justify-center fixed bottom-10 left-0 right-0">
              <Doock />
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
