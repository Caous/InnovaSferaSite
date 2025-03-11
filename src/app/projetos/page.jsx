"use client";

import { useState } from "react";
import { GlobalStyles } from "@/lib";

import Link from "next/link";

import Image from "next/image";

import Menu from "../../components/menu";
import ContainerI from "../../components/container";
import Slide from "../../components/slide";
import Footer from "@/components/footer";

import {
  ProjetosContainer,
  SectionInnova,
  SectionProjectFilter,
  SectionFuture,
  SectionProjectFilterDetails,
} from "../../styles/projetos.styles";
import { h5 } from "framer-motion/client";

const projects = [
  {
    id: 1,
    title: "TT Productions",
    description:
      "Temos o privilégio de fazer o site institucional moderno e responsivo para nosso cliente e parceiro, juntamente com o design dedicado feito no figma, seguimos a identidade visual da empresa.",
    category: "Frontend",
    image: "case-image.svg",
    link: "https://ttproductions.com.br/",
  },
  {
    id: 2,
    title: "Instituto Barros",
    description:
      "Nosso parceiro Raphael Barros - CEO do Instituto Barros, abriu as portas para que a InnovaSfera pudesse mostrar sua qualidade, entregando um site unico, junto com a Innova Bot",
    category: "Backend",
    image: "case-image.svg",
    link: "https://institutobarros.com.br/",
  },
  {
    id: 3,
    title: "Riqueza Planejada",
    description:
      "Nossa parceira Cibelle produtora e criadora no mercado financeiro, conta com a Innova para sempre estar a frente com ela, auxiliando a lançar seus produtos no mercado financeiro.",
    category: "Mobile",
    image: "case-image.svg",
    link: "#",
  },
  {
    id: 4,
    title: "Training Now",
    description:
      "Nosso parceiro Rafael Godoi idealizador do projeto Training Now, convidou a InnovaSfera para fazer parte deste projeto super audacioso e inovador do mercado",
    category: "Frontend",
    image: "case-image.svg",
    link: "#",
  },
];

// Mudar aqui Gus 👇

const projectsTwo = [
  {
    id: 1,
    title: "TT Productions",
    description:
      "Temos o privilégio de fazer o site institucional moderno e responsivo para nosso cliente e parceiro, juntamente com o design dedicado feito no figma com um ótimo SEO.",
    category: "Frontend",
    image: "case-image.svg",
    link: "https://ttproductions.com.br/",
    techs: ["React", "TypeScript"],
    services: ["Frontend", "UX Design", "Html", "Css", "JavaScript"],
  },
  {
    id: 2,
    title: "Instituto Barros",
    description:
      "Entregando um site único, com um ótimo design dedicado, SEO e tecnologia de ponta, o Instituto Barros conta também com um sistema dedicado construído para sua necessidade",
    category: "Backend",
    image: "case-image.svg",
    link: "https://institutobarros.com.br/",
    techs: ["React", "TypeScript"],
    services: ["Frontend", "UX Design", "Html", "Css", "JavaScript", "C#", "Banco de Dados", "Automação"],
  },
  {
    id: 3,
    title: "Riqueza Planejada",
    description:
      "Nossa parceira Cibelle produtora e criadora no mercado financeiro, conta com a Innova para construir seu site.",
    category: "Frontend",
    image: "case-image.svg",
    link: "#",
    techs: ["React", "TypeScript"],
    services: ["Frontend", "UX Design", "Html", "Css", "JavaScript"],
  },
  {
    id: 4,
    title: "Estética Automotiva Box299",
    description:
      "A estétitica automotiva box299 foi um trabalho impecável para transmitir a marcar com sua qualidade, desde o design dedicado no figma, com muitas pesquisas de Google SEO e pesquisa de usabilidade",
    category: "Frontend",
    image: "case-image.svg",
    link: "#",
    techs: ["React", "TypeScript"],
    services: ["Frontend", "UX Design", "Html", "Css", "JavaScript"]
  },
];

