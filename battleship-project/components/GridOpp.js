import React from 'react'
import GridSquareOpp from './GridSquareOpp.js'
import styles from '../styles/Grid.module.css'

const dictionary = {
    0: null,
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J"
  };

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
