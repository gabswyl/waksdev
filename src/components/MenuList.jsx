import React from 'react';
import styles from './MenuList.module.css';
import { Link } from 'react-scroll';

const MenuList = () => {
    return (
        <ul className={styles.container}>
            <li className={styles.button}>
                <Link to="processSection" smooth={true} duration={1000}>Como funciona?</Link>
            </li>
            <li className={styles.button}>
                <Link to="carrosellSection" smooth={true} duration={1000}>Portfolio</Link>
            </li>
            <li className={styles.button}>
                <Link to="faqSection" smooth={true} duration={1000}>FAQ</Link>
            </li>
        </ul>
    );
}

export default MenuList;
