import styled from "styled-components";

export const AboutImage = styled.section`
  background-image: url("bg-about.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
  padding: 140px 0px;

  @media (max-width: 992px) {
    padding: 80px 0px;
  }

  .container-about {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    position: relative;

    @media (max-width: 992px) {
      flex-wrap: wrap;
    }

    .image {
      position: absolute;
      left: -84px;
      top: 10%;

      @media (max-width: 1212px) {
        display: none;
        background-color: red;
      }
    }
  }

  .container-about-text {
    width: 60%;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 992px) {
      width: 100%;
    }

    .opition {
      @media (max-width: 992px) {
        flex-wrap: wrap;
      }
    }

    div {
      display: flex;
      align-items: center;
      gap: 16px;

      h4 {
        color: #2a2a2a;
        font-size: 1.4rem;
        border-radius: 32px;
        border: 1px solid #2a2a2a;
        padding: 8px 24px;
        font-weight: 500;
        text-transform: uppercase;
      }
    }

    h3 {
      color: #2a2a2a;
      font-size: 2rem;
      margin-bottom: 24px;
      font-weight: 600;
      text-transform: uppercase;
    }

    h2 {
      color: #2a2a2a;
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
      color: #686868;
      font-size: 2rem;
      margin: 48px 0;
      line-height: 160%;
      font-weight: 500;
    }
  }

  .container-about-image {
    width: 35%;
    height: auto;

    @media (max-width: 992px) {
      margin-top: 32px;
      width: 100%;
    }

    video {
      height: 100%;
      width: 100%;
    }
  }
`;
