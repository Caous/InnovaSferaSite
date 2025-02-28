import styled from "styled-components";

export const ValuesContainer = styled.footer`
  width: 100%;
  height: auto;
  padding: 150px 0px;
  background-color: #020013;

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
  }

  .container-values-text {
    width: 50%;

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

        .teste {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
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

    img {
      border-radius: 12px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
