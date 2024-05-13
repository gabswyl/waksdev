import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import styles from './Button.module.css'

const Button = ({ fontSize }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Adicionamos uma dependência vazia para que o useEffect seja executado apenas uma vez, ao montar o componente

  return (
    <button className={styles.button}>
       <FaWhatsapp size={'32px'}/>
       <a style={{ fontSize: windowWidth < 1000 ? '1rem' : fontSize }} href='https://contate.me/waksdigital'>Solicite seu orçamento</a>
    </button>
  );
};

export default Button;
