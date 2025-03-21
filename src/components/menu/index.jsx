"use client";

import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import Slide from "@/components/slide";

import ContainerI from "../container";
import { MenuNav, Nav, MenuIcon } from "./styles";

export default function Menu() {
  const [isopen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isopen);

  return (
    <MenuNav>
      <ContainerI>
        <Slide delay={0.2} className="header">
          <header>
            <Image
              src="/logo-large.svg"
              width={168}
              height={48}
              alt="Logo da InnovaSfera"
              priority
            />

            <MenuIcon onClick={toggleMenu} className={isopen ? "flex" : "none"}>
              <span />
              <span />
              <span />
            </MenuIcon>

            <Nav $isopen={isopen}>
              <a href="/">
                <li>Início</li>
              </a>

              <a href="/servicos">
                <li>Serviços</li>
              </a>

              <a href="/projetos">
                <li>Projetos</li>
              </a>
            </Nav>

            <Link href="/contato" className="contato">
              Entrar em contato
            </Link>
          </header>
        </Slide>
      </ContainerI>
    </MenuNav>
  );
}
