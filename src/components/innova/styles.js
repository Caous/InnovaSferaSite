import styled from "styled-components";

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
