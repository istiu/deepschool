import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Deep School</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home</h1>
      <h2>The value of customKey is: {process.env.API_URL}</h2>
    </div>
  )
}
