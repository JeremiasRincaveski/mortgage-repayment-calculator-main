import styled from "styled-components";
import { InputLabel } from "./Input.styled";

export const RadioContainer = styled.div`
  cursor: default;
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

export const RadioLabel = styled(InputLabel).attrs({ as: 'p'})``;

export const RadioWrapper = styled.label`
  align-items: center;
  border-radius: var(--border-radius);
  border: 1px solid var(--border);
  cursor: pointer;
  display: flex;
  font-weight: 700;
  gap: .5rem;
  height: 1ch;
  justify-content: flex-start;
  padding: 1.4rem 1rem;

  &:has(input:checked) {
    background: hsla(61, 70%, 52%, .3);
    border-color: hsl(61, 70%, 52%);
  }

  > input {
    height: 0;
    opacity: 0;
    position: absolute;
    width: 0;
  
    &:checked + span {
      background: radial-gradient(circle, hsl(61, 70%, 52%) 45%, transparent 50%);
      border: 2px solid hsl(61, 70%, 52%);
    }
  }

  > span {
    background-color: transparent;
    border-radius: 100%;
    border: 1px solid var(--border);
    height: 16px;
    margin-top: 2px;
    width: 16px;
  }
`;