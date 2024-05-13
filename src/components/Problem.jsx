import React from 'react'
import styles from './Problem.module.css'
import Benefits from './Benefits';
import message from '../assets/message.svg';
import sad from '../assets/sad.svg';
import arrow from '../assets/arrow.svg';

const Problem = () => {

    const benefitsProblems = [
        {
          img: message,
          title: 'Perdido na competição',
          paragraph:
            'Num mar de concorrentes, é dificil fazer que com a sua marca se destaque quando todos lutam por atenção',
        },
        {
          img: sad,
          title: 'Leads não qualificados',
          paragraph:
            'Está lutando para transformar visitantes do site em leads? sua estratégia podem estar errando o alvo com seu público-alvo!',
        },
        {
          img: arrow,
          title: 'Desafio em conversão de clientes',
          paragraph:
            'Obter cliques é o primeiro passo. o verdadeiro desafio está em converter esses cliques em clientes fiéis',
        },
      ];
    
      const benefitsProps = {
        heading:
          'A landing page não tem problemas de tráfego... ele só não está convertendo conseguindo converter esse tráfego em leads... ',
        subheading:
          'o REAL desafio é transformar cliques em conversões',
        cards: benefitsProblems,
      };


  return (
    <section className={styles.problemsection}>
        <Benefits {...benefitsProps} />
    </section>
  )
}

export default Problem