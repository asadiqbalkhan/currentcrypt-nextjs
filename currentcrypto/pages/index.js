import Head from 'next/head'
import Image from 'next/image'
import SearchBar from '../components/SearchBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Testing </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    <SearchBar />

      
    </div>
  )
}
