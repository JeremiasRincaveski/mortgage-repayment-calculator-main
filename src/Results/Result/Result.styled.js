import styled from "styled-components";
import { ResultDefaultDescription, ResultDefaultTitle } from "../ResultDefault/ResultDefault.styled";

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ResultTitle = styled(ResultDefaultTitle)`
  font-weight: 700;
`;

export const ResultDescription = styled(ResultDefaultDescription)`
  text-align: start;
  font-size: .9rem;
`;

export const ResultWrapper = styled.div`
  background: hsl(202, 56%, 12%);
  border-radius: var(--border-radius);
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 4px solid var(--border-color);
  
  & div:first-child {
    border-bottom: 1px solid hsla(200, 24%, 40%, .6);
  }
`;

export const ResultWrapperContainer = styled.div`
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ResultMonthly = styled.p`
  color: var(--color-month);
  font-size: 1.7rem;
  font-weight: 700;
  
  &::before {
    content: '£';
  }
  `;

export const ResultTerm = styled.p`
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--color-term);

  &::before {
    content: '£';
  }
`;