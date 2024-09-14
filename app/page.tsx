import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <div className="font-sans">
      <pre className="font-sans">
        {`import type { NextPage } from 'next'`}
        <br />
        {`const Page: NextPage = () => {  return <div>Page</div> }`}
      </pre>
    </div>
  )
}

export default Page
