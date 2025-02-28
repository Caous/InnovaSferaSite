"use client";

import Image from "next/image";

import ContainerI from "../container";
import { AboutInnova } from "./styles";

import Slide from "../slide";

export default function Innova() {
  return (
    <AboutInnova>
      <Image src="./logo-gray.svg" width={600} height={600} />
      <ContainerI>
        <div className="about-innova-text">
          <Slide delay={0.2}>
            <h2>
              Innova<b>Sfera</b>
            </h2>
            <p>
              Ser referência em inovação e qualidade, desenvolvendo sistemas e
              soluções tecnológicas para impulsionar o crescimento do nosso
              futuro e dos nossos parceiros.
            </p>
          </Slide>
        </div>

        <div className="about-innova-cards">
          <div className="card-one">
            <Slide delay={0.4}>
              <article>
                <h3>Fundação</h3>

                <p>
                  Somos uma empresa emergente com foco na criação de produtos
                  digitais inovadores.
                </p>

                <span>
                  <h4>2024</h4>
                  <p>Empresa nova</p>
                </span>
              </article>
            </Slide>

            <Slide delay={0.6}>
              <article>
                <h3>Especialistas</h3>

                <p>
                  Nossa equipe é composta por especialistas qualificados com
                  vasta experiência na área.
                </p>

                <span>
                  <h4>+5</h4>
                  <p>Inovadores</p>
                </span>
              </article>
            </Slide>
          </div>

          <div className="card-two">
            <Slide delay={0.7}>
              <article>
                <h3>Projetos</h3>

                <p>
                  Temos trabalhado em diversos projetos que demonstram nosso
                  compromisso.
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
                  Usamos as melhores tecnologias do mercado para criar sistemas,
                  landing page, ecommerce...
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
    </AboutInnova>
  );
}
