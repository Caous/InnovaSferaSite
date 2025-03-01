import styled from "styled-components";

export const CasesContainer = styled.section`
  width: 100%;
  height: auto;
  padding: 150px 0px;
  background-color: #f3f2f3;

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
    max-width: 750px;
    margin-bottom: 80px;

    b {
      font-weight: 300;
    }
  }

  .container-cases-filter {
    display: flex;
    align-items: center;
    gap: 32px;

    button {
      background-color: #fff;
      border: 1px solid #2a2a2a;
      padding: 8px 24px;
      border-radius: 32px;
      font-size: 2rem;
      cursor: pointer;
      text-transform: uppercase;
    }

    .bg-gray {
      background-color: #2a2a2a;
      color: #fff;
    }
  }

  .container-cases-cards {
    display: flex;
    flex-wrap: wrap;
    margin-top: 56px;
    gap: 32px;
  }

  .card-case {
    background-color: #0f0f16;
    border-radius: 16px;
    width: 30%;
    flex-grow: 1;
    height: auto;
    padding: 24px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      margin-bottom: 24px;
      border-radius: 8px;
    }

    > div {
      width: 100%;

      h4 {
        margin-bottom: 16px;
        font-size: 2rem;
        font-weight: 500;
      }

      p {
        margin-bottom: 24px;
        font-size: 1.8rem;
        line-height: 150%;
        color: #c4c4c4;
      }

      button {
        background-color: #a2ef1b;
        color: #0f0f16;
        border-radius: 8px;
        width: 100%;
        height: auto;
        font-size: 1.8rem;
        font-weight: 600;
        padding: 12px 0px;
        cursor: pointer;
      }
    }
  }
`;
