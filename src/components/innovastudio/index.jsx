"use client";

import ContainerI from "../container";
import { Studio } from "./styles";
import Slide from "../slide";

import Image from "next/image";

export default function InnovaStudio() {
  return (
    <Studio>
      <Image src="/bg-studio.svg" width={1920} height={764} alt="Imagem" />
      <ContainerI>
        <div className="container-studio-text">
          <Slide delay={0.2}>
            <h3>Conheça nós</h3>
            <h2>
              Innova<b>Studio</b>
            </h2>

            <p>
              Bem-vindo ao nosso Studio, onde transformamos ideias em visuais
              impactantes. Especializados em criação fotografias profissionais,
              gravações institucionais, edição de artes e vídeos, além da
              criação de identidade visual. Tudo o que você precisa para
              fortalecer sua presença de mídia e marketing.
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
                <Image src="/s1.png" width={280} height={450} alt="Imagem" />
              </article>
            </Slide>

            <Slide delay={0.6}>
              <article>
                <Image src="/s2.png" width={280} height={210} alt="Imagem" />
              </article>
            </Slide>
          </div>

          <div className="card-two">
            <Slide delay={0.7}>
              <article>
                <Image src="/s3.png" width={280} height={450} alt="Imagem" />
              </article>
            </Slide>

            <Slide delay={0.9}>
              <article>
                <Image src="/s4.png" width={280} height={210} alt="Imagem" />
              </article>
            </Slide>
          </div>
        </div>
      </ContainerI>
    </Studio>
  );
}
