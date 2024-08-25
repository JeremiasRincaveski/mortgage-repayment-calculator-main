import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({$flex}) => $flex ? '1 1 180px' : '1 1 100%'};
  gap: .5rem;
`;

export const InputLabel = styled.label`
  color: var(--color-button);
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  border-radius: var(--border-radius);
  overflow: hidden;
  border: 1px solid var(--border);
  cursor: pointer;
  display: flex;
  flex-direction: ${({$direction}) => $direction ? 'row-reverse' : 'row'};
  gap: 1rem;
  padding-left: ${({$direction}) => $direction ? '1rem' : 0};
  position: relative;
`;

export const InputHint = styled.span`
  background-color: var(--background-span);
  color: var(--color-span);
  font-weight: 500;
  height: 100%;
  padding: .5rem .7rem;
`;

export const InputField = styled.input`
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-weight: 700;
  outline: none;
  width: 100%;
`;