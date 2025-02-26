"use client";

import Link from "next/link";
import Image from "next/image";

import ContainerI from "../container";
import { HeroImage } from "./styles";

export default function Hero() {
  return (
    <HeroImage>
      <ContainerI>
        <header>
          <Image
            src="/logo-large.svg"
            width={168}
            height={48}
            alt="Logo da InnovaSfera"
          />

          <nav>
            <a href="/">
              <li className="active">Início</li>
            </a>

            <a href="#">
              <li>Quem somos</li>
            </a>

            <a href="#">
              <li>Serviços</li>
            </a>

            <a href="#">
              <li>Habilidades</li>
            </a>

            <a href="#">
              <li>Projetos</li>
            </a>
          </nav>

          <Link href="/contato" className="contato">
            Entrar em contato
          </Link>
        </header>

        <div className="icon-hello">
          <div className="icon">🚀</div>
          <h2>Servir nossos parceiros para sermos servidor.</h2>
        </div>

        <div className="container-hero-text">
          <h1>Especialistas em design, tecnologia e inovação.</h1>
          <p>
            Somos uma empresa de design, tecnologia e inovação dedicado a
            potencializar a presença digital das marcas dos nossos clientes.
          </p>
        </div>

        <article>
          <h3>UI/UX Design</h3>
          <h3>Aplicativo</h3>
          <h3>Frontend</h3>
          <h3>Backend</h3>
          <h3>Infraestrutura</h3>
          <h3>Automação</h3>
          <h3>Assistência ténica</h3>
          <h3>SaaS</h3>
        </article>

        <div className="container-icon-mouse">
          <Image
            src="/mouse.svg"
            width={32}
            height={32}
            alt="Logo da InnovaSfera"
          />

          <p>Continue explorando</p>
        </div>
      </ContainerI>
    </HeroImage>
  );
}
