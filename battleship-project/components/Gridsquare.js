import React from 'react'
import styles from '../styles/Grid.module.css'

const Gridsquare = ({dataX, dataY, onClick}) => {
    return (
        <div className={styles.gridsq} dataX={dataX}>
            <p>{dataX}{dataY}</p>
        </div>
    )
}

export default Gridsquare
