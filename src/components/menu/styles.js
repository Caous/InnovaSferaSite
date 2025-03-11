import styled from "styled-components";

export const MenuIcon = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background-color: #fff;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Nav = styled.nav`
  background-color: #00020f;
  border: 1px solid #242d6b;
  border-radius: 100px;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  gap: 24px;
  z-index: 999;

  @media (max-width: 768px) {
    position: absolute;
    top: 16%;
    left: 0;
    border-radius: 16px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 48px 0;

    display: ${({ $isopen }) => ($isopen ? "flex" : "none")};
    a {
      font-size: 2.4rem;
    }
  }
`;

export const MenuNav = styled.section`
  width: 100%;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 32px;
    margin-bottom: 8%;

    nav {
      a {
        color: #a7adbe;
        font-weight: 500;
        padding: 12px 16px;

        &:hover {
          color: #fff;
        }
      }
    }
  }

  .contato {
    background-color: #a2ef1b;
    color: #00020f;
    padding: 14px 20px;
    border-radius: 32px;
    font-size: 1.6rem;
    font-weight: 500;

    @media (max-width: 992px) {
      display: none;
    }

    &:hover {
      background-color: #92d222;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

