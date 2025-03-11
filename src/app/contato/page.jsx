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
                  <p>São Paulo, SP</p>
                </span>

                <span>
                  <img src="icon-phone.svg" alt="" />
                  <p>(11) 97466-7009</p>
                </span>

                <span>
                  <img src="icon-mail.svg" alt="" />
                  <p>suporte@innovasfera.com.br</p>
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
            <h3>A Visão do CEO</h3>
          </Slide>

          <Slide delay={0.3}>
            <h2>
              <b>Conheça Gustavo Nascimento</b> e sua jornada na criação da
              InnovaSfera.
            </h2>
          </Slide>

          <article>
            <div className="card-text">
              <Slide delay={0.5}>
                <p>
                  Gustavo Nascimento, fundador da InnovaSfera em 2024 com o objetivo
                  de transformar empresas por meio da tecnologia. Sempre envolvido em 
                  diversos projetos, Gustavo já revolucionou diversos lugares que passou,
                  desde a modernização de empresas totalmente do 0 até a inovação, de sistemas
                  que existiam em diversos lugares. Sempre trazendo o senso de responsabilidade e qualidade
                  Gustavo nos inspira não apenas pelas palavras mas também o exemplo, desde sua jornada como programador 
                  até o empreendedorismo, querendo resolver problemas grandes com o uso da tecnologia.
                  Como nosso CEO nos direciona, "Quem quer ser servido, que seja servo primeiro", Gustavo trás está visão
                  para o mundo da tecnologia, sempre dizendo, devemos resolver problemas, dores e dar solução e assim seremos recompensados.
                </p>
              </Slide>
            </div>
            <div className="card-image">
              <img src="ceo.jpg" alt="" />
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
                        <p className="title">A InnovaSfera é uma empresa de software?</p>

                        <div>
                          <img src="icon-add.svg" alt="image" />
                        </div>
                      </div>
                    }
                    initialEntered
                  >
                    Sim a InnovaSfera, é uma empresa de software, para construir projetos ou dar continuidade em projetos, sistemas, automações, sites, integrações e afins.
                  </AccordionItem>
                </Slide>

                <Slide delay={0.6}>
                  <AccordionItem
                    header={
                      <div className="value">
                        <p className="title">Uma empresa de Software House</p>

                        <div>
                          <img src="icon-add.svg" alt="image" />
                        </div>
                      </div>
                    }
                  >
                    Na InnovaSfera, trabalhamos com a vertente de software house, não importa sua necessidade estamos prontos para servir, traga sua ideia, seu projeto, até mesmo MVP que queira executar e estamos prontos para entregar.
                  </AccordionItem>
                </Slide>

                <Slide delay={0.7}>
                  <AccordionItem
                    header={
                      <div className="value">
                        <p className="title">Desenvolvem aplicativos e sistemas?</p>

                        <div>
                          <img src="icon-add.svg" alt="image" />
                        </div>
                      </div>
                    }
                  >
                    Na InnovaSfera desenvolvemos aplicativos e sistemas para qualquer necessidade, conte com um time tecnico e um time comercial para efetuar todo acompanhamento do seu projeto, desde a criação a venda da sua idea estamos aqui para apoiar.
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
                        <p className="title">Fazem criação de site?</p>

                        <div>
                          <img src="icon-add.svg" alt="image" />
                        </div>
                      </div>
                    }
                  >
                    Sim, na InnovaSfera desenvolvemos sites dedicados para o nosso cliente, contando uma esteira para criação do site, desde a construção do conteúdo, ao design, seguindo totalmente a identidade visual do nosso parceiro, com uma pesquisa de mercado e SEO para o melhor posicionamento, não apenas um template de site mas sim um projeto único.                   </AccordionItem>
                </Slide>

                <Slide delay={0.6}>
                  <AccordionItem
                    header={
                      <div className="value">
                        <p className="title">Trabalham com cloud e banco de dados?</p>

                        <div>
                          <img src="icon-add.svg" alt="image" />
                        </div>
                      </div>
                    }
                  >
                    Sim, usamos principalmente Azure da Microsoft, para hospedar as soluções do nossos parceiros, com um time tecnico especializado para ajudar você a mander uma hospedagem de qualidade e com baixo custo.
                  </AccordionItem>
                </Slide>

                <Slide delay={0.7}>
                  <AccordionItem
                    header={
                      <div className="value">
                        <p className="title">Fazem automações?</p>

                        <div>
                          <img src="icon-add.svg" alt="image" />
                        </div>
                      </div>
                    }
                  >
                    Trabalhamos com diversos tipos de automações e integrações, desde balanças de super mercado até toda parte de IOT, efetuamos automações em planilhas, sistemas, sites e muito mais conte conosco sempre.
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
