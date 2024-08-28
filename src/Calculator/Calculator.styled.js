import styled from "styled-components";

export const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  flex: 1;
`;

export const CalculatorHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .3rem;
  justify-content: space-between;
`;

export const CalculatorTitile = styled.h1`
  flex-basis: 310px;
  font-size: 24px;
`;

export const CalculatorClearButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--color-button);
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: underline;
`;

export const CalculatorBody = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CalculatorBodyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`;

export const CalculatorCalculate = styled.button`
  align-items: center;
  background-color: var(--background-button);
  border-radius: var(--border-radius-button);
  border: none;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: 1.1rem;
  font-weight: 700;
  gap: .5rem;
  justify-content: center;
  padding: 1rem 3rem;
  width: 327px;
`;