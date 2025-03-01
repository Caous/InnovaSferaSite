"use client";

import Image from "next/image";

import ContainerI from "../container";
import { ServicesTwoContainer } from "./styles";

export default function ServicesTwo() {
  return (
    <ServicesTwoContainer>
      <ContainerI>
        <div className="container-services-two">
          <Image src="logo-white.svg" width={56} height={56} alt="Imagem" />
          <h3>Inovação Tech</h3>
          <h2>
            Uma empresa focada em criar <b>soluções digitais</b> para seus
            clientes.
          </h2>
        </div>
      </ContainerI>
    </ServicesTwoContainer>
  );
}
