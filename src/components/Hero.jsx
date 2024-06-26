import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import Button from './Button';

const Hero = () => {
    const [text, setText] = useState("");
    const phrases = ["suas vendas!", "mais leads!"]; 

    useEffect(() => {
        let currentText = "";
        let currentIndex = 0;
        let interval;

        const typeWriter = () => {
            if (currentIndex < phrases.length) {
                const targetPhrase = phrases[currentIndex];
                if (currentText !== targetPhrase) {
                    currentText = targetPhrase.slice(0, currentText.length + 1);
                    setText(currentText);
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        interval = setInterval(eraseText, 50);
                    }, 1000);
                }
            } else {
                clearInterval(interval);
            }
        };

        const eraseText = () => {
            if (currentText.length > 0) {
                currentText = currentText.slice(0, currentText.length - 1);
                setText(currentText);
            } else {
                clearInterval(interval);
                currentIndex = (currentIndex + 1) % phrases.length;
                setTimeout(() => {
                    interval = setInterval(typeWriter, 100); 
                }, 500); 
            }
        };

        const isMobileOrSmallScreen = window.innerWidth < 1000 || /Mobi|Android/i.test(navigator.userAgent);
        const initialText = isMobileOrSmallScreen ? "mais vendas" : "";

        setText(initialText); 


        if (!isMobileOrSmallScreen) {
            interval = setInterval(typeWriter, 100); 
        }

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.title}>
                <h1>
                    Tenha um <b className={styles.gradient}>site profissional</b> e <br />
                    aumente {' '}
                    <b className={styles.gradient}>{text}</b>
                </h1>
                <p>
                    Nós vamos transformar seu site em uma máquina de vendas que <br />
                    trabalha 24/7 para converter leads dentro do seu funil de vendas e <br />
                    impulsionar vendas com nosso estrutura personalizada.
                </p>
            </div>
            <Button fontSize="1.25rem" />
        </section>
    );
}

export default Hero;
