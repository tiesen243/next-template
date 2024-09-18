import type { NextPage } from 'next'
import Image from 'next/image'
import { Github } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

const Page: NextPage = () => (
  <main className="grid min-h-dvh place-items-center">
    <div className="container flex max-w-screen-lg flex-col items-center">
      <Image src="https://tiesen.id.vn/images/tiesen.png" width={2500} height={400} alt="tiesen" />

      <Typography level="h1" className="text-center brightness-150">
        A Next.js template with{' '}
        <span className="bg-[linear-gradient(135deg,#3178C6,69%,hsl(var(--background)))] bg-clip-text text-transparent">
          TypeScript
        </span>
        ,{' '}
        <span className="bg-[linear-gradient(135deg,#06B6D4,69%,hsl(var(--background)))] bg-clip-text text-transparent">
          Tailwind CSS
        </span>
        ,{' '}
        <span className="bg-[linear-gradient(135deg,#4B32C3,69%,hsl(var(--background)))] bg-clip-text text-transparent">
          ESLint
        </span>{' '}
        and{' '}
        <span className="bg-[linear-gradient(135deg,#F7B93E,69%,hsl(var(--background)))] bg-clip-text text-transparent">
          Prettier
        </span>
      </Typography>

      <Button variant="outline" className="my-4 gap-2" asChild>
        <a
          href="https://github.com/tiesen243/create-yuki-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github /> Github
        </a>
      </Button>
    </div>
  </main>
)

export default Page
