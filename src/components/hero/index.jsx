"use client";

import Link from "next/link";
import ContainerI from "../container";
import { HeroImage } from "./styles";

export default function Hero() {
  return (
    <HeroImage>
      <ContainerI>
        <Link href="/contato">Contato</Link>
        <h2>Servir nossos parceiros para sermos servidor.</h2>
        <h1>Especialistas em design, tecnologia e inovação.</h1>
        <p>
          Somos uma empresa de design, tecnologia e inovação dedicado a
          potencializar a presença digital das marcas dos nossos clientes.
        </p>
      </ContainerI>
    </HeroImage>
  );
}
