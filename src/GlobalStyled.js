import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  :root {
    --background-span: hsl(202, 86%, 94%);
    --border-radius: 5px;
    --border: hsl(200, 24%, 40%);
    --color-span: hsl(200, 24%, 40%);
    --color-button: hsl(200, 24%, 40%);
    --background-button: hsl(61, 70%, 52%);
    --border-radius-button: 2rem;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root {
    font-family: "Plus Jakarta Sans", sans-serif;
    height: 100vh;
    width: 100vw;
  }
`;

export default GlobalStyled;