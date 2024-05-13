import React from 'react'
import styles from './Carrosell.module.css'
import origamid from '../assets/origamid.webp'
import iex from '../assets/iex.webp'
import sobral from '../assets/sobral.webp'
import breier from '../assets/breier.webp'

const Carrosell = () => {
    return (
        <section className={styles.carrosellsection}>
        <div>
            <div className={styles.container}>
                <div className={`${styles.carrosell} ${styles.noborder1}`}>
                    <img src={origamid} alt="Landing page Origamid"></img>
                </div>

                <div className={`${styles.carrosell}`}>
                <img src={iex} alt="Landing page IExperience"></img>
                </div>

                <div className={`${styles.carrosell}`}>
                <img src={sobral} alt="Landing page Pedro Sobral"></img>

                </div>

                <div className={`${styles.carrosell} ${styles.noborder2}`}>
                <img src={breier} alt="Landing page Gabriel Breier"></img>
                </div>
            </div>
        </div>
      </section>
    )
}

export default Carrosell