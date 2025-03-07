import { useState, useEffect } from "react";

import ContainerI from "../container";
import { JobsContainer } from "./styles";

import Slide from "../slide";

const services = [
  {
    id: "design",
    title: "Design",
    cards: [
      {
        title: "UI Design",
        description: "Criação de interfaces intuitivas e modernas.",
        icon: "logo-white.svg",
      },
      {
        title: "UX Research",
        description: "Experiência do usuário aprimorada.",
        icon: "logo-white.svg",
      },
      {
        title: "Prototipagem",
        description: "Prototipagem e testes de usabilidade.",
        icon: "logo-white.svg",
      },
    ],
  },
  {
    id: "desenvolvimento",
    title: "Desenvolvimento",
    cards: [
      {
        title: "Front-end",
        description: "Codificação de aplicações web e mobile.",
        icon: "logo-white.svg",
      },
      {
        title: "Back-end",
        description: "Integração com APIs e serviços externos.",
        icon: "logo-white.svg",
      },
      {
        title: "Performance",
        description: "Otimização de performance e SEO.",
        icon: "logo-white.svg",
      },
    ],
  },
  {
    id: "infraestrutura",
    title: "Infraestrutura",
    cards: [
      {
        title: "Cloud",
        description: "Gerenciamento de servidores e deploys.",
        icon: "logo-white.svg",
      },
      {
        title: "Segurança",
        description: "Monitoramento e segurança de sistemas.",
        icon: "logo-white.svg",
      },
      {
        title: "Redes",
        description: "Configuração e manutenção de redes.",
        icon: "logo-white.svg",
      },
    ],
  },
];

export default function Jobs() {
  const [activeService, setActiveService] = useState(services[0]);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % services.length;
        setActiveService(services[newIndex]);
        setProgress(0);
        return newIndex;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 0));
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <JobsContainer>
      <ContainerI>
        <div className="container-jobs">
          <article className="jobs-option">
            <Slide delay={0.2}>
              <h3>Nossos serviços</h3>
            </Slide>

            <Slide delay={0.4}>
              <h2>
                <b>Servir nossos parceiros</b> para sermos servidos.
              </h2>
            </Slide>

            <div className="button-group">
              {services.map((service, i) => (
                <button
                  key={service.id}
                  className={`button ${
                    activeService.id === service.id ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveService(service);
                    setIndex(i);
                    setProgress(0);
                  }}
                >
                  {service.title}
                </button>
              ))}
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>

            <Slide delay={0.6}>
              <p>
                Ser referência em inovação e qualidade, desenvolvendo sistemas e
                soluções tecnológicas para impulsionar o crescimento do nosso
                futuro e dos nossos parceiros.
              </p>
            </Slide>
          </article>

          <article className="card-container">
            <Slide delay={0.3}>
              <p className="mission">
                Nossa missão é inovar com tecnologia e desenvolvimento cada
                esfera que alcançarmos, com objetivo em resultados focados no
                máximo potencial.
              </p>
            </Slide>

            {activeService.cards.map((card, i) => (
              <Slide delay={0.5} key={i} className="card">
              
                  <div className="card-content">
                    <img src={card.icon} alt="ícone" className="icon" />
                    <div>
                      <h2 className="title">{card.title}</h2>
                      <p className="description">{card.description}</p>
                    </div>
                  </div>
                
              </Slide>
            ))}
          </article>
        </div>
      </ContainerI>
    </JobsContainer>
  );
}
