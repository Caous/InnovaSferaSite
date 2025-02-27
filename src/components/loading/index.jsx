"use client";

import ContainerI from "../container";
import { HeroImage } from "./styles";

import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Loading() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Construindo produtos <b>inovadores.</b>",
        "innovasfera<b>.com</b>", ""
      ],
      startDelay: 400,
      typeSpeed: 80,
      backSpeed: 40,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <HeroImage>
      <ContainerI>
        <div className="container-hero-text">
          <h2 ref={el}></h2>
        </div>
      </ContainerI>
    </HeroImage>
  );
}
