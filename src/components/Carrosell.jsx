import React from 'react'
import styles from './Carrosell.module.css'
import origamid from '../assets/origamid.jpg'
import iex from '../assets/iex.jpg'
import sobral from '../assets/sobral.jpg'
import breier from '../assets/breier.jpg'

const Carrosell = () => {
    return (
        <section className={styles.carrosellsection}>
        <div>
            <div className={styles.container}>
                <div className={`${styles.carrosell} ${styles.noborder1}`}>
                    <img src={origamid}></img>
                </div>

                <div className={`${styles.carrosell}`}>
                <img src={iex}></img>
                </div>

                <div className={`${styles.carrosell}`}>
                <img src={sobral}></img>

                </div>

                <div className={`${styles.carrosell} ${styles.noborder2}`}>
                <img src={breier}></img>
                </div>
            </div>
        </div>
      </section>
    )
}

export default Carrosell