import React from 'react'
import styles from './Faq.module.css'
import arrowdown from '../assets/arrowdown.svg'
import arrowup from '../assets/arrowup.svg'
import { useState } from 'preact/hooks';

const Faq = () => {

    const faqsObject = [{
        title: "Em quanto tempo terei minha landing page pronta?",
        resposta: "Isso é muito relativo dependendo do projeto solicitado! Mas geralmente são entregue  em menos de 7-3 dias úteis para entregar o projeto na suas mãos!",
    },
    {
        title: "Preciso ter domínio e hospedagem?",
        resposta: "Sim! A landing page desenvolvida por nós é propriedade 100% sua e os custos para manter ela no ar também",
    },
    {
        title: "Posso solicitar alterações na landing page?",
        resposta: "Sim! Você pode pedir alterações tranquilamente dentro de 3 dias úteis de uma única vez",
    },
    {
        title: "Qual plataforma é feita?",
        resposta: "Para ter melhor perfomance no desenvolvimento da landing page, nós desenvolvemos o seu design dentro do figma & photoshop, e implementamos ela em ReactJS",
    },
    {
        title: "Terei suporte e manutenção?",
        resposta: "Sim, você terá suporte conosco com a nossa equipe durante 3 meses após a compra.",
    },
    ]

    const [active, setActive] = useState(null);

    const handleFaq = (index) => {
        setActive(active === index ? null : index)
    }

    return (
        <div>
            <dl>
                {faqsObject.map((faq, index) => (
                    <div key={index} className={styles.faqcards}>
                        <dt className={styles.faqtitle} onClick={() => handleFaq(index)}>
                            {faq.title}
                            <div className={`arrow ${active === index ? 'active' : ''}`}>
                                <img src={active === index ? arrowup : arrowdown} />
                            </div>
                        </dt>
                        {active === index && (
                            <dd className={styles.faqresponse}>{faq.resposta}</dd>
                        )}
                    </div>
                ))}


            </dl>

            <div className={styles.anydoubts}>
                <div>
                    <h1>Ficou com alguma dúvida?</h1>
                    <p>Envie uma mensagem e converse <br />com a nossa equipe</p>
                </div>
                <div>
                    <button>
                        <a href="https://whatsa.me/5531983189752">Chamar no whatsapp</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Faq