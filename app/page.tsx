import type { NextPage } from 'next'

const Page: NextPage = () => (
  <main className="grid min-h-dvh place-items-center">
    <div className="space-y-4 container">
      <p className="text-4xl font-bold text-center">Next level of Type Safety with</p>
      <h1 className="text-6xl text-transparent bg-gradient-to-br from-success to-warning bg-clip-text font-bold text-center">
        Next.js + TypeScript
      </h1>

      <div className="bg-gradient-to-br grid place-items-center rounded-lg from-success to-warning w-full aspect-video shadow-lg">
        <div className="bg-secondary/40 h-4/5 rounded-lg shadow-lg w-4/5 aspect-video backdrop-blur-xl">
          <div className="flex bg-secondary w-full rounded-t-lg p-2 gap-1">
            <div className="bg-destructive size-4 text-xs text-center text-secondary rounded-full">
              x
            </div>
            <div className="bg-warning size-4 text-xs text-center text-secondary rounded-full">
              -
            </div>
          </div>

          <pre className="text-primary p-6">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  </main>
)

export default Page

const code = `import type { NextPage } from 'next'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

const Page: NextPage = () => {
  const [count, setCount] = useState(0)
  return (
    <main className="...">
      <div className="...">
        <Button onClick={() => setCount((prev) => prev + 1)}>Increment</Button>
        <p className="...">{count}</p>
        <Button onClick={() => setCount((prev) => prev - 1)}>Decrement</Button>
      </div>
    </main>
  )
}

export default Page
`
