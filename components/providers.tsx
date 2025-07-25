'use client'

import { ClerkProvider, useAuth } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { ThemeProvider, useTheme } from 'next-themes'
import { ReactNode, useEffect } from 'react'

// Use a fallback URL for development (or remove Convex entirely if not needed)
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL || 'https://impressive-jaguar-226.convex.cloud'
const convex = new ConvexReactClient(convexUrl)

export function Providers({ children }: { children: ReactNode }) {
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    // Use 'theme' as the storage key to match the storageKey in layout.tsx
    const actualTheme = localStorage.getItem('theme')
    setTheme(actualTheme || 'system')
  }, [setTheme])

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || 'pk_test_dummy_key_for_development'}
      appearance={{
        baseTheme: resolvedTheme === 'dark' ? dark : undefined
      }}
      afterSignOutUrl="/"
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}