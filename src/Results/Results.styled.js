import styled from "styled-components";

export const ResultsContainer = styled.div`
  background: var(--background-result);
  padding: 2rem;
  align-self: stretch;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 840px) {
    border-radius: 0 0 0 6rem;
  }
`;