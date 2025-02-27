import styled from "styled-components";

export const HeroImage = styled.section`
  background-image: url("hero.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100vh;


  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h2 {
    font-size: 4rem;
    max-width: 900px;
    text-align: center;
    font-weight: 500;
    margin: 0 auto;

    b {
      font-weight: 100;
      color: #a7adbe;
    }
  }
`;