export default function Projetos() {
  const [filter, setFilter] = useState("Todos");

  const filteredProjects =
    filter === "Todos"
      ? projects
      : projects.filter((project) => project.category === filter);

  const filteredProjectsTwo =
    filter === "Todos"
      ? projectsTwo
      : projectsTwo.filter((project) => project.category === filter);

  return (
    <>
      <GlobalStyles />

      <ProjetosContainer>
        <ContainerI>
          <Menu />

          <article>
            <div className="container-contact">
              <Slide delay={0.2}>
                <h2>
                  Conheça nossos projetos, tecnologias e inovações que estão
                  <b>transformando nossos parceiros.</b>
                </h2>
              </Slide>

              <Slide delay={0.3}>
                <p className="description">
                  Ser referência em inovação e qualidade, desenvolvendo sistemas
                  e soluções tecnológicas para impulsionar o crescimento do
                  nosso futuro e dos nossos parceiros.
                </p>
              </Slide>

              <Slide delay={0.4}>
                <article className="card-big">
                  <div>
                    <img src="./1.png" alt="" />
                  </div>

                  <span>
                    <h4>Innova Bot</h4>

                    <span>
                      <h5>Categoria</h5>
                      <strong>-</strong>
                      <p>Sistema</p>
                    </span>

                    <p>
                      Nosso Bot, desenvolvido sob medida para nossos parceiros,
                      é uma solução da InnovaSfera que automatiza o atendimento
                      via WhatsApp. Com um painel interativo, ele agiliza o
                      atendimento e a resposta a todos os seus clientes, além de
                      permitir integrações diretas com o seu CRM ou ERP para uma
                      gestão ainda mais eficiente.
                    </p>

                    <button>Acessar o projeto</button>
                  </span>
                </article>
              </Slide>

              <Slide delay={0.6}>
                <div className="container-card-small">
                  <article className="card-small">
                    <div>
                      <img src="./1.png" alt="" />
                    </div>

                    <span>
                      <h4>ERP Na Nuvem</h4>

                      <span>
                        <h5>Categoria</h5>
                        <strong>-</strong>
                        <p>Sistema</p>
                      </span>

                      <p>
                        O ERP Na Nuvem é a solução personalizada da InnovaSfera
                        para clientes e parceiros que desejam transformar suas
                        ideias em sistemas de gestão integrados. Com um custo
                        acessível, possibilitamos a criação de um sistema sob
                        medida, que integra processos e otimiza operações,
                        tirando sua ideia do papel e impulsionando a eficiência
                        do seu negócio.
                      </p>

                      <button>Acessar o projeto</button>
                    </span>
                  </article>

                  <article className="card-small">
                    <div>
                      <img src="./1.png" alt="" />
                    </div>

                    <span>
                      <h4>Training Now</h4>

                      <span>
                        <h5>Categoria</h5>
                        <strong>-</strong>
                        <p>Sistema</p>
                      </span>

                      <p>
                        O Training Now é um aplicativo da InnovaSfera voltado
                        para academias e personal trainers. Ele foi desenvolvido
                        para otimizar a gestão dos treinos, agendamentos e
                        acompanhamento do desempenho dos clientes. Com uma
                        interface intuitiva e funcionalidades integradas, o
                        Training Now facilita sua vida para você poder focar no
                        que importa.
                      </p>

                      <button>Acessar o projeto</button>
                    </span>
                  </article>
                </div>
              </Slide>
            </div>
          </article>
        </ContainerI>
      </ProjetosContainer>

      <SectionInnova>
        <div className="container-services-two">
          <Slide delay={0.2}>
            <Image src="logo-white.svg" width={56} height={56} alt="Imagem" />
          </Slide>

          <Slide delay={0.3}>
            <h3>Inovação Tech</h3>
          </Slide>

          <Slide delay={0.4}>
            <h2>
              Uma empresa focada em criar <b>soluções digitais</b> para seus
              clientes.
            </h2>
          </Slide>
        </div>
      </SectionInnova>

      <SectionProjectFilter>
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
                <h4>{project.title}</h4>

                <div>
                  <span>
                    <h5>Categoria</h5>
                    <strong>-</strong>
                    <p>{project.category}</p>
                  </span>
                </div>

                <h6>Sobre o projeto</h6>
                <p>{project.description}</p>

                <a href={project.link} target="_blank">
                  <button>Acessar projeto</button>
                </a>
              </Slide>
            ))}
          </div>
        </ContainerI>
      </SectionProjectFilter>

      <SectionFuture>
        <ContainerI>
          <div className="container-future">
            <img src="innovaimage.svg" alt="Logo InnovaSfera" />
            <span>
              <Slide delay={0.2}>
                <h3>Moldando o futuro</h3>
              </Slide>

              <Slide delay={0.4}>
                <h2>
                  <b>InnovaSfera:</b> Criando o amanhã com inovação e
                  tecnologia.
                </h2>
              </Slide>

              <Slide delay={0.5}>
                <p>
                  Na Innova todos tem o senso de dono, para entender o real
                  problema dos nossos clientes e criar fórmulas de resolver seus
                  problemas ou desempenhar um ótimo trabalho de qualidade!
                </p>
              </Slide>

              <Slide delay={0.6}>
                <Link href="/contato">
                  <button>Entrar em contato</button>
                </Link>
              </Slide>
            </span>
          </div>
        </ContainerI>
      </SectionFuture>

      <SectionProjectFilterDetails>
        <ContainerI>
          <Slide delay={0.2}>
            <h3>Nossa inovação não tem limite</h3>
          </Slide>

          <Slide delay={0.4}>
            <h2>
              <b>Da ideia à revolução:</b> como inovamos com tecnologia digital.
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
            {filteredProjectsTwo.map((project) => (
              <Slide
                delay={0.5}
                key={project.id}
                className="card-projects-details"
              >
                <div className="info">
                  <h4>{project.title}</h4>

                  <div>
                    <span>
                      <h5>Categoria</h5>
                      <strong>-</strong>
                      <p>{project.category}</p>
                    </span>
                  </div>

                  <p>{project.description}</p>
                </div>

                <div>
                  <img src={project.image} alt="" />
                </div>

                <div className="techs">
                  <div>
                    <h4>Tecnologias usadas</h4>

                    <span>
                      {project.techs.map((tech, index) => (
                        <h5 key={index}>{tech}</h5>
                      ))}
                    </span>
                  </div>

                  <a href={project.link} target="_blank">
                    <button>Acessar projeto</button>
                  </a>

                  <div>
                    <h4>Serviços</h4>

                    <span>
                      {project.services.map((services, index) => (
                        <h5 key={index}>{services}</h5>
                      ))}
                    </span>
                  </div>
                </div>
              </Slide>
            ))}
          </div>
        </ContainerI>
      </SectionProjectFilterDetails>

      <Footer />
    </>
  );
}
