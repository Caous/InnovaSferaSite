"use client";

import Slide from "../slide";

import ContainerI from "../container";
import { ValuesContainer } from "./styles";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

export default function Values() {
  return (
    <ValuesContainer>
      <ContainerI>
        <Slide delay={0.2}>
          <h3>Valores da InnovaSfera</h3>
        </Slide>

        <Slide delay={0.3}>
          <h2>
            Guiamos empresas com valores que{" "}
            <b>transformam ideias em inovação.</b>
          </h2>
        </Slide>

        <div className="container-values">
          <div className="container-values-text">
            <Accordion>
              <Slide delay={0.5}>
                <AccordionItem
                  header={
                    <div className="value">
                      <p className="title">Relacionamento ético</p>

                      <div>
                        <img src="icon-add.svg" alt="image" />
                      </div>
                    </div>
                  }
                  initialEntered
                >
                  No relacionamento ético, pautado no respeito e transparência
                  para construir os melhores resultados com responsabilidade;
                </AccordionItem>
              </Slide>

              <Slide delay={0.6}>
                <AccordionItem
                  header={
                    <div className="value">
                      <p className="title">Esforço com qualidade</p>

                      <div>
                        <img src="icon-add.svg" alt="image" />
                      </div>
                    </div>
                  }
                >
                  Com esforço certo e muita qualidade, pautamos o valor da InnovaSfera para entregarmos sempre, o melhor resultado para crescimento e inovação.
                </AccordionItem>
              </Slide>

              <Slide delay={0.7}>
                <AccordionItem
                  header={
                    <div className="value">
                      <p className="title">Desenvolvimento humano</p>

                      <div>
                        <img src="icon-add.svg" alt="image" />
                      </div>
                    </div>
                  }
                >
                  Contribuir com práticas que visam o desenvolvimento humano justo e solidário sempre pensando em mudar vidas e proporcionar o crescimento.
                </AccordionItem>
              </Slide>
            </Accordion>
          </div>

          <div className="container-values-image"></div>
        </div>
      </ContainerI>
    </ValuesContainer>
  );
}
