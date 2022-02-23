import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Techo</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
        </style>
        <meta name='description' content="Technovert's Bi-weekly Magazine" />
      </Head>
      <Hero />
      <Footer />
    </div>
  )
}

export default Home
