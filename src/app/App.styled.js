import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  max-width: 950px;
  
  @media (min-width: 840px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    overflow: hidden;
  }
`;