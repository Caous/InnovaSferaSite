"use client";

import { useState } from "react";
import { GlobalStyles } from "@/lib";

import Image from "next/image";

import { Menu, ContainerI, Slide, Footer } from "@/components";

import * as S from "@/styles/servicos.styles";

const projects = [
  {
    id: 1,
    title: "Frontend",
    description:
      "Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia quis vel eros laoreet id donec ultrices tincidunt.",
    category: "Frontend",
    image: "case-image.svg",
  },
  {
    id: 2,
    title: "Backend",
    description:
      "Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia quis vel eros laoreet id donec ultrices tincidunt.",
    category: "Backend",
    image: "case-image.svg",
  },
  {
    id: 3,
    title: "Mobile",
    description:
      "Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia quis vel eros laoreet id donec ultrices tincidunt.",
    category: "Mobile",
    image: "case-image.svg",
  },
  {
    id: 4,
    title: "Frontend",
    description:
      "Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia quis vel eros laoreet id donec ultrices tincidunt.",
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
                  <h3>200+</h3>
                  <h4>Sites feitos</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    aliquam mauris sed ma
                  </p>
                </Slide>

                <Slide delay={0.3}>
                  <h3>200+</h3>
                  <h4>Sites feitos</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    aliquam mauris sed ma
                  </p>
                </Slide>

                <Slide delay={0.4}>
                  <h3>200+</h3>
                  <h4>Sites feitos</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    aliquam mauris sed ma
                  </p>
                </Slide>

                <Slide delay={0.5}>
                  <h3>200+</h3>
                  <h4>Sites feitos</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    aliquam mauris sed ma
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
                <b>Explore nossas soluções</b>, tendências e avanços com
                inovação digital.
              </h2>
            </Slide>

            <Slide delay={0.5}>
              <article className="card-big">
                <span>
                  <h4>Web design</h4>
                  <p>
                    Lorem ipsum dalaracc lacus vel facilisis dolor sit amet
                    consecte tur adipiscing elit semper dalaracc lacus vel
                    facilisis volutpat est velitolm.
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
                    <h4>Web design</h4>
                    <p>
                      Lorem ipsum dalaracc lacus vel facilisis dolor sit amet
                      consecte tur adipiscing elit semper dalaracc lacus vel
                      facilisis volutpat est velitolm.
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
                    <h4>Web design</h4>
                    <p>
                      Lorem ipsum dalaracc lacus vel facilisis dolor sit amet
                      consecte tur adipiscing elit semper dalaracc lacus vel
                      facilisis volutpat est velitolm.
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
