"use client";

import { Main, Container, Text } from "@/styles/contato.styles";

import Link from "next/link";

export default function Contato() {
  return (
    <Main>
      <Container>
        <Text>InnovaSfera - Contato</Text>

        <Link href="/">Início</Link>
      </Container>
    </Main>
  );
}
