"use client";

import { useState } from "react";
import { GlobalStyles } from "@/lib";

import Image from "next/image";

import { Menu, ContainerI, Slide, Footer } from "@/components";

import * as S from "@/styles/servicos.styles";

const projects = [
  {
    id: 1,
    title: "Criação de sites",
    description:
      "Seja um site institucional, e-commerce ou landing page, garantimos um design responsivo, carregamento rápido e estratégias efi cazes de SEO. Vamos transformar sua presença digital em um verdadeiro ativo para seu negócio!",
    category: "Frontend",
    image: "case-image.svg",
  },
  {
    id: 2,
    title: "Desenvolvimento de sistema",
    description:
      "Se sua empresa precisa de soluções personalizadas para otimizar processos e aumentar a produtividade, a InnovaSfera é a parceira ideal. Nós desenvolvemos sistemas sob medida para atender às suas necessidades, desde um pequeno CRM até plataformas completas e integradas.",
    category: "Backend",
    image: "case-image.svg",
  },
  {
    id: 3,
    title: "Mobile",
    description:
      "Já pensou no seu sistema na palma da sua mão? Construa um aplicativo conosco e tenha todo o sistema na palma da sua mão. Crie o sistema perfeito para o seu cliente com o nosso time!",
    category: "Mobile",
    image: "case-image.svg",
  },
  {
    id: 4,
    title: "CRM - ERP - Automação",
    description:
      "Nosso time é especialista em analisar processos e necessidades de cada parceiro nosso, para criar um sistema sob medida perfeito para você, seja um CRM, ERP ou Automação para ajudar no dia a dia da sua empresa e muito mais.",
    category: "Frontend",
    image: "case-image.svg",
  },
];

