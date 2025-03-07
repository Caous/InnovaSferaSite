"use client";

import { createGlobalStyle } from "styled-components";

// Fix: Criar theme
export const theme = {
  main: "#BF4F74",
  secondary: "#00ff00",

  devices: {
    containerXL: "1216px",
    containerL: "1140px",
    containerM: "688px",
    containerS: "540px",
  },
};

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 20px;
    background: #0F0F0F; 
  }

  ::-webkit-scrollbar-thumb {
    background: #ABABAB; 
  }

  ul,
  ol,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    font-size: 1.8rem;
  }

  img,
  svg {
    max-width: 100%;
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    color: #fff;
  }

  button,
  input {
    border: 0;
    font-family: "Plus Jakarta Sans";
    
    &:focus {
      border: 0;
    }
  }

  body {
    overflow-x: hidden;
    overflow-y: scroll;
    
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  .header {
    width: 100%;
  }

  .active {
    background-color: #131839;
    border: 1px solid #202860;
    padding: 12px 16px;
    border-radius: 24px;
    color: #fff;

    &:hover {
      background-color: #242d6b;
    }
  }
`;
