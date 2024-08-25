import styled from "styled-components";

export const CalculatorContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CalculatorHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: .3rem;
`;

export const CalculatorTitile = styled.h1`
  font-size: 24px;
  flex-basis: 310px;
`;

export const CalculatorClearButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  text-decoration: underline;
  color: var(--color-button);
  font-weight: 500;
  font-size: 1rem;
  font-family: inherit;
`;

export const CalculatorBody = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CalculatorBodyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
`;

export const CalculatorCalculate = styled.button`
  background-color: var(--background-button);
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 1rem 3rem;
  border-radius: var(--border-radius-button);
  font-family: inherit;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  width: 327px;
`;