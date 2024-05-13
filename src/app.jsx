
import React from 'react';
import styles from './app.module.css';
import Button from './components/Button';
import Carrosell from './components/Carrosell';
import Benefits from './components/Benefits';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Header from './components/Header';
import Problem from './components/Problem';
import Solution from './components/Solution';

export function App() {
  const processCreation = [
    {
      hideImage: true,
      title: 'Pesquisa de mercado',
      paragraph:
        'Nós mergulhamos fundo em seu mercado, entendendo melhor a sua concorrência e descobrir as necessidades do clientes',
    },
    {
      hideImage: true,
      title: 'Copy & Design',
      paragraph:
        'Desenvolvemos copy e design atraentes que faz o branding e a landing page se destacarem dentro do mercado.',
    },
    {
      hideImage: true,
      title: 'Otimização do Landing Page',
      paragraph:
        'Nós otimizaremos sua landing page para garantir maxima eficácia, desde a estrutura e as palavras chave para impulsionar sua conversão e destacar-se no mercado.',
    },
  ];

  const processProps = {
    heading: 'Como funciona o processo de criação',
    cards: processCreation,
  };


  

  return (
    <>
      <Header />
      <Hero />
      <Carrosell />
      <Problem />
      <Solution />

      <section className={styles.carrosellsection} id='carrosellSection'>
        <div className={styles.titlecarrosell}>
          <h1>
            Conheça alguns de <br />
            <b className={styles.gradient}>nossos projetos</b>
          </h1>
          <p>O próximo a ter um landing page de alta conversão poderá ser você!</p>
        </div>
        <Carrosell />
      </section>

      <section className={styles.processSection} id='processSection'>
        <Benefits hideImage={true} {...processProps} />
      </section>

      <section className={`${styles.budgetSection}`}>
        <h1>Pronto para acelerar <br />suas conversões?</h1>
        <Button fontSize="1.25rem" />
      </section>

      <section className={styles.faqSection} id='faqSection'>
        <div className={styles.faqs}>
          <div className={styles.titlefaq}>
            <h1>Perguntas <br /><b className={styles.gradient}>Frequentes</b></h1>
          </div>

          <Faq />
        </div>
      </section>

      <footer className={styles.footer}>
        <Footer />
      </footer>

    </>
  );
}
