import styled from "styled-components";

export const Studio = styled.section`
  background-color: #020013;
  width: 100%;
  height: auto;
  padding: 220px 0px 140px 0px;
  position: relative;

  > img {
    height: auto; 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .container-studio-text {
    width: 45%;
    z-index: 2;

    .container-studio-icon {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 24px;

      div {
        background-color: #141414;
        border-radius: 100%;
        border: 1px solid #1d1d1d;
        padding: 12px;
      }

      h4 {
        font-size: 2rem;
        font-weight: 400;
      }
    }

    h3 {
      text-transform: uppercase;
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 16px;
    }

    h2 {
      color: #fff;
      font-size: 4rem;
      font-weight: 600;

      b {
        font-weight: 300;
      }
    }

    p {
      color: #fff;
      font-size: 2rem;
      line-height: 160%;
      margin-top: 24px;
      margin-bottom: 48px;
    }
  }

  .container-studio-image {
    width: 50%;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    gap: 32px;

    article {
      background-color: #0f0f16;
      width: 100%;

      img {
        border-radius: 16px;
        width: auto;
       
      }
    }

    .card-one {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-top: -80px;
    }

    .card-two {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }
`;
