import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({$flex}) => $flex ? '1 1 150px' : '1 1 100%'};
  gap: .5rem;
`;

export const InputLabel = styled.label`
  color: var(--color-button);
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  border-radius: var(--border-radius);
  border: 1px solid var(--border);
  cursor: pointer;
  display: flex;
  flex-direction: ${({$direction}) => $direction ? 'row-reverse' : 'row'};
  gap: 1rem;
  overflow: hidden;
  padding-left: ${({$direction}) => $direction ? '1rem' : 0};
  position: relative;

  &:has(input:focus) {
    border-color: hsl(61, 70%, 52%);
  }

  &:has(input:focus) {
    span {
      background: hsl(61, 70%, 52%);
      color: hsl(202, 55%, 16%);
    }
  }
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

export const InputError = styled.span`
  bottom: -1.3rem;
  color: hsl(4, 69%, 50%);
  font-weight: 500;
  font-size: 0.9rem;
`;