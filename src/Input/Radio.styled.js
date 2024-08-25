import styled from "styled-components";
import { InputLabel } from "./Input.styled";

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  cursor: default;
`;

export const RadioLabel = styled(InputLabel).attrs({ as: 'p'})``;

export const RadioWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  padding: 1.4rem 1rem;
  gap: .5rem;
  font-weight: 700;
  height: 1ch;
  cursor: pointer;

  > input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  
    &:checked + span {
      background: radial-gradient(circle, hsl(61, 70%, 52%) 45%, transparent 50%);
      border: 2px solid hsl(61, 70%, 52%);
    }
  }

  > span {
    margin-top: 2px;
    width: 16px;
    height: 16px;
    background-color: transparent;
    border: 1px solid var(--border);
    border-radius: 100%;
  }


`;