"use client";

import Image from "next/image";

import ContainerI from "../container";
import { ValuesContainer } from "./styles";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

export default function Values() {
  return (
    <ValuesContainer>
      <ContainerI>
        <h3>Valores da InnovaSfera</h3>

        <h2>
          Guiamos empresas com valores que{" "}
          <b>transformam ideias em inovação.</b>
        </h2>

        <div className="container-values">
          <div className="container-values-text">
            <Accordion>
              <AccordionItem
                header={
                  <div className="teste">
                    <p className="title">Relacionamento ético</p>
                    <img src="arrow-down.svg" alt="image" />
                  </div>
                }
                initialEntered
              >
                No relacionamento ético, pautado no respeito e transparência
                para construir os melhores resultados com responsabilidade;
              </AccordionItem>

              <AccordionItem
                header={
                  <div className="teste">
                    <p className="title">Esforço com qualidade</p>
                    <img src="arrow-down.svg" alt="image" />
                  </div>
                }
              >
                Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
                vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
                vitae, accumsan auctor mi.
              </AccordionItem>

              <AccordionItem
                header={
                  <div className="teste">
                    <p className="title">Desenvolvimento humano</p>
                    <img src="arrow-down.svg" alt="image" />
                  </div>
                }
              >
                Suspendisse massa risus, pretium id interdum in, dictum sit amet
                ante. Fusce vulputate purus sed tempus feugiat.
              </AccordionItem>
            </Accordion>
          </div>

          <div className="container-values-image"></div>
        </div>
      </ContainerI>
    </ValuesContainer>
  );
}
