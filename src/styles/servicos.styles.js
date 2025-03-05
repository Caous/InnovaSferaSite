import styled from "styled-components";

export const ServicosContainer = styled.section`
  background-image: url("servicos.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 200px;

  @media (max-width: 992px) {
    padding-bottom: 80px;
  }

  .header {
    width: 100%;
  }

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 32px;
    margin-bottom: 13%;

    @media (max-width: 992px) {
      justify-content: center;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 24px;
      background-color: #00020f;
      border: 1px solid #242d6b;
      border-radius: 100px;
      padding: 8px 24px;

      @media (max-width: 992px) {
        display: none;
      }

      a {
        color: #a7adbe;
        font-weight: 500;

        &:hover {
          color: #fff;
        }

        .active {
          background-color: #131839;
          border: 1px solid #202860;
          padding: 12px 16px;
          border-radius: 24px;
          color: #fff;

          &:hover {
            background-color: #242d6b;
          }
        }
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
  }

  article {
    .container-contact h2 {
      color: #fff;
      font-size: 4rem;
      font-weight: 600;
      text-align: center;
      max-width: 750px;
      margin: 0 auto;

      b {
        font-weight: 300;
      }

      @media (max-width: 992px) {
        font-size: 3.2rem;
      }
    }

    .container-contact p {
      margin: 16px auto;
      text-align: center;
      color: #dddddd;
      font-size: 2rem;
      max-width: 750px;
      line-height: 160%;
      font-weight: 500;
    }

    .small-cards-services {
      display: flex;
      margin-top: 140px;
      gap: 64px;

      @media (max-width: 992px) {
        flex-wrap: wrap;
        flex-direction: column-reverse;
      }

      .cards {
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        gap: 24px;

        @media (max-width: 992px) {
          width: 100%;
        }

        > div:nth-child(1) {
          background-color: #ffffff;

          h3,
          h4,
          p {
            color: #0f0f16;
          }
        }

        > div {
          width: 45%;
          flex-grow: 1;
          background-color: #0f0f16;
          border-radius: 12px;
          border: 2px solid #1d1d26;
          padding: 32px 24px;
          text-align: center;

          @media (max-width: 992px) {
            width: 45%;
          }

          @media (max-width: 768px) {
            width: 100%;
          }

          h3 {
            font-size: 3.2rem;
            font-weight: 500;
          }

          h4 {
            font-size: 1.8rem;
            margin: 16px;
            font-weight: 500;
          }

          p {
            font-size: 1.6rem;
            line-height: 150%;
          }
        }
      }
    }

    .small-title-services {
      width: 40%;
      flex-grow: 1;

      @media (max-width: 992px) {
        width: 100%;
      }

      h3 {
        color: #fff;
        font-size: 2rem;
        margin-bottom: 24px;
        font-weight: 600;
        text-transform: uppercase;
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
    }
  }
`;

export const ServicesExplore = styled.section`
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 992px) {
      flex-wrap: wrap;
      padding: 80px 24px;
    }
  }

  .container-studio-text {
    width: 45%;
    z-index: 2;

    @media (max-width: 992px) {
      width: 100%;
    }

    h3 {
      text-transform: uppercase;
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 16px;
      color: #0f0f16;
    }

    h2 {
      color: #0f0f16;
      font-size: 4rem;
      font-weight: 600;

      b {
        font-weight: 300;
      }

      @media (max-width: 992px) {
        font-size: 3.2rem;
      }
    }

    button {
      background-color: #a2ef1b;
      border-radius: 12px;
      color: #0f0f0f;
      text-transform: uppercase;
      font-size: 1.8rem;
      padding: 24px 40px;
      font-weight: 600;
      margin-top: 40px;
    }
  }

  .container-studio-image {
    width: 50%;
    z-index: 2;
    display: flex;
    justify-content: end;
    gap: 32px;

    @media (max-width: 992px) {
      display: none;
    }

    article {
      width: 100%;

      img {
        border-radius: 16px;
        width: 100%;
        object-fit: cover;
      }
    }

    .card-one {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-top: -80px;
    }

    .card-two {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-bottom: -80px;
    }
  }
`;

