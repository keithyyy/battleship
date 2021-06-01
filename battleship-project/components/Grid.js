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
    let xAxis = ["A", "B", "C", "D", "E", "F", "H", "I", "J", "K"]
    let yAxis= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    const dimension = 10



    const onClick = (e) => {
        console.log(e)
    }

    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            row.push(<Gridsquare dataX={xAxis[i]} dataY={yAxis[j]} onClick={onClick}/>)
        }    
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

