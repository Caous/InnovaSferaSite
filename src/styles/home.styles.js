import styled from "styled-components";
import { theme } from "@/lib/global-styles";

export const Div = styled.section`
  max-width: ${theme.devices.containerXL};
  margin: 0 auto;
  padding: 0px 24px;
`;

export const HeroImage = styled.section`
  background-image: url("hero.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 200px;

  .container-icon-mouse {
    display: flex;
    align-items: center;
    gap: 12px;
    position: absolute;
    bottom: 7%;

    p {
      font-size: 2rem;
      font-weight: 500;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  article {
    margin-top: 64px;
    display: flex;
    align-items: center;
    gap: 24px;
    border-radius: 100px;
    background-color: #00020f;
    padding: 16px;
    border: 1px solid #232329;

    @media (max-height: 850px) {
      display: none;
    }

    @media (max-width: 1200px) {
      display: none;
    }

    h3 {
      font-size: 1.6rem;
      font-weight: 400;
      padding: 6px 16px;
      border-radius: 100px;
      border: 1px solid #232329;
    }
  }

  .icon-hello {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    background-color: #00020f;
    border: 1px solid #242d6b;
    border-radius: 100px;
    padding: 8px 16px 8px 8px;
    margin-bottom: 24px;

    @media (max-width: 768px) {
      padding: 16px;
      margin-top: 40px;
    }

    .icon {
      padding: 12px;
      font-size: 2rem;
      background-color: #242d6b;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  h2 {
    font-size: 1.8rem;
    text-align: center;
    color: #a7adbe;
    font-weight: 400;
  }

  h1 {
    font-size: 4.8rem;
    max-width: 580px;
    text-align: center;
    font-weight: 500;
    margin: 0 auto 16px auto;

    @media (max-width: 768px) {
      font-size: 3.2rem;
    }
  }

  p {
    font-size: 2rem;
    max-width: 620px;
    color: #dddddd;
    text-align: center;
    line-height: 150%;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;

export const AboutImage = styled.section`
  background-image: url("bg-about.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
  padding: 140px 0px;

  @media (max-width: 992px) {
    padding: 80px 0px;
  }

  .container-about {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    position: relative;

    @media (max-width: 992px) {
      flex-wrap: wrap;
    }

    .image {
      position: absolute;
      left: -84px;
      top: 10%;

      @media (max-width: 1212px) {
        display: none;
        background-color: red;
      }
    }
  }

  .container-about-text {
    width: 60%;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 992px) {
      width: 100%;
    }

    .opition {
      @media (max-width: 992px) {
        flex-wrap: wrap;
      }
    }

    div {
      display: flex;
      align-items: center;
      gap: 16px;

      h4 {
        color: #2a2a2a;
        font-size: 1.4rem;
        border-radius: 32px;
        border: 1px solid #2a2a2a;
        padding: 8px 24px;
        font-weight: 500;
        text-transform: uppercase;
      }
    }

    h3 {
      color: #2a2a2a;
      font-size: 2rem;
      margin-bottom: 24px;
      font-weight: 600;
      text-transform: uppercase;
    }

    h2 {
      color: #2a2a2a;
      font-size: 4rem;
      font-weight: 600;

      b {
        font-weight: 300;
      }

      @media (max-width: 992px) {
        font-size: 3.2rem;
      }
    }

    p {
      color: #686868;
      font-size: 2rem;
      margin: 48px 0;
      line-height: 160%;
      font-weight: 500;
    }
  }

  .container-about-image {
    width: 35%;
    height: auto;

    @media (max-width: 992px) {
      margin-top: 32px;
      width: 100%;
    }

    video {
      height: 100%;
      width: 100%;
    }
  }
