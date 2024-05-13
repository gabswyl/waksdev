import React from 'react'
import styles from './Solution.module.css'
import Benefits from './Benefits'
import Button from './Button'
import copy from '../assets/copy.svg';
import brand from '../assets/brand.svg';
import conversao from '../assets/conversao.svg';

const Solution = () => {

    const solution = [
        {
          img: copy,
          title: 'Copy atraente',
          paragraph:
            'Elaboramos palavras que envolvam, ressoem e, por fim, convençam o seu público a agir.',
        },
        {
          img: brand,
          title: 'Branding de alto nível',
          paragraph:
            'Projetamos um branding de alto nível para se destacar da concorrência',
        },
        {
          img: conversao,
          title: 'Design focado em alta conversão',
          paragraph:
            'Criamos designs visualmente atraentes que são otimizados para taxas de conversões máxima',
        },
      ];
    
      const solutionProps = {
        heading: (
          <>
            A solução para um site projetado <br />
            para conversão
          </>
        ),
        subheading: (
          <>
            O que você precisa é de um site que atue como uma máquina de vendas incansável, <br />
            convertendo visitantes em leads 24 horas por dia, 7 dias por semana. As empresas escolhem para:
          </>
        ),
        cards: solution,
      };

  return (
    <section className={styles.solutionsection}>
        <div className={styles.problemcontent}>
          <Benefits {...solutionProps} />
          <div className={styles.button}>
            <Button fontSize="1.25rem" />
          </div>
        </div>
      </section>
  )
}

export default Solution