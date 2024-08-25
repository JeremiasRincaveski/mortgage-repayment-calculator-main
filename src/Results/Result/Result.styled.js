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