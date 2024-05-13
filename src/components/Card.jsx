import React from 'react'
import styles from './Card.module.css'

const Card = ({img, title, paragraph, hideImage, index}) => {
    return (
        <li className={styles.card}>
            {hideImage ? <p className={styles.numbers}>{index + 1}</p> : <img src={img} alt="icon" />}
            <h1>{title}</h1>
            <p>{paragraph}</p>
        </li>
    )
}

export default Card
