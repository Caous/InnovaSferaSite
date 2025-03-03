import styled from "styled-components";

export const JobsContainer = styled.section`
  background-image: url("bg-services.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

  width: 100%;
  height: auto;
  padding: 150px 0;
  background-color: #020013;

  @media (max-width: 992px) {
    padding: 80px 0;
  }

  .jobs-option {
    width: 60%;

    @media (max-width: 992px) {
      width: 100%;
    }

    > div h3 {
      color: #fff;
      font-size: 2rem;
      margin-bottom: 24px;
      font-weight: 600;
      text-transform: uppercase;
    }

    > div h2 {
      color: #fff;
      font-size: 4rem;
      font-weight: 600;
      max-width: 450px;
      margin-bottom: 48px;

      b {
        font-weight: 300;
      }

      @media (max-width: 992px) {
        max-width: 100%;
        font-size: 3.2rem;
      }
    }

    > div p {
      color: #c4c4c4;
      font-size: 2rem;
      margin: 48px 0;
      line-height: 160%;
      font-weight: 500;
    }
  }

  .card-container {
    width: 50%;

    @media (max-width: 992px) {
      width: 100%;
    }

    .mission {
      color: #c4c4c4;
      font-size: 1.8rem;
      margin: 48px 0;
      line-height: 160%;
      font-weight: 400;
    }
  }

  .container-jobs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 88px;

    @media (max-width: 992px) {
      flex-wrap: wrap;
      gap: 0px;
    }
  }

  .button-group {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    gap: 24px;

    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
  }

  .button {
    cursor: pointer;
    background: transparent;
    color: #fff;
    font-size: 2.4rem;

    &:hover {
      color: #a2ef1b;
    }
  }

  .button.active {
    color: #a2ef1b;
  }

  .progress-bar {
    margin-top: 32px;
    height: 3px;
    background-color: #4e4c5a;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 16px;
  }

  .progress {
    height: 100%;
    background-color: #a2ef1b;
    transition: width 0.1s linear;
  }

  .card {
    padding: 24px;
    display: flex;
    margin: 32px 0;
    align-items: center;
    background-color: #161616;
    border: 1px solid #a2ef1b;
  }

  .card-content {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .icon {
    width: 40px;
    height: 40px;
    margin-right: 8px;
  }

  .title {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 8px;
  }

  .description {
    font-size: 1.8rem;
    color: #c4c4c4;
  }
`;
