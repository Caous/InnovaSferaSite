"use client";

import Image from "next/image";

import ContainerI from "../container";
import { FooterContainer } from "./styles";

export default function Footer() {
  return (
    <FooterContainer>
      <ContainerI>
        <div className="container-footer">
          <div>
            <Image src="logo-white.svg" width={32} height={32} alt="Imagem" />
            <p>innovasfera@gmail.com</p>
            <p>CNPJ sob o nº 123456789</p>
            <p>InnovaSfera. Todos os direitos reservados</p>
          </div>

          <div className="navigation-footer">
            <span>
              <h3>Empresa</h3>

              <p>Serviços</p>
              <p>Projetos</p>
              <p>InnovaStudio</p>
              <p>Contato</p>
            </span>

            <span>
              <h3>Social</h3>

              <p>Instagram</p>
              <p>LinkedIn</p>
            </span>
          </div>
        </div>
      </ContainerI>
    </FooterContainer>
  );
}
