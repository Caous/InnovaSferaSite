"use client";

import Image from "next/image";

import ContainerI from "../container";
import { TechContainer } from "./styles";

export default function Tech() {
  return (
    <TechContainer>
      <ContainerI>
        <div className="container-tech">
          <h2>
            Um time formado por diversas habilidades com um único foco,{" "}
            <b>alcançar o resultado!</b>
          </h2>

          <Image src="tech.svg" width={1088} height={358} />

          <h3>
            Reunimos especialistas com habilidades diversas, trabalhando em
            sintonia para transformar desafios em conquistas e alcançar
            resultados extraordinários com inovação, estratégia e dedicação!
          </h3>
        </div>
      </ContainerI>
    </TechContainer>
  );
}
