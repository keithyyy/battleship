import React from 'react'
import Gridsquare from './Gridsquare.js'
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

const Grid = () => {

    let row = []
    const width = 10

    for (let i = 0; i < width*width; i++) {
        row.push(<Gridsquare/>)
    }

    return (
        <div className={styles.field}>
            {row.map(square => {
                return square
            })}
        </div>
    )
}

export default Grid

