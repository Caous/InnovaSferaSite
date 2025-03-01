"use client";

import Image from "next/image";

import Slide from "../slide";

import ContainerI from "../container";
import { ServicesTwoContainer } from "./styles";

export default function ServicesTwo() {
  return (
    <ServicesTwoContainer>
      <ContainerI>
        <div className="container-services-two">
          <Slide delay={0.2}>
            <Image src="logo-white.svg" width={56} height={56} alt="Imagem" />
          </Slide>

          <Slide delay={0.3}>
            <h3>Inovação Tech</h3>
          </Slide>

          <Slide delay={0.4}>
            <h2>
              Uma empresa focada em criar <b>soluções digitais</b> para seus
              clientes.
            </h2>
          </Slide>
        </div>
      </ContainerI>
    </ServicesTwoContainer>
  );
}
