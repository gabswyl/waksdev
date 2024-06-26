import React from 'react'
import styles from './Footer.module.css'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Logo from './Logo';

const Footer = () => {
  return (
    <div className={styles.footercontainer}>
        <div className={styles.footer}>
            <Logo />

            <div className={styles.midias}>
                <a href='https://www.instagram.com/waksdsgn/'alt="Icone de Whatsapp">
                    <FaInstagram size={'32px'} />
                </a>
                <a href="https://whatsa.me/5531983189752" alt="Icone de WhatsApp">
                    <FaWhatsapp size={'32px'} />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer
