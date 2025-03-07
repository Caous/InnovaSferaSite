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
                  Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
                  vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
                  vitae, accumsan auctor mi.
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
                  Suspendisse massa risus, pretium id interdum in, dictum sit
                  amet ante. Fusce vulputate purus sed tempus feugiat.
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
