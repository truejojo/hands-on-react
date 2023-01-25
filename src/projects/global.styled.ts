import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --clr-primary: steelblue;
    --clr-secondary-I: tomato;
    --clr-secondary-II: goldenrod;

    --clr-accend-I: pink;

    --clr-neutral-100: #fff;
    --clr-neutral-200: #f5f5f5;
    --clr-neutral-600: #bbb;
    --clr-neutral-700: #777;
    --clr-neutral-800: #222;

    --spacer-1r: 1rem;
    --spacer-3r: 3rem;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  body {
    line-height: 1.5;
    font-family: sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
  }

  img,
  picture {
    width: 100%;
    /* max-width: 100%; */
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;

export default GlobalStyle;
