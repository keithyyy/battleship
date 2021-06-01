import React from 'react'
import styles from '../styles/Grid.module.css'

const Gridsquare = ({dataX, dataY, logCoord}) => {

    const onClick = (dataX, dataY) => {
        let coord = dataX+=dataY
        console.log(coord)
        // when click console log the coordindate
    }

    return (
        <div className={styles.gridsq} dataX={dataX} onClick={() => onClick(dataX, dataY)}>
            <p >{dataX}{dataY}</p>

        </div>
    )
}

export default Gridsquare
