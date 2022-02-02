import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Banner } from '../components/banner/banner'
import { NavBar } from '../components/nav/navbar'
import { SectionCard } from "../components/card/section-card"

import { getVideos, getPopularVideos } from '../lib/videos'

export async function getServerSideProps() {
  const disneyVideos = await getVideos("disney trailer");
  const productivityVideos = await getVideos("Productivity");

  const travelVideos = await getVideos("travel");

  const popularVideos = await getPopularVideos();

  return {
    props: {
      disneyVideos,
      travelVideos,
      productivityVideos,
      popularVideos, } }
}

export default function Home({ disneyVideos,
  travelVideos,
  productivityVideos,
  popularVideos,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="Netflix" content="Netflix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className={styles.main}>
      <NavBar username='djbatson19@gmail.com' />
      <Banner title='Clifford The Big Red Dog' subtitle='The Motion Picture' imgUrl='/static/clifford.webp' />

      <div className={styles.sectionWrapper}>
        <SectionCard title="Disney" videos={disneyVideos} size="large" />
        <SectionCard title="Travel" videos={travelVideos} size="small" />
        <SectionCard
          title="Productivity"
          videos={productivityVideos}
          size="medium"
        />
        <SectionCard title="Popular" videos={popularVideos} size="small" />
      </div>
      </div>
    </div>
  )
}
