import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import styles from './Button.module.css'

const Button = ({ fontSize }) => {
  return (
    <button className={styles.button}>
       <FaWhatsapp size={'32px'}/>
       <a style={{ fontSize: fontSize }} href='https://contate.me/waksdigital'>Solicite seu orçamento</a>
    </button>
  )
}

export default Button