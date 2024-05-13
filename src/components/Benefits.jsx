import React from 'react'
import styles from './Benefits.module.css'
import Card from './Card'

const Benefits = ({ heading, subheading, cards }) => {
    return (
        <div className={styles.problem}>
            <h1>{heading}</h1>
            <p>{subheading}</p>
            <div className={styles.cards}>
                <ul>
                    {cards.map((card, index) => (
                        <Card key={index} {...card} hideImage={card.hideImage} index={index} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Benefits
