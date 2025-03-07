"use client";

import { GlobalStyles } from "@/lib";

import Image from "next/image";

import Menu from "../../components/menu";
import ContainerI from "../../components/container";
import Slide from "../../components/slide";
import Footer from "@/components/footer";

import { Accordion, AccordionItem } from "@szhsin/react-accordion";

import {
  HeroContato,
  AboutContato,
  ValuesContainer,
} from "../../styles/contato.styles";

export default function Contato() {
  return (
    <>
      <GlobalStyles />

      <HeroContato>
        <ContainerI>
          <Menu />

          <article>
            <div className="container-contact">
              <Slide delay={0.3}>
                <h1>Contato</h1>
              </Slide>

              <Slide delay={0.5}>
                <p className="description">
                  Dúvidas, comentários ou sugestões? Basta preencher o
                  formulário e entraremos em contato em breve.
                </p>
              </Slide>

              <Slide delay={0.6}>
                <span>
                  <img src="icon-pin.svg" alt="" />
                  <p>São Paulo</p>
                </span>

                <span>
                  <img src="icon-phone.svg" alt="" />
                  <p>14 9000-0000</p>
                </span>

                <span>
                  <img src="icon-mail.svg" alt="" />
                  <p>innovasfera@gmail.com</p>
                </span>
              </Slide>
            </div>

            <div className="container-form">
              <form action="">
                <input type="text" placeholder="Seu nome" />
                <input type="email" placeholder="Seu email" />
                <input type="tel" placeholder="Seu número" />
                <textarea
                  id="messagem"
                  placeholder="Sua mensagem..."
                ></textarea>
                <input type="submit" value="Enviar contato" />
              </form>
            </div>
          </article>

          <Slide delay={1.5} className="container-icon-mouse">
            <Image
              src="/mouse.svg"
              width={32}
              height={32}
              alt="Logo da InnovaSfera"
            />

            <p>Continue explorando</p>
          </Slide>
        </ContainerI>
      </HeroContato>

      <AboutContato>
        <ContainerI>
          <Slide delay={0.2}>
            <h3>Conheça a InnovaSfera</h3>
          </Slide>

          <Slide delay={0.3}>
            <h2>
              Ajudamos empresas a construírem <b>seus projetos</b>{" "}
              inovadores.
            </h2>
          </Slide>

          <article>
            <div className="card-text">
              <Slide delay={0.3}>
                <h4>
                  Animado para trabalhar junto com você em seu próximo projeto?
                </h4>
              </Slide>

              <Slide delay={0.5}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing eli mattis
                  sit phasellus mollis sit aliquam sit nullam.
                </p>
              </Slide>

              <Slide delay={0.6}>
                <button>Acessar projetos</button>
              </Slide>
            </div>
            <div className="card-image">
              <img src="" alt="" />
            </div>
          </article>
        </ContainerI>
      </AboutContato>

      <ValuesContainer>
        <ContainerI>
          <Slide delay={0.2}>
            <h3>Perguntas frequentes</h3>
          </Slide>

          <Slide delay={0.3}>
            <h2>
              <b>Tem alguma dúvida</b> sobre a qualidade dos nosso serviços?
            </h2>
          </Slide>

          <div className="container-values">
            <div className="container-faq">
              <Accordion>
                <Slide delay={0.5}>
                  <AccordionItem
                    header={
                      <div className="value">
                        <p className="title">Pergunta 1</p>

                        <div>
                          <img src="icon-add.svg" alt="image" />
                        </div>
                      </div>
                    }
                    initialEntered
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus feugiat, massa quis bibendum lobortis, elit est
                    euismod purus, ut porta turpis velit vel est.
                  </AccordionItem>
                </Slide>

                <Slide delay={0.6}>
                  <AccordionItem
                    header={
                      <div className="value">
                        <p className="title">Pergunta 2</p>

                        <div>
                          <img src="icon-add.svg" alt="image" />
                        </div>
                      </div>
                    }
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus feugiat, massa quis bibendum lobortis, elit est
                    euismod purus, ut porta turpis velit vel est.
                  </AccordionItem>
                </Slide>

                <Slide delay={0.7}>
                  <AccordionItem
                    header={
                      <div className="value">
                        <p className="title">Pergunta 3</p>

                        <div>
                          <img src="icon-add.svg" alt="image" />
                        </div>
                      </div>
                    }
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus feugiat, massa quis bibendum lobortis, elit est
                    euismod purus, ut porta turpis velit vel est.
                  </AccordionItem>
                </Slide>
              </Accordion>
            </div>

            <div className="container-faq">
              <Accordion>
                <Slide delay={0.5}>
                  <AccordionItem
                    header={
                      <div className="value">
                        <p className="title">Pergunta 4</p>

                        <div>
                          <img src="icon-add.svg" alt="image" />
                        </div>
                      </div>
                    }
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus feugiat, massa quis bibendum lobortis, elit est
                    euismod purus, ut porta turpis velit vel est.
                  </AccordionItem>
                </Slide>

                <Slide delay={0.6}>
                  <AccordionItem
                    header={
                      <div className="value">
                        <p className="title">Pergunta 5</p>

                        <div>
                          <img src="icon-add.svg" alt="image" />
                        </div>
                      </div>
                    }
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus feugiat, massa quis bibendum lobortis, elit est
                    euismod purus, ut porta turpis velit vel est.
                  </AccordionItem>
                </Slide>

                <Slide delay={0.7}>
                  <AccordionItem
                    header={
                      <div className="value">
                        <p className="title">Pergunta 6</p>

                        <div>
                          <img src="icon-add.svg" alt="image" />
                        </div>
                      </div>
                    }
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus feugiat, massa quis bibendum lobortis, elit est
                    euismod purus, ut porta turpis velit vel est.
                  </AccordionItem>
                </Slide>
              </Accordion>
            </div>
          </div>
        </ContainerI>
      </ValuesContainer>

      <Footer />
    </>
  );
}
