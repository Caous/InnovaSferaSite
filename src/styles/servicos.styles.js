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
`;