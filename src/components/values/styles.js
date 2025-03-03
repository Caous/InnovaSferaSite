import styled from "styled-components";

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
