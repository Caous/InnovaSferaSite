"use client";

import Image from "next/image";

import ContainerI from "../container";
import { AboutImage } from "./styles";

import Slide from "../slide";

export default function About() {
  return (
    <AboutImage>
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
                Ajudamos empresas a construírem <b>produtos digitais</b>{" "}
                inovadores.
              </h2>
            </Slide>

            <Slide delay={0.7}>
              <p>
                InnovaSfera inovando cada esfera dentro do ecossistema de nossos
                parceiros. Consideramos nossos clientes como parceiros,
                acreditamos que devemos servir com a tecnologia para sermos
                servidos, não entregamos apenas sistemas, mas soluções sob
                medida que resolvem problemas reais e estratégicos dentro de
                cada área da sua empresa. Trabalhamos lado a lado com nossos
                parceiros para auxiliar a chegarem no seu máximo potencial com a
                tecnologia e inovação!
              </p>
            </Slide>

            <Slide delay={0.8}>
              <h4>Design</h4>
              <h4>Tecnologia</h4>
              <h4>Inovação</h4>
            </Slide>
          </div>

          <div className="container-about-image">
            <video width="320" height="500" autoPlay="autoplay" controls muted>
              <source src="video-about.mp4" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </div>
      </ContainerI>
    </AboutImage>
  );
}
