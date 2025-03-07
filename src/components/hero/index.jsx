"use client";

import Image from "next/image";

import Slide from "@/components/slide";

import ContainerI from "../container";
import { HeroImage } from "./styles";
import Menu from "../menu";

export default function Hero() {
  return (
    <HeroImage>
      <ContainerI>
        <Menu />

        <Slide delay={0.5}>
          <div className="icon-hello">
            <div className="icon">🚀</div>
            <h2>Servir nossos parceiros para sermos servidor.</h2>
          </div>
        </Slide>

        <Slide delay={0.7}>
          <div className="container-hero-text">
            <h1>Especialistas em design, tecnologia e inovação.</h1>
            <p>
              Somos uma empresa de design, tecnologia e inovação dedicado a
              potencializar a presença digital das marcas dos nossos clientes.
            </p>
          </div>
        </Slide>

        <Slide delay={1.0}>
          <article>
            <h3>UX Design</h3>
            <h3>Aplicativo</h3>
            <h3>Frontend</h3>
            <h3>Backend</h3>
            <h3>Infraestrutura</h3>
            <h3>Automação</h3>
            <h3>Assistência ténica</h3>
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
    </HeroImage>
  );
}
