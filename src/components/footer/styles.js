import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: auto;
  padding: 72px 0px;
  background-color: #020013;

  p {
    font-size: 4rem;
    color: #fff;
  }

  .container-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p, a {
      font-size: 1.8rem;
      color: #c4c4c4;
      margin: 20px 0;
      display: block;
    }

    .navigation-footer {
      display: flex;
      gap: 72px;

      span {
        h3 {
          font-size: 2rem;
          font-weight: 500;
          margin-bottom: 16px;
        }
      }
    }
  }
`;
