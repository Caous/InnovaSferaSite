import styled from "styled-components";

export const HeroImage = styled.section`
  background-image: url("hero.png");
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
    margin-top: 32px;
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
      padding: 8px 24px 8px 8px;

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
  }

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
