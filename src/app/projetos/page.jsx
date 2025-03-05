"use client";

import Link from "next/link";
import Image from "next/image";

import Slide from "../../components/slide";

import ContainerI from "../../components/container";
import { ProjetosContainer } from "../../styles/projetos.styles";

import { GlobalStyles } from "@/lib";
import Footer from "@/components/footer";

export default function Projetos() {
  return (
    <>
      <GlobalStyles />

      <ProjetosContainer>
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

                <a href="/servicos">
                  <li>Serviços</li>
                </a>

                <a href="/projetos">
                  <li className="active">Projetos</li>
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
                  Conheça nossos projetos, tecnologias e inovações com
                  <b>transformação digital.</b>
                </h2>
              </Slide>

              <Slide delay={0.5}>
                <p className="description">
                  Ser referência em inovação e qualidade, desenvolvendo sistemas
                  e soluções tecnológicas para impulsionar o crescimento do
                  nosso futuro e dos nossos parceiros.
                </p>
              </Slide>
            </div>
          </article>
        </ContainerI>
      </ProjetosContainer>

      <Footer />
    </>
  );
}