export default function Contato() {
  const [filter, setFilter] = useState("Todos");

  const filteredProjects =
    filter === "Todos"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <GlobalStyles />

      <S.ServicosContainer>
        <ContainerI>
          <Menu />

          <article>
            <div className="container-contact">
              <Slide delay={0.3}>
                <h2>
                  <b>Serviços inovadores</b> que impulsionam sua transformação
                  digital.
                </h2>
              </Slide>

              <Slide delay={0.5}>
                <p className="description">
                  Oferecemos soluções tecnológicas avançadas para transformar
                  sua empresa, otimizar processos e impulsionar resultados com
                  inovação e eficiência.
                </p>
              </Slide>
            </div>

            <div className="small-cards-services">
              <div className="cards">
                <Slide delay={0.2}>
                  <h3>+30.000</h3>
                  <h4>Linhas de código</h4>
                  <p>
                    Vários projetos entregues em diversas esferas.
                  </p>
                </Slide>

                <Slide delay={0.3}>
                  <h3>+20</h3>
                  <h4>Tecnologias usadas</h4>
                  <p>
                    Na InnovaSfera gostamos de inovar a cada projeto diversos projetos e diversas tecnologias.
                  </p>
                </Slide>

                <Slide delay={0.4}>
                  <h3>+4</h3>
                  <h4>Projetos próprios</h4>
                  <p>
                    A InnovaSfera criou e lançou +4 projetos próprios durante um ano.
                  </p>
                </Slide>

                <Slide delay={0.5}>
                  <h3>+5</h3>
                  <h4>Projetos encubadores</h4>
                  <p>
                    Ideias que estão amadurecendo para lançamento no mercado.
                  </p>
                </Slide>
              </div>

              <div className="small-title-services">
                <Slide delay={0.5}>
                  <h3>Inovando o mundo digital</h3>
                </Slide>

                <Slide delay={0.6}>
                  <h2>
                    <b>Explore nossas soluções</b>, tendências e avanços com
                    inovação digital.
                  </h2>
                </Slide>
              </div>
            </div>
          </article>
        </ContainerI>
      </S.ServicosContainer>

      <S.ServicesExplore>
        <ContainerI>
          <div className="container-studio-text">
            <Slide delay={0.2}>
              <h3>Inovando o mundo digital</h3>
              <h2>
                <b>Explore nossas soluções</b>, tendências e avanços com
                inovação digital.
              </h2>
            </Slide>

            <Slide delay={0.4}>
              <button>Entrar em contato</button>
            </Slide>
          </div>

          <div className="container-studio-image">
            <div className="card-one">
              <Slide delay={0.4}>
                <article>
                  <Image
                    src="/image.svg"
                    width={280}
                    height={300}
                    alt="Imagem"
                  />
                </article>
              </Slide>

              <Slide delay={0.6}>
                <article>
                  <Image
                    src="/image.svg"
                    width={280}
                    height={300}
                    alt="Imagem"
                  />
                </article>
              </Slide>

              <Slide delay={0.6}>
                <article>
                  <Image
                    src="/image.svg"
                    width={280}
                    height={300}
                    alt="Imagem"
                  />
                </article>
              </Slide>
            </div>

            <div className="card-two">
              <Slide delay={0.4}>
                <article>
                  <Image
                    src="/image.svg"
                    width={280}
                    height={300}
                    alt="Imagem"
                  />
                </article>
              </Slide>

              <Slide delay={0.6}>
                <article>
                  <Image
                    src="/image.svg"
                    width={280}
                    height={300}
                    alt="Imagem"
                  />
                </article>
              </Slide>

              <Slide delay={0.6}>
                <article>
                  <Image
                    src="/image.svg"
                    width={280}
                    height={300}
                    alt="Imagem"
                  />
                </article>
              </Slide>
            </div>
          </div>
        </ContainerI>
      </S.ServicesExplore>

      <S.ServicesTwo>
        <ContainerI>
          <section className="container-services-two">
            <Slide delay={0.2}>
              <h3>Inovando o mundo digital</h3>
            </Slide>

            <Slide delay={0.3}>
              <h2>
                <b>Explore nossas consultorias</b>, acompanhamento para o seu negócio, tendências e avanços com
                inovação digital.
              </h2>
            </Slide>

            <Slide delay={0.5}>
              <article className="card-big">
                <span>
                  <h4>Negócios & Comercial</h4>
                  <p>
                    Na InnovaSfera, os times comercial e de
                    tecnologia unem forças para oferecer
                    suporte completo à sua empresa, desde a
                    análise estratégica de dados até o suporte
                    técnico especializado.
                  </p>
                </span>

                <div>
                  <img src="./image.svg" alt="" />
                </div>
              </article>
            </Slide>

            <div className="card-small">
              <Slide delay={0.6}>
                <article>
                  <span>
                    <h4>Sistemas</h4>
                    <p>
                      Nosso foco é criar soluções tecnológicas
                      sob medida, desde a concepção até a
                      implementação de sistemas completos.
                      É por isso que você pode contar com
                      nosso time de tecnologia, para suportar
                      sua empresa ou ideia.
                    </p>
                  </span>

                  <div>
                    <img src="./image.svg" alt="" />
                  </div>
                </article>
              </Slide>

              <Slide delay={0.7}>
                <article>
                  <span>
                    <h4>Análise de dados</h4>
                    <p>
                      Oferecemos soluções personalizadas de
                      análise de dados, que transformam
                      informações em insights valiosos para
                      reduzir custos, melhorar a lucratividade e
                      otimizar operações.
                    </p>
                  </span>

                  <div>
                    <img src="./image.svg" alt="" />
                  </div>
                </article>
              </Slide>
            </div>
          </section>
        </ContainerI>
      </S.ServicesTwo>

      <S.ServicesFour>
        <ContainerI>
          <Slide delay={0.2}>
            <h3>Nossa inovação não tem limite</h3>
          </Slide>

          <Slide delay={0.3}>
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
            {filteredProjects.map((project) => (
              <Slide delay={0.5} key={project.id} className="card-case">
                <img src={project.image} alt={project.title} />
                <div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </Slide>
            ))}
          </div>
        </ContainerI>
      </S.ServicesFour>

      <Footer />
    </>
  );
}
