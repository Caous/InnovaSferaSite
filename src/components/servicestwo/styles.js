import styled from "styled-components";

export const ServicesTwoContainer = styled.section`
  background-image: url("services-two.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: auto;
  background-color: #f3f2f3;
  margin-top: -300px;
  min-height: 800px;

  .container-services-two {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

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
    }
  }
`;
