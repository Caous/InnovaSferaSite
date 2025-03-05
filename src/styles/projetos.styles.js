import styled from "styled-components";

export const ProjetosContainer = styled.section`
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

  h2 {
    color: #fff;
    font-size: 4rem;
    font-weight: 600;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;

    b {
      font-weight: 300;
    }

    @media (max-width: 992px) {
      font-size: 3.2rem;
    }
  }

  .description {
    color: #dddddd;
    font-size: 2rem;
    margin: 24px auto;
    line-height: 160%;
    font-weight: 500;
    text-align: center;
    max-width: 900px;
  }

  .card-big {
    width: 100%;
    height: 550px;
    border-radius: 12px;
    margin: 140px 0px 32px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;

    @media (max-width: 992px) {
      flex-wrap: wrap;
      height: auto;
    }

    > span {
      padding: 80px 32px;
      width: 50%;
      height: 100%;
      background-color: #0f0f16;
      border-radius: 16px;
      border: 2px solid #1d1d26;

      @media (max-width: 992px) {
        width: 100%;
        padding: 24px;
      }

      h4 {
        font-size: 3.2rem;
        font-weight: 500;
        color: #fff;
      }

      > span {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background-color: #1f1f1f;
        border-radius: 30px;
        padding: 10px 16px;

        margin-top: 24px;

        strong {
          color: #a2ef1b;
          font-size: 1.6rem;
        }

        h5 {
          color: #b3b3b2;
          font-size: 1.6rem;
          font-weight: 500;
        }

        p {
          color: #fff;
          font-size: 1.6rem;
        }
      }

      > p {
        margin-top: 24px;
        font-size: 2rem;
        color: #b3b3b2;
        line-height: 160%;
        text-align: left;
      }

      button {
        background-color: #a2ef1b;
        border-radius: 12px;
        color: #0f0f0f;
        text-transform: uppercase;
        font-size: 1.8rem;
        padding: 16px 40px;
        font-weight: 600;
        margin-top: 40px;

        @media (max-width: 992px) {
          width: 100%;
        }
      }
    }

    > div {
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
        border-radius: 16px;
      }
    }
  }

  .container-card-small {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;

    @media (max-width: 992px) {
      flex-wrap: wrap;
    }

    .card-small {
      width: 50%;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      gap: 24px;
      background-color: #0f0f16;
      border-radius: 16px;
      border: 2px solid #1d1d26;
      padding: 32px;

      @media (max-width: 992px) {
        flex-wrap: wrap;
        height: auto;
        width: 100%;
        padding: 24px;
      }

      > span {
        width: 100%;
        height: 100%;

        @media (max-width: 992px) {
          width: 100%;
        }

        h4 {
          font-size: 3.2rem;
          font-weight: 500;
          color: #fff;
        }

        > span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #1f1f1f;
          border-radius: 30px;
          padding: 10px 16px;

          margin-top: 24px;

          strong {
            color: #a2ef1b;
            font-size: 1.6rem;
          }

          h5 {
            color: #b3b3b2;
            font-size: 1.6rem;
            font-weight: 500;
          }

          p {
            color: #fff;
            font-size: 1.6rem;
          }
        }

        > p {
          margin-top: 24px;
          font-size: 2rem;
          color: #b3b3b2;
          line-height: 160%;
          text-align: left;
        }

        button {
          background-color: #a2ef1b;
          border-radius: 12px;
          color: #0f0f0f;
          text-transform: uppercase;
          font-size: 1.8rem;
          padding: 16px 40px;
          font-weight: 600;
          margin-top: 40px;

          @media (max-width: 992px) {
            width: 100%;
          }
        }
      }

      > div {
        height: 300px;
        width: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px;
        }
      }
    }
  }
`;

export const SectionInnova = styled.section`
  background-image: url("services-two-2.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: auto;
  background-color: #f3f2f3;
  padding: 140px 0;

  @media (max-width: 992px) {
    padding: 80px 0;
  }

  .container-services-two {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 992px) {
      padding: 24px;
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

export const SectionProjectFilter = styled.section`
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
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 56px;
    gap: 24px;

    @media (max-width: 992px) {
      flex-wrap: wrap;
    }
  }

  .card-case {
    padding: 48px 32px;
    width: 45%;
    flex-grow: 1;
    height: 100%;
    background-color: #0f0f16;
    border-radius: 16px;
    border: 2px solid #1d1d26;

    @media (max-width: 992px) {
      width: 100%;
      padding: 24px;
    }

    h4 {
      font-size: 3.2rem;
      font-weight: 500;
      color: #fff;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 24px;

      @media (max-width: 992px) {
        flex-wrap: wrap;
        gap: 8px;
      }

      span {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background-color: #1f1f1f;
        border-radius: 30px;
        padding: 10px 16px;
        margin-top: 24px;

        strong {
          color: #a2ef1b;
          font-size: 1.6rem;
        }

        h5 {
          color: #b3b3b2;
          font-size: 1.6rem;
          font-weight: 500;
        }

        p {
          color: #fff;
          font-size: 1.6rem;
        }
      }
    }

    h6 {
      margin-top: 32px;
      font-size: 2rem;
      font-weight: 500;
    }

    > p {
      margin-top: 24px;
      font-size: 2rem;
      color: #b3b3b2;
      line-height: 160%;
      text-align: left;
    }

    button {
      background-color: #a2ef1b;
      border-radius: 12px;
      color: #0f0f0f;
      text-transform: uppercase;
      font-size: 1.8rem;
      padding: 16px 40px;
      font-weight: 600;
      margin-top: 40px;
      width: 100%;
    }
  }
`;
