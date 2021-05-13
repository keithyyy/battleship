import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Grid from '../components/Grid'
// import '../styles/Grid.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Battleship!</title>
      </Head>

      <main className={styles.main}>
        <h1>Welcome to Battleship</h1>
        <Grid className={styles.field}/>
        
      </main>
      

      
    </div>
  )
}