import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Grid from '../components/Grid'
import GridOpp from '../components/GridOpp'
// import '../styles/Grid.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Battleship!</title>
      </Head>

      <main className={styles.main}>
        <h1>Welcome to Battleship</h1>
        <div className={styles.fieldContainer}>
        <Grid className={styles.field}/>
        <GridOpp className={styles.field}/>
          
        </div>
      </main>
      

      
    </div>
  )
}
