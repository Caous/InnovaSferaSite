"use client";

import Link from "next/link";
import Image from "next/image";

import Slide from "../../components/slide";

import ContainerI from "../../components/container";
import {
  ServicosContainer,
  ServicesExplore,
  ServicesTwo,
} from "../../styles/servicos.styles";

import { GlobalStyles } from "@/lib";
import Footer from "@/components/footer";

export default function Contato() {
  return (
    <>
      <GlobalStyles />

      <ServicosContainer>
        <ContainerI>
          <Slide delay={0.2} className="header">
            <header>
              <Image
                src="/logo-large.svg"
                width={168}
                height={48}
                alt="Logo da InnovaSfera"
                priority
              />

              <nav>
                <a href="/">
                  <li>Início</li>
                </a>

                <a href="#">
                  <li className="active">Serviços</li>
                </a>

                <a href="#">
                  <li>Projetos</li>
                </a>

                <a href="#">
                  <li>InnovaStudio</li>
                </a>
              </nav>

              <Link href="/contato" className="contato">
                Entrar em contato
              </Link>
            </header>
          </Slide>

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
                <div>
                  <h3>200+</h3>
                  <h4>Sites feitos</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    aliquam mauris sed ma
                  </p>
                </div>

                <div>
                  <h3>200+</h3>
                  <h4>Sites feitos</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    aliquam mauris sed ma
                  </p>
                </div>

                <div>
                  <h3>200+</h3>
                  <h4>Sites feitos</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    aliquam mauris sed ma
                  </p>
                </div>

                <div>
                  <h3>200+</h3>
                  <h4>Sites feitos</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    aliquam mauris sed ma
                  </p>
                </div>
              </div>

              <div className="small-title-services">
                <h3>Inovando o mundo digital</h3>
                <h2>
                  <b>Explore nossas soluções</b>, tendências e avanços com
                  inovação digital.
                </h2>
              </div>
            </div>
          </article>
        </ContainerI>
      </ServicosContainer>

      <ServicesExplore>
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
      </ServicesExplore>

      <ServicesTwo>
        <ContainerI>
          <section className="container-services-two">
            <h3>Inovando o mundo digital</h3>
            <h2>
              <b>Explore nossas soluções</b>, tendências e avanços com inovação
              digital.
            </h2>

            <article>
              <h4>Web design</h4>
              <p>
                Lorem ipsum dalaracc lacus vel facilisis dolor sit amet consecte
                tur adipiscing elit semper dalaracc lacus vel facilisis volutpat
                est velitolm.
              </p>
            </article>
          </section>
        </ContainerI>
      </ServicesTwo>

      <Footer />
    </>
  );
}
