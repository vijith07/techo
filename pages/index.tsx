import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Middle from '../components/Middle'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Techo</title>
        <style>
          <style>
            @import
            url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&amp;display=swap");
          </style>
        </style>
        <meta name='description' content="Technovert's Bi-Monthly Magazine" />
      </Head>
      <Hero />
      <Middle />
      <Footer />
    </div>
  )
}

export default Home