export const ServicesTwo = styled.section`
  width: 100%;
  height: auto;
  padding: 150px 0px;
  background-color: #020013;

  @media (max-width: 992px) {
    padding: 80px 0px;
  }

  h3 {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 24px;
    font-weight: 600;
    text-transform: uppercase;
  }

  h2 {
    color: #fff;
    font-size: 4rem;
    font-weight: 600;
    max-width: 750px;

    b {
      font-weight: 300;
    }

    @media (max-width: 992px) {
      font-size: 3.2rem;
      max-width: 100%;
    }
  }

  .card-small {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;

    @media (max-width: 992px) {
      flex-wrap: wrap;
    }

    article {
      width: 100%;
      height: auto;
      background-color: #fff;
      border-radius: 12px;
      padding: 32px;

      display: flex;
      flex-direction: column;

      @media (max-width: 992px) {
        padding: 24px;
      }

      span {
        width: 100%;

        h4 {
          font-size: 3.2rem;
          font-weight: 500;
          color: #020013;
        }

        p {
          margin-top: 24px;
          font-size: 2rem;
          color: #020013;
          line-height: 160%;
        }
      }

      div {
        height: 250px;
        width: 100%;
        margin-top: 32px;

        @media (max-width: 992px) {
          width: 100%;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0px 12px 12px 0px;
        }
      }
    }
  }

  .card-big {
    width: 100%;
    height: 400px;
    background-color: #fff;
    border-radius: 12px;
    margin: 72px 0px 32px 0px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 992px) {
      flex-wrap: wrap;
      height: auto;
    }

    span {
      padding: 80px 32px;
      width: 50%;

      @media (max-width: 992px) {
        width: 100%;
        padding: 24px;
      }

      h4 {
        font-size: 3.2rem;
        font-weight: 500;
        color: #020013;
      }

      p {
        margin-top: 24px;
        font-size: 2rem;
        color: #020013;
        line-height: 160%;
      }
    }

    div {
      height: 100%;
      width: 50%;

      @media (max-width: 992px) {
        width: 100%;
        height: 300px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0px 12px 12px 0px;

        @media (max-width: 992px) {
          border-radius: 0px 0px 12px 12px;
        }
      }
    }
  }
`;

export const ServicesFour = styled.section`
  width: 100%;
  height: auto;
  padding: 150px 0px;
  background-color: #fff;

  @media (max-width: 992px) {
    padding: 80px 0;
  }

  h3 {
    color: #020013;
    font-size: 2rem;
    margin-bottom: 24px;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
  }

  h2 {
    color: #020013;
    font-size: 4rem;
    font-weight: 600;
    max-width: 750px;
    margin: 0 auto;
    text-align: center;

    b {
      font-weight: 300;
    }

    @media (max-width: 992px) {
      font-size: 3.2rem;
      max-width: 100%;
    }
  }

  .container-cases-filter {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin: 72px 0;

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
    align-items: stretch;
    justify-content: space-between;
    gap: 64px 32px;
    flex-wrap: wrap;

    > div {
      width: 45%;
      flex-grow: 1;
      height: auto;

      @media (max-width: 992px) {
        width: 100%;
      }

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 8px;
      }

      > div {
        width: 80%;
        position: relative;
        z-index: 99;
        margin: -50px auto 0 auto;
        padding: 32px;
        background-color: #fff;
        border: 1px solid #e1e4ed;
        border-radius: 8px;
        box-shadow: 10px 10px 10px -6px rgba(0, 0, 0, 0.1);

        @media (max-width: 992px) {
          width: 90%;
        }

        h4 {
          color: #020013;
          font-size: 2.4rem;
          font-weight: 500;
        }

        p {
          margin-top: 24px;
          color: #020013;
          font-size: 1.8rem;
          line-height: 150%;
        }
      }
    }
  }
`;
