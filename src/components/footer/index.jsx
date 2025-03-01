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

              <a href="#">Serviços</a>
              <a href="#">Projetos</a>
              <a href="#">InnovaStudio</a>
              <a href="#">Contato</a>
            </span>

            <span>
              <h3>Social</h3>

              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </span>
          </div>
        </div>
      </ContainerI>
    </FooterContainer>
  );
}