`;

export const AboutInnova = styled.section`
  background-color: #f3f2f3;
  width: 100%;
  height: auto;
  padding: 220px 0px 140px 0px;
  position: relative;
  overflow: hidden;

  @media (max-width: 992px) {
    padding: 80px 0;
  }

  > div {
    display: flex;
    justify-content: space-between;
    gap: 64px;

    @media (max-width: 992px) {
      flex-wrap: wrap;
    }
  }

  img {
    position: absolute;
    bottom: -15%;
    left: 5%;
  }

  .about-innova-text {
    width: 35%;

    @media (max-width: 992px) {
      width: 100%;
    }

    h2 {
      color: #020013;
      font-size: 4rem;
      font-weight: 600;

      b {
        font-weight: 300;
      }
    }

    p {
      color: #686868;
      font-size: 2rem;
      font-weight: 500;
      max-width: 350px;
      line-height: 160%;
      margin-top: 32px;

      @media (max-width: 992px) {
        max-width: 100%;
      }
    }
  }

  .about-innova-cards {
    width: 64%;
    display: flex;
    justify-content: space-between;
    gap: 32px;

    @media (max-width: 992px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      flex-wrap: wrap;
    }

    article {
      background-color: #0f0f16;
      border-radius: 16px;
      padding: 32px;
      width: 100%;

      h3 {
        font-size: 2.4rem;
        font-weight: 400;
        padding-left: 16px;
        border-left: 3px solid #a2ef1b;
      }

      > p {
        color: #c4c4c4;
        font-size: 1.8rem;
        line-height: 140%;
        margin: 24px 0;
      }

      span {
        h4 {
          font-size: 3.2rem;
          font-weight: 400;
        }

        p {
          color: #c4c4c4;
          font-size: 1.6rem;
          margin-top: 16px;
          text-transform: uppercase;
        }
      }
    }

    .card-one {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 24px;

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    .card-two {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-top: -80px;

      @media (max-width: 992px) {
        margin-top: 0px;
      }

      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;

export const ValuesContainer = styled.footer`
  width: 100%;
  height: auto;
  padding: 150px 0px;
  background-color: #020013;

  @media (max-width: 992px) {
    padding: 80px 0;
  }

  .container-values {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 48px;
  }

  h3 {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 24px;
    font-weight: 500;
    text-transform: uppercase;
  }

  h2 {
    color: #fff;
    font-size: 4rem;
    font-weight: 600;
    max-width: 700px;
    margin-bottom: 80px;

    b {
      font-weight: 300;
    }

    @media (max-width: 992px) {
      font-size: 3.2rem;
      max-width: 100%;
    }
  }

  .container-values-text {
    width: 50%;

    @media (max-width: 992px) {
      width: 100%;
    }

    .szh-accordion__item--expanded {
      button {
        color: #a2ef1b;
      }

      .title {
        color: #a2ef1b;
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 32px;

      > div {
        width: 100%;
        background-color: #0f0f16;
        border-radius: 12px;
        border: 2px solid #1d1d26;

        &:hover {
          border: 2px solid #a2ef1b;
        }

        &:hover .value div {
          background-color: #2d2d2d;
        }

        .value {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          div {
            border: 1px solid #1d1d26;
            background-color: #1f1f1f;
            border-radius: 8px;
            padding: 12px;
          }
        }

        .szh-accordion__item-panel {
          font-size: 1.8rem;
          line-height: 160%;
          padding: 0 40px 40px 40px;
          color: #fff;
        }

        button {
          cursor: pointer;
          width: 100%;
          text-align: left;
          font-size: 2.4rem;
          background-color: #0f0f16;
          color: #fff;
          padding: 48px 40px;
          font-family: "Plus Jakarta Sans", sans-serif;
          border-radius: 12px;

          @media (max-width: 992px) {
            font-size: 2rem;
            padding: 32px;
          }
        }
      }
    }
  }

  .container-values-image {
    width: 50%;
    height: auto;
    border: 2px solid #1d1d26;
    border-radius: 12px;
    background-image: url("value-image.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 992px) {
      display: none;
    }

    img {
      border-radius: 12px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const JobsContainer = styled.section`
  background-image: url("bg-services.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

  width: 100%;
  height: auto;
  padding: 150px 0;
  background-color: #020013;

  @media (max-width: 992px) {
    padding: 80px 0;
  }

  .jobs-option {
    width: 60%;

    @media (max-width: 992px) {
      width: 100%;
    }

    > div h3 {
      color: #fff;
      font-size: 2rem;
      margin-bottom: 24px;
      font-weight: 600;
      text-transform: uppercase;
    }

    > div h2 {
      color: #fff;
      font-size: 4rem;
      font-weight: 600;
      max-width: 450px;
      margin-bottom: 48px;

      b {
        font-weight: 300;
      }

      @media (max-width: 992px) {
        max-width: 100%;
        font-size: 3.2rem;
      }
    }

    > div p {
      color: #c4c4c4;
      font-size: 2rem;
      margin: 48px 0;
      line-height: 160%;
      font-weight: 500;
    }
  }

  .card-container {
    width: 50%;

    @media (max-width: 992px) {
      width: 100%;
    }

    .mission {
      color: #c4c4c4;
      font-size: 1.8rem;
      margin: 48px 0;
      line-height: 160%;
      font-weight: 400;

      @media (max-width: 992px) {
        display: none;
      }
    }
  }

  .container-jobs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 88px;

    @media (max-width: 992px) {
      flex-wrap: wrap;
      gap: 0px;
    }
  }

  .button-group {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    gap: 24px;

    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
  }

  .button {
    cursor: pointer;
    background: transparent;
    color: #fff;
    font-size: 2.4rem;

    &:hover {
      color: #a2ef1b;
    }
  }

  .button.activeButton {
    color: #a2ef1b;
  }

  .progress-bar {
    margin-top: 32px;
    height: 3px;
    background-color: #4e4c5a;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 16px;
  }

  .progress {
    height: 100%;
    background-color: #a2ef1b;
    transition: width 0.1s linear;
  }

  .card {
    padding: 24px;
    display: flex;
    margin: 32px 0;
    align-items: center;
    background-color: #161616;
    border: 1px solid #a2ef1b;
  }

  .card-content {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .icon {
    width: 40px;
    height: 40px;
    margin-right: 8px;

    @media (max-width: 992px) {
      display: none;
    }
  }

  .title {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 8px;
  }

  .description {
    font-size: 1.8rem;
    color: #c4c4c4;
  }
`;

export const CasesContainer = styled.section`
  width: 100%;
  height: auto;
  padding: 150px 0px;
  background-color: #f3f2f3;

  @media (max-width: 992px) {
    padding: 80px 0px;
  }

  h3 {
    color: #2a2a2a;
    font-size: 2rem;
    margin-bottom: 24px;
    font-weight: 600;
    text-transform: uppercase;
  }

  h2 {
    color: #2a2a2a;
    font-size: 4rem;
    font-weight: 600;
    max-width: 750px;
    margin-bottom: 80px;

    b {
      font-weight: 300;
    }

    @media (max-width: 992px) {
      font-size: 3.2rem;
      max-width: 100%;
      margin-bottom: 40px;
    }
  }

  .container-cases-filter {
    display: flex;
    align-items: center;
    gap: 24px;

    @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 16px;
    }

    button {
      background-color: #fff;
      border: 1px solid #2a2a2a;
      padding: 8px 24px;
      border-radius: 32px;
      font-size: 1.8rem;
      cursor: pointer;
      text-transform: uppercase;
    }

    .bg-gray {
      background-color: #2a2a2a;
      color: #fff;
    }
  }

  .container-cases-cards {
    display: flex;
    flex-wrap: wrap;
    margin-top: 56px;
    gap: 32px;

    @media (max-width: 992px) {
      flex-wrap: wrap;
    }
  }

  .card-case {
    background-color: #0f0f16;
    border-radius: 16px;
    width: 30%;
    flex-grow: 1;
    height: auto;
    padding: 24px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 992px) {
      width: 47%;
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      margin-bottom: 24px;
      border-radius: 8px;
    }

    > div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h4 {
        margin-bottom: 16px;
        font-size: 2rem;
        font-weight: 500;
      }

      p {
        margin-bottom: 24px;
        font-size: 1.8rem;
        line-height: 150%;
        color: #c4c4c4;
      }

      button {
        background-color: #a2ef1b;
        color: #0f0f16;
        border-radius: 8px;
        width: 100%;
        height: auto;
        font-size: 1.8rem;
        font-weight: 600;
        padding: 12px 0px;
        cursor: pointer;
      }
    }
  }
`;

export const ServicesTwoContainer = styled.section`
  background-image: url("services-two.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: auto;
  background-color: #f3f2f3;
  margin-top: -300px;
  min-height: 800px;

  @media (max-width: 992px) {
    min-height: 500px;
    margin-top: -200px;
  }

  .container-services-two {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 992px) {
      margin-top: 64px;
    }

    h3 {
      color: #fff;
      font-size: 2rem;
      margin-bottom: 24px;
      margin-top: 48px;
      font-weight: 600;
      text-transform: uppercase;
      text-align: center;
    }

    h2 {
      color: #fff;
      font-size: 4rem;
      font-weight: 600;
      text-align: center;
      max-width: 700px;

      b {
        font-weight: 300;
      }

      @media (max-width: 992px) {
        max-width: 100%;
        font-size: 3.2rem;
      }
    }
  }
`;

export const Studio = styled.section`
  background-color: #020013;
  width: 100%;
  height: auto;
  padding: 220px 0px 140px 0px;
  position: relative;

  @media (max-width: 992px) {
    padding: 80px 0px;
  }

  > img {
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 992px) {
      flex-wrap: wrap;
    }
  }

  .container-studio-text {
    width: 45%;
    z-index: 2;

    @media (max-width: 992px) {
      width: 100%;
    }

    .container-studio-icon {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 24px;

      div {
        background-color: #141414;
        border-radius: 100%;
        border: 1px solid #1d1d1d;
        padding: 12px;
      }

      h4 {
        font-size: 2rem;
        font-weight: 400;
      }
    }

    h3 {
      text-transform: uppercase;
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 16px;
    }

    h2 {
      color: #fff;
      font-size: 4rem;
      font-weight: 600;

      b {
        font-weight: 300;
      }

      @media (max-width: 992px) {
        font-size: 3.2rem;
      }
    }

    p {
      color: #fff;
      font-size: 2rem;
      line-height: 160%;
      margin-top: 24px;
      margin-bottom: 48px;
    }
  }

  .container-studio-image {
    width: 50%;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    gap: 32px;

    @media (max-width: 992px) {
      display: none;
    }

    article {
      background-color: #0f0f16;
      width: 100%;

      img {
        border-radius: 16px;
        width: auto;
      }
    }

    .card-one {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-top: -80px;
    }

    .card-two {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }
`;

export const TechContainer = styled.section`
  background-image: url("bg-tech.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: auto;
  padding: 140px 0px;
  background-color: #020013;

  @media (max-width: 992px) {
    padding: 80px 0px;
  }

  .container-tech {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    position: relative;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 72px;

    .image {
      position: absolute;
      left: -84px;
      top: 10%;
    }

    h2 {
      font-size: 4rem;
      font-weight: 500;
      text-align: center;
      max-width: 850px;
      line-height: 120%;

      b {
        font-weight: 200;
      }

      @media (max-width: 992px) {
        font-size: 3.2rem;
      }
    }

    img {
      height: auto;
    }

    h3 {
      max-width: 850px;
      font-size: 3.2rem;
      font-weight: 500;
      text-align: center;
      line-height: 140%;

      @media (max-width: 992px) {
        max-width: 100%;
        font-size: 2.4rem;
      }
    }
  }
`;
