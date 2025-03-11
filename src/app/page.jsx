"use client";

import { useState, useEffect } from "react";
import { GlobalStyles } from "@/lib";

import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { motion } from "framer-motion";

import Image from "next/image";

import * as S from "@/styles/home.styles";

import { ContainerI, Loading, Menu, Footer, Slide } from "../components";

const projects = [
  {
    id: 1,
    title: "Landing Page",
    description: "Uma landing page responsiva e moderna para diversos clientes",
    category: "Frontend",
    image: "case-image.svg",
    link: "#",
  },
  {
    id: 2,
    title: "Integração de clientes",
    description: "Uma API REST para gerenciamento de clientes.",
    category: "Backend",
    image: "case-image.svg",
    link: "#",
  },
  {
    id: 3,
    title: "App de Tarefas",
    description: "Aplicativo mobile para organização de tarefas.",
    category: "Mobile",
    image: "case-image.svg",
    link: "#",
  },
  {
    id: 4,
    title: "Dashboard Admin",
    description:
      "Dashboard interativo para gerenciamento vendas e processos de ordem de serviço.",
    category: "Frontend",
    image: "case-image.svg",
    link: "#",
  },
  {
    id: 5,
    title: "E-commerce",
    description:
      "Um e-commerce completo para nosso cliente, com integração de pagamento, emissão de notas e acompanhamento de estoque.",
    category: "Backend",
    image: "case-image.svg",
    link: "#",
  },
  {
    id: 6,
    title: "ERP",
    description: "Um ERP personalizado para cada necessidade.",
    category: "Backend",
    image: "case-image.svg",
    link: "#",
  },
];

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
      {
        title: "Design Dedicado",
        description:
          "Criação de interfaces para sites, blog, sistemas & aplicativos.",
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
      {
        title: "Sistemas Sob-Medida",
        description:
          "Criação de sistema dedicado para nossos parceiros, ERP, CRM, Automação, Ecommerce, Emissão de notas",
        icon: "logo-white.svg",
      },
    ],
  },
  {
    id: "consultoria",
    title: "Consultoria",
    cards: [
      {
        title: "Negócios & Comercial",
        description:
          "Um time comercial e de tecnologia que unem forças para oferecer suporte completo à sua empresa.",
        icon: "logo-white.svg",
      },
      {
        title: "Sistemas",
        description:
          "Foco em ajudar sua empresa a crescer, verificamos sistemas e procedimentos que precisam ser criados ou adaptados para sua empresa.",
        icon: "logo-white.svg",
      },
      {
        title: "Procedimentos de TI",
        description:
          "Consultoria em procedimentos de TI para verificar se o seu sistema está de acordo.",
        icon: "logo-white.svg",
      },
      {
        title: "Análise de Dados",
        description:
          "Soluções personalizadas de análise de dados para otimizar custos, lucratividade e operações da sua empresa.",
        icon: "logo-white.svg",
      },
    ],
  },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeService, setActiveService] = useState(services[0]);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % services.length;
        setActiveService(services[newIndex]);
        setProgress(0);
        return newIndex;
      });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 150 ? prev + 1 : 0));
    }, 150);

    return () => clearInterval(progressInterval);
  }, []);

  const [filter, setFilter] = useState("Todos");

  const filteredProjects =
    filter === "Todos"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <GlobalStyles />
      {loading ? (
        <motion.div exit={{ opacity: 0 }} transition={{ duration: 1 }}>
          <Loading />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <S.HeroImage>
            <ContainerI>
              <Menu />

              <Slide delay={0.5}>
                <div className="icon-hello">
                  <div className="icon">🚀</div>
                  <h2>Servir nossos parceiros para sermos servidos.</h2>
                </div>
              </Slide>

              <Slide delay={0.7}>
                <div className="container-hero-text">
                  <h1>Especialistas em design, tecnologia e inovação.</h1>
                  <p>
                    Somos uma empresa de tecnologia com sistemas sob-medida com
                    foco em ajudar nossos parceiros a chegarem no seu máximo
                    potencial com inovação!.
                  </p>
                </div>
              </Slide>

              <Slide delay={1.0}>
                <article>
                  <h3>UX Design</h3>
                  <h3>Aplicativo</h3>
                  <h3>Frontend</h3>
                  <h3>Backend</h3>
                  <h3>Integração</h3>
                  <h3>Automação</h3>
                  <h3>CRM/ERP</h3>
                  <h3>SaaS</h3>
                </article>
              </Slide>

              <Slide delay={1.5} className="container-icon-mouse">
                <Image
                  src="/mouse.svg"
                  width={32}
                  height={32}
                  alt="Logo da InnovaSfera"
                />

                <p>Continue explorando</p>
              </Slide>
            </ContainerI>
          </S.HeroImage>

          <S.AboutImage>
            <ContainerI>
              <div className="container-about">
                <Slide delay={0.5} className="image">
                  <Image
                    src="/logo-simple.svg"
                    width={52}
                    height={81}
                    alt="Logo Innova"
                  />
                </Slide>

                <div className="container-about-text">
                  <Slide delay={0.2}>
                    <h3>Conheça a InnovaSfera</h3>
                  </Slide>

                  <Slide delay={0.5}>
                    <h2>
                      Ajudamos empresas a construírem <b>seus projetos</b>{" "}
                      inovadores.
                    </h2>
                  </Slide>

                  <Slide delay={0.7}>
                    <p>
                      InnovaSfera inovando cada esfera dentro do ecossistema de
                      nossos parceiros. Consideramos nossos clientes como
                      parceiros, acreditamos que devemos servir com a tecnologia
                      para sermos servidos, não entregamos apenas sistemas, mas
                      soluções sob medida que resolvem problemas reais e
                      estratégicos dentro de cada área da sua empresa.
                      Trabalhamos lado a lado com nossos parceiros para auxiliar
                      a chegarem no seu máximo potencial com a tecnologia e
                      inovação!
                    </p>
                  </Slide>

                  <Slide delay={0.8} className="opition">
                    <h4>Design</h4>
                    <h4>Tecnologia</h4>
                    <h4>Inovação</h4>
                  </Slide>
                </div>

                <div className="container-about-image">
                  <video
                    width="320"
                    height="500"
                    autoPlay="autoplay"
                    controls
                    muted
                  >
                    <source src="video-about.mp4" type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                  </video>
                </div>
              </div>
            </ContainerI>
          </S.AboutImage>

          <S.AboutInnova>
            <Image
              src="./logo-gray.svg"
              width={600}
              height={600}
              alt="Imagem"
            />
            <ContainerI>
              <div className="about-innova-text">
                <Slide delay={0.2}>
                  <h2>
                    Innova<b>Sfera</b>
                  </h2>
                  <p>
                    Ser referência em inovação e qualidade, desenvolvendo
                    sistemas e soluções tecnológicas para impulsionar o
                    crescimento do nosso futuro e dos nossos parceiros.
                  </p>
                </Slide>
              </div>

              <div className="about-innova-cards">
                <div className="card-one">
                  <Slide delay={0.4}>
                    <article>
                      <h3>Fundação</h3>

                      <p>
                        Somos uma empresa emergente com foco na criação de
                        produtos digitais inovadores.
                      </p>

                      <span>
                        <h4>2024</h4>
                        <p>Empresa nova</p>
                      </span>
                    </article>
                  </Slide>

                  <Slide delay={0.6}>
                    <article>
                      <h3>Projetos</h3>

                      <p>
                        Vários projetos entregues em diversas esferas, sempre
                        cuidando dos nossos parceiros e entregando resultados
                        positivos.
                      </p>

                      <span>
                        <h4>+30.000</h4>
                        <p>Linhas de códigos</p>
                      </span>
                    </article>
                  </Slide>
                </div>

                <div className="card-two">
                  <Slide delay={0.7}>
                    <article>
                      <h3>Projetos</h3>

                      <p>
                        Temos trabalhado em diversos projetos que demonstram
                        nosso compromisso.
                      </p>

                      <span>
                        <h4>+10</h4>
                        <p>Diversos sites</p>
                      </span>
                    </article>
                  </Slide>

                  <Slide delay={0.9}>
                    <article>
                      <h3>Tecnologias</h3>

                      <p>
                        Usamos as melhores tecnologias do mercado para criar
                        sistemas, landing page, ecommerce...
                      </p>

                      <span>
                        <h4>+20</h4>
                        <p>Hard Skills</p>
                      </span>
                    </article>
                  </Slide>
                </div>
              </div>
            </ContainerI>
          </S.AboutInnova>

          <S.ValuesContainer>
            <ContainerI>
              <Slide delay={0.2}>
                <h3>Valores da InnovaSfera</h3>
              </Slide>

              <Slide delay={0.3}>
                <h2>
                  Guiamos empresas com valores que{" "}
                  <b>transformam ideias em inovação.</b>
                </h2>
              </Slide>

              <div className="container-values">
                <div className="container-values-text">
                  <Accordion>
                    <Slide delay={0.5}>
                      <AccordionItem
                        header={
                          <div className="value">
                            <p className="title">Relacionamento ético</p>

                            <div>
                              <img src="icon-add.svg" alt="image" />
                            </div>
                          </div>
                        }
                        initialEntered
                      >
                        No relacionamento ético, pautado no respeito e
                        transparência para construir os melhores resultados com
                        responsabilidade;
                      </AccordionItem>
                    </Slide>

                    <Slide delay={0.6}>
                      <AccordionItem
                        header={
                          <div className="value">
                            <p className="title">Esforço com qualidade</p>

                            <div>
                              <img src="icon-add.svg" alt="image" />
                            </div>
                          </div>
                        }
                      >
                        Com esforço certo e muita qualidade, pautamos o valor da
                        InnovaSfera para entregarmos sempre, o melhor resultado
                        para crescimento e inovação.
                      </AccordionItem>
                    </Slide>

                    <Slide delay={0.7}>
                      <AccordionItem
                        header={
                          <div className="value">
                            <p className="title">Desenvolvimento humano</p>

                            <div>
                              <img src="icon-add.svg" alt="image" />
                            </div>
                          </div>
                        }
                      >
                        Contribuir com práticas que visam o desenvolvimento
                        humano justo e solidário sempre pensando em mudar vidas
                        e proporcionar o crescimento.
                      </AccordionItem>
                    </Slide>
                  </Accordion>
                </div>

                <div className="container-values-image"></div>
              </div>
            </ContainerI>
          </S.ValuesContainer>

          <S.JobsContainer>
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
                      <div
                        key={service.id}
                        className={`button ${
                          activeService.id === service.id ? "activeButton" : ""
                        }`}
                        onClick={() => {
                          setActiveService(service);
                          setIndex(i);
                          setProgress(0);
                        }}
                      >
                        {service.title}
                      </div>
                    ))}
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>

                  <Slide delay={0.6}>
                    <p>
                      Ser referência em inovação e qualidade, desenvolvendo
                      sistemas e soluções tecnológicas para impulsionar o
                      crescimento do nosso futuro e dos nossos parceiros.
                    </p>
                  </Slide>
                </article>

                <article className="card-container">
                  <Slide delay={0.3}>
                    <p className="mission">
                      Nossa missão é inovar com tecnologia e desenvolvimento
                      cada esfera que alcançarmos, com objetivo em resultados
                      focados no máximo potencial.
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
          </S.JobsContainer>

          <S.CasesContainer>
            <ContainerI>
              <Slide delay={0.2}>
                <h3>Cases da InnovaSfera</h3>
              </Slide>

              <Slide delay={0.4}>
                <h2>
                  Conheça nossos projetos, tecnologias e inovações com{"  "}
                  <b>transformação digital.</b>
                </h2>
              </Slide>

              <Slide delay={0.4} className="container-cases-filter">
                {["Todos", "Frontend", "Backend", "Mobile"].map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`${filter === category ? "bg-gray" : ""}`}
                  >
                    {category}
                  </button>
                ))}
              </Slide>

              <div className="container-cases-cards">
                {filteredProjects.map((project) => (
                  <Slide delay={0.5} key={project.id} className="card-case">
                    <img src={project.image} alt={project.title} />
                    <div>
                      <span>
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                      </span>

                      <a href={project.link} target="_blank">
                        <button>Acessar projeto</button>
                      </a>
                    </div>
                  </Slide>
                ))}
              </div>
            </ContainerI>
          </S.CasesContainer>

          <S.ServicesTwoContainer>
            <ContainerI>
              <div className="container-services-two">
                <Slide delay={0.2}>
                  <Image
                    src="logo-white.svg"
                    width={56}
                    height={56}
                    alt="Imagem"
                  />
                </Slide>

                <Slide delay={0.3}>
                  <h3>Inovação Tech</h3>
                </Slide>

                <Slide delay={0.4}>
                  <h2>
                    Uma empresa focada em criar <b>soluções digitais</b> para
                    seus clientes.
                  </h2>
                </Slide>
              </div>
            </ContainerI>
          </S.ServicesTwoContainer>

          <S.Studio>
            <Image
              src="/bg-studio.svg"
              width={1920}
              height={764}
              alt="Imagem"
            />
            <ContainerI>
              <div className="container-studio-text">
                <Slide delay={0.2}>
                  <h3>Conheça nós</h3>
                  <h2>
                    Innova<b>Studio</b>
                  </h2>

                  <p>
                    Bem-vindo ao nosso Studio, onde transformamos ideias em
                    visuais impactantes. Especializados em criação fotografias
                    profissionais, gravações institucionais, edição de artes e
                    vídeos, além da criação de identidade visual. Tudo o que
                    você precisa para fortalecer sua presença de mídia e
                    marketing.
                  </p>
                </Slide>

                <Slide delay={0.4}>
                  <div className="container-studio-icon">
                    <div>
                      <Image
                        src="/icon-check.svg"
                        width={16}
                        height={16}
                        alt="image"
                      />
                    </div>
                    <h4>Fotos profissionais e produção de vídeo</h4>
                  </div>

                  <div className="container-studio-icon">
                    <div>
                      <Image
                        src="/icon-check.svg"
                        width={16}
                        height={16}
                        alt="image"
                      />
                    </div>
                    <h4>Identidade visual e artes gráficas</h4>
                  </div>
                </Slide>
              </div>

              <div className="container-studio-image">
                <div className="card-one">
                  <Slide delay={0.4}>
                    <article>
                      <img src="s1.png" alt="Imagem" />
                    </article>
                  </Slide>

                  <Slide delay={0.6}>
                    <article>
                      <img src="s2.png" alt="Imagem" />
                    </article>
                  </Slide>
                </div>

                <div className="card-two">
                  <Slide delay={0.7}>
                    <article>
                      <img src="s3.png" alt="Imagem" />
                    </article>
                  </Slide>

                  <Slide delay={0.9}>
                    <article>
                      <img src="s4.png" alt="Imagem" />
                    </article>
                  </Slide>
                </div>
              </div>
            </ContainerI>
          </S.Studio>

          <S.TechContainer>
            <ContainerI>
              <div className="container-tech">
                <Slide delay={0.3}>
                  <h2>
                    Um time formado por diversas habilidades com um único foco,{" "}
                    <b>alcançar o resultado!</b>
                  </h2>
                </Slide>

                <img src="tech.svg" alt="Imagem" />

                <Slide delay={0.6}>
                  <h3>
                    Reunimos especialistas com habilidades diversas, trabalhando
                    em sintonia para transformar desafios em conquistas e
                    alcançar resultados extraordinários com inovação, estratégia
                    e dedicação!
                  </h3>
                </Slide>
              </div>
            </ContainerI>
          </S.TechContainer>

          <Footer />
        </motion.div>
      )}
    </>
  );
}
