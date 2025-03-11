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
            <p>suporte@innovasfera.com.br</p>
            <p>CNPJ sob o nº 53.522.180/0001-38</p>
            <p>InnovaSfera. Todos os direitos reservados</p>
          </div>

          <div className="navigation-footer">
            <span>
              <h3>Empresa</h3>

              <a href="/servicos">Serviços</a>
              <a href="/projetos">Projetos</a>
              <a href="/contato">Contato</a>
            </span>

            <span>
              <h3>Social</h3>

              <a href="https://www.instagram.com/innovasfera/">Instagram</a>
              <a href="https://www.linkedin.com/company/innova-sfera/">
                LinkedIn
              </a>
            </span>
          </div>
        </div>
      </ContainerI>
    </FooterContainer>
  );
}
