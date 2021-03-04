import { getSession, signIn, signOut } from 'next-auth/client'
import Head from 'next/head'
import Link from 'next/link'

const Home = ({ session }) => {
  const signInButtonNode = () => {
    if (session) {
      return false
    }

    return (
      <div>
        <Link href="/api/auth/signin">
          <button
            onClick={(e) => {
              e.preventDefault()
              signIn('google')
            }}
          >
            Entrar
          </button>
        </Link>
      </div>
    )
  }

  const signOutButtonNode = () => {
    if (!session) {
      return false
    }

    return (
      <div>
        <Link href="/api/auth/signout">
          <button
            onClick={(e) => {
              e.preventDefault()
              signOut()
            }}
          >
            Sair
          </button>
        </Link>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="hero">
        <div className="navbar">
          {signOutButtonNode()}
          {signInButtonNode()}
        </div>
        <div className="text">You arent authorized to view this page</div>
      </div>
    )
  }

  return (
    <div className="hero">
      <Head>
        <title>Home Page</title>
      </Head>
      <div className="navbar">
        {signOutButtonNode()}
        {signInButtonNode()}
      </div>
      <div className="text">Hello world</div>
    </div>
  )
}

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req })
  return {
    props: {
      session
    }
  }
}

export default Home
