import { type OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { type Metadata } from 'next'

import { getBaseUrl } from '@/lib/utils'

interface Params {
  title?: string
  description?: string
  images?: OpenGraph['images']
  url?: string
}

export const seo = (params: Params): Metadata => {
  const title = params.title ? `${params.title} | Create Yuki App` : 'Create Yuki App'
  const description =
    params.description ?? 'A Next.js template with TypeScript, Tailwind CSS, ESLint and Prettier'
  const images = params.images ?? ['/api/og']
  const url = params.url ? `${getBaseUrl()}/${params.url}` : getBaseUrl()

  return {
    metadataBase: new URL(getBaseUrl()),
    title,
    description,
    creator: 'Tiesen',
    applicationName: 'Next Template',
    alternates: { canonical: url },
    authors: { name: 'Tiesen', url: 'https://tiesen.id.vn' },
    openGraph: { url, images, type: 'website', siteName: 'Yuki' },
    twitter: { card: 'summary_large_image', creatorId: '@tiesen243' },
    icons: { icon: '/favicon.ico', shortcut: '/favicon-16x16.png', apple: '/apple-touch-icon.png' },
  }
}
