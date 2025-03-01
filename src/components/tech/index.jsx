"use client";

import Image from "next/image";

import Slide from "../slide";

import ContainerI from "../container";
import { TechContainer } from "./styles";

export default function Tech() {
  return (
    <TechContainer>
      <ContainerI>
        <div className="container-tech">
          <Slide delay={0.3}>
            <h2>
              Um time formado por diversas habilidades com um único foco,{" "}
              <b>alcançar o resultado!</b>
            </h2>
          </Slide>

          <Image src="tech.svg" width={1088} height={358} alt="Imagem" />

          <Slide delay={0.6}>
            <h3>
              Reunimos especialistas com habilidades diversas, trabalhando em
              sintonia para transformar desafios em conquistas e alcançar
              resultados extraordinários com inovação, estratégia e dedicação!
            </h3>
          </Slide>
        </div>
      </ContainerI>
    </TechContainer>
  );
}
