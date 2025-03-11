import styled from "styled-components";

export const HeroContato = styled.section`
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

  .contato {
    background-color: #a2ef1b;
    color: #00020f;
    padding: 14px 20px;
    border-radius: 32px;
    font-size: 1.6rem;
    font-weight: 500;

    @media (max-width: 992px) {
      display: none;
    }

    &:hover {
      background-color: #92d222;
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
    justify-content: space-between;
    gap: 120px;
    width: 100%;

    @media (max-width: 1216px) {
      gap: 32px;
      flex-wrap: wrap;
    }

    .container-contact {
      width: 50%;

      @media (max-width: 1216px) {
        width: 100%;
      }
    }

    .container-form {
      width: 50%;
      background-color: #fff;
      padding: 50px;
      border-radius: 12px;

      @media (max-width: 1216px) {
        width: 100%;
        padding: 32px 16px;
      }
    }

    div form {
      display: flex;
      flex-direction: column;
      gap: 20px;

      textarea {
        background-color: #f4f3ff;
        border: 1px solid #d0d6ff;
        border-radius: 10px;
        padding: 24px;
        color: #00020f;
        font-size: 1.8rem;
        font-family: "Plus Jakarta Sans";
        font-weight: 500;
        min-height: 200px;
      }

      input {
        background-color: #f4f3ff;
        border: 1px solid #d0d6ff;
        border-radius: 10px;
        height: 50px;
        padding-left: 24px;
        color: #00020f;
        font-size: 1.8rem;
        font-weight: 500;
      }

      input[type="submit"] {
        background-color: #a2ef1b;
        border-radius: 32px;
        color: #00020f;
        padding: 14px 0;
        text-align: center;
        border: none;
        font-weight: 600;
        font-size: 2rem;
        height: auto;

        &:hover {
          cursor: pointer;
          background-color: rgb(145, 216, 22);
        }
      }
    }

    h1 {
      font-size: 4.8rem;
      font-weight: 500;

      @media (max-width: 768px) {
        font-size: 4rem;
      }
    }

    .description {
      font-size: 2rem;
      max-width: 620px;
      color: #fff;
      margin: 32px 0 48px 0;

      line-height: 150%;

      @media (max-width: 1216px) {
        max-width: 100%;
      }

      @media (max-width: 768px) {
        font-size: 1.8rem;
      }
    }

    span {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 24px;

      p {
        font-size: 2rem;
        color: #fff;
      }
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
`;

export const AboutContato = styled.section`
  width: 100%;
  height: auto;
  padding: 150px 0px;
  background-color: #020013;

  @media (max-width: 992px) {
    padding: 80px 0;
  }

  div > div h3 {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 24px;
    font-weight: 500;
    text-transform: uppercase;
  }

  div > div h2 {
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

  article {
    background-color: #fff;
    border-radius: 12px;
    height: 450px;
    display: flex;
    align-items: end;

    @media (max-width: 1216px) {
      height: auto;
      flex-wrap: wrap;
      flex-direction: column-reverse;
    }

    h4 {
      color: #020013;
      font-size: 3.2rem;

      @media (max-width: 1216px) {
        font-size: 2.4rem;
      }
    }

    p {
      color: #020013;
      font-size: 2rem;
      line-height: 160%;
      margin: 32px 0px;

      @media (max-width: 1216px) {
        font-size: 1.8rem;
        margin: 0;
      }
    }

    .card-text {
      width: 60%;
      padding: 32px 48px;

      @media (max-width: 1216px) {
        width: 100%;
        padding: 32px;
      }
    }

    .card-image {
      width: 35%;
      height: 600px;
      background-color: #ebebeb;
      border-radius: 8px 8px 0px 0px;

      @media (max-width: 1216px) {
        width: 100%;
        height: auto;
      }

      img {
        border-radius: 8px 8px 0px 0px;
        width: 100%;
        height: 100%;
        object-fit: cover;
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
    padding: 80px 0px;
  }

  .container-values {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 48px;

    @media (max-width: 992px) {
      flex-wrap: wrap;
      gap: 24px;
    }
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

  .container-faq {
    width: 100%;

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

          @media (max-width: 992px) {
            font-size: 1.6rem;
            padding: 0 16px 16px 16px;
          }
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
            padding: 16px;
          }
        }
      }
    }
  }
`;
