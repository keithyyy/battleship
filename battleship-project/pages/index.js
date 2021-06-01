import Head from 'next/head'
import Image from 'next/image'
import Smallship from '../components/ships/Smallship'
import Aircraft from '../components/ships/Aircraft'
import Battleship from '../components/ships/Battleship'
import Submarine from '../components/ships/Submarine'
import Destroyer from '../components/ships/Destroyer'

import styles from '../styles/Home.module.css'
import Grid from '../components/Grid'
import GridOpp from '../components/GridOpp'


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
      
      <div className={styles.main}>
        <h1>Ships</h1>
        <div style={{marginBottom: "10px"}}>

        <Smallship />
        </div>
        <div style={{marginBottom: "10px"}}>
        <Aircraft />

        </div>
        <div style={{marginBottom: "10px"}}>

        <Battleship />
        </div>
        <div style={{marginBottom: "10px"}}>
        <Submarine/>

        </div>
        <Destroyer/>
        
      </div>

      
    </div>
  )
}
