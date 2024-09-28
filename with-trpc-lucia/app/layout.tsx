import '@/app/globals.css'

import { GeistSans } from 'geist/font/sans'
import { ThemeProvider } from 'next-themes'

import { seo } from '@/lib/seo'
import { TRPCReactProvider } from '@/lib/trpc/react'
import { cn } from '@/lib/utils'

export const metadata = seo({})

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={cn('min-h-dvh font-sans', GeistSans.variable)}>
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </ThemeProvider>
    </body>
  </html>
)

export default RootLayout
