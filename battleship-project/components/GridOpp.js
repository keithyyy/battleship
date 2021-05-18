import React from 'react'
import GridSquareOpp from './GridSquareOpp.js'
import styles from '../styles/Grid.module.css'

const GridOpp = () => {
    let row = []
    const width = 10

    for (let i = 0; i < width*width; i++) {
        row.push(<GridSquareOpp/>)
    }



    return (
        <div className={styles.opponentField}>
            {row.map(square => {
                return square
            })}
        </div>
    )
}

export default GridOpp
