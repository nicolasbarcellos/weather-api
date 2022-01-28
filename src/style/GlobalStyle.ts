import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg: #100E1D;
    --sidebarBg: #1E213A;
    --gray: #a09fb1;
    --gray-200: #e7e7eb;
    --gray-400: #585676;
    --gray-500: #616475;
    --gray-600: #6e707a;
    --gray-800: #110e3c;
    --yellow: #ffec65;
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: normal 1.6rem 'Raleway', sans-serif;
    color: var(--gray-200);
  }

  body {
    min-height: 100vh;
    width: 100%;
    background: var(--bg);
  }

  body, html {
    overflow-x: hidden
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: var(--gray);
    border-radius: 10px;

  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: var(--bg)
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none
  }

  img {
    display: block;
    max-width: 100%;
    height: 100%;
  }

  html {
    font-size: 62.50%;
  }

  button {
    cursor: pointer;
  }
`;
