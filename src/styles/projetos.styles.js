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
    margin: 48px 0;
    line-height: 160%;
    font-weight: 500;
  }
`;
