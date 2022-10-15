import type { NextPage } from 'next'
import Navbar from "../components/navbar/navbar";
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Navbar/>
    </div>
  )
}

export default Home
