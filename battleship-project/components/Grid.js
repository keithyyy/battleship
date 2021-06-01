import React from 'react'
import Gridsquare from './Gridsquare.js'
import styles from '../styles/Grid.module.css'

const Grid = () => {

    let xCoord = ["A","B","C","D","E","F","G","H","I","J"]
    let yCoord = ["1","2","3","4","5","6","7","8","9","10"]

    let row = []
    const width = 10
    const height = 10
    

    for (let i = 0; i < width; i++) {
        for (let j=0; j < height; j++) {

            row.push(<Gridsquare dataX={xCoord[i]} dataY={yCoord[j]}/>)
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

