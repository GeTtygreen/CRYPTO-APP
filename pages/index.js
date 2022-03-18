import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis'
import Header from '../components/Header'
import Messages from '../components/Messages'

function Home() {
  const { isAuthenticated } = useMoralis()
  if (!isAuthenticated) return <Login />

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black via-green-800 to-green-600">
      <Head>
        <title>GETTYVERSE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto max-w-screen-2xl ">
      
        <Header />

        <Messages/>
      </div>
    </div>
  )
}

export default Home
