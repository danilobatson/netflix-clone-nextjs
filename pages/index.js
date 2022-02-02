import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Banner } from '../components/banner/banner'
import { NavBar } from '../components/nav/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="Netflix" content="Netflix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar username='djbatson19@gmail.com'/>
      <Banner title='Clifford The Big Red Dog' subtitle='The Motion Picture' imgUrl='/static/clifford.webp' />

      {/* <NavBar />
      <Card /> */}

    </div>
  )
}
