'use client'

import { useState } from 'react'
import { SendHorizonalIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { api } from '@/lib/trpc/react'

const Post: React.FC = () => {
  const utils = api.useUtils()
  const [name, setName] = useState<string>('')
  const [latestPost] = api.post.getLatest.useSuspenseQuery()
  const createPost = api.post.create.useMutation({
    onError: (err) => console.log(err.message),
  })

  return (
    <div className="space-y-2">
      <Typography className="text-center">
        {latestPost ? `Latest post: ${latestPost.name}` : 'You have no post'}
      </Typography>

      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault()
          console.log(name)
          createPost.mutate({ name })
        }}
      >
        <Input
          name="name"
          placeholder="Write your post"
          disabled={createPost.isPending}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          size="icon"
          variant="outline"
          className="aspect-square"
          disabled={createPost.isPending}
        >
          <SendHorizonalIcon />
        </Button>
      </form>
    </div>
  )
}

export default Post
