import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  :root {
    --background-button: hsl(61, 70%, 52%);
    --border-color: hsl(61, 70%, 52%);
    --color-month: hsl(61, 70%, 52%);
    --color-term: hsl(202, 86%, 94%);
    --background-span: hsl(202, 86%, 94%);
    --border-radius-button: 2rem;
    --border-radius: 5px;
    --border: hsl(200, 24%, 40%);
    --color-button: hsl(200, 24%, 40%);
    --color-span: hsl(200, 24%, 40%);
    --background-result: hsl(202, 55%, 16%);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root {
    font-family: "Plus Jakarta Sans", sans-serif;
    width: 100vw;
    background-color: hsl(202, 86%, 94%);
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (min-width: 840px) {
      height: 100vh;
    }
  }
`;

export default GlobalStyled;