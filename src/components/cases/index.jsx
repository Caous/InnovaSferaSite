"use client";

import { useState } from "react";

import Slide from "../slide";

import Image from "next/image";

import ContainerI from "../container";
import { CasesContainer } from "./styles";

const projects = [
  {
    id: 1,
    title: "Landing Page",
    description: "Uma landing page responsiva e moderna.",
    category: "Frontend",
    image: "case-image.svg",
    link: "#",
  },
  {
    id: 2,
    title: "API de Usuários",
    description: "Uma API REST para gerenciamento de usuários.",
    category: "Backend",
    image: "case-image.svg",
    link: "#",
  },
  {
    id: 3,
    title: "App de Tarefas",
    description: "Aplicativo mobile para organização de tarefas.",
    category: "Mobile",
    image: "case-image.svg",
    link: "#",
  },
  {
    id: 4,
    title: "Dashboard Admin",
    description: "Dashboard interativo para gerenciamento de dados.",
    category: "Frontend",
    image: "case-image.svg",
    link: "#",
  },
  {
    id: 5,
    title: "E-commerce API",
    description: "API para um sistema de e-commerce completo.",
    category: "Backend",
    image: "case-image.svg",
    link: "#",
  },
  {
    id: 6,
    title: "API Mongo DB",
    description: "API para um sistema de pagamento de aplicativo Uber.",
    category: "Backend",
    image: "case-image.svg",
    link: "#",
  },
];

export default function Cases() {
  const [filter, setFilter] = useState("Todos");

  const filteredProjects =
    filter === "Todos"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <CasesContainer>
      <ContainerI>
        <Slide delay={0.2}>
          <h3>Cases da InnovaSfera</h3>
        </Slide>

        <Slide delay={0.4}>
          <h2>
            Conheça nossos projetos, tecnologias e inovações com{" "}
            <b>transformação digital.</b>
          </h2>
        </Slide>

        <Slide delay={0.4} className="container-cases-filter">
          {["Todos", "Frontend", "Backend", "Mobile"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`${filter === category ? "bg-gray" : ""}`}
            >
              {category}
            </button>
          ))}
        </Slide>

        <div className="container-cases-cards">
          {filteredProjects.map((project) => (
            <Slide delay={0.5} key={project.id} className="card-case">
              <img src={project.image} alt={project.title} />
              <div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <a href={project.link} target="_blank">
                  <button>Acessar projeto</button>
                </a>
              </div>
            </Slide>
          ))}
        </div>
      </ContainerI>
    </CasesContainer>
  );
}
