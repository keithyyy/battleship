import React from 'react'
import Gridsquare from './Gridsquare.js'
import styles from '../styles/Grid.module.css'

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

