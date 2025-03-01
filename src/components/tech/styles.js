import styled from "styled-components";

export const TechContainer = styled.section`
  background-image: url("bg-tech.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: auto;
  padding: 140px 0px;
  background-color: #020013;

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
    }
  }
`;
