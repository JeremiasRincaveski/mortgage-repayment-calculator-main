import useCalculator from "../hooks/useCalculator";
import Input from "../Input/Input";
import Radio from "../Input/Radio";
import { CalculatorBody, CalculatorBodyWrapper, CalculatorCalculate, CalculatorClearButton, CalculatorContainer, CalculatorHeader, CalculatorTitile } from "./Calculator.styled";

const Calculator = () => {
  const { 
    amount, handleAmount,
    term,   handleTerm,
    rate,   handleRate,
    calculate, clearAll,
  } = useCalculator();

  return ( 
    <CalculatorContainer>
      <CalculatorHeader>
        <CalculatorTitile>Mortgage Calculator</CalculatorTitile>

        <CalculatorClearButton onClick={() => clearAll()}>Clear All</CalculatorClearButton>
      </CalculatorHeader>

      <CalculatorBody noValidate>
        <CalculatorBodyWrapper>
          <Input 
            changeValue={handleAmount}
            hint={'£'}
            id={'amount'}
            label={'Mortgage Amount'} 
            value={amount}
          />
          <Input 
            changeValue={handleTerm}
            hint={'years'}
            id={'term'}
            isHalfWidth={true} 
            label={'Mortgage Term'} 
            value={term}
          />
          <Input 
            changeValue={handleRate}
            hint={'%'}
            id={'rate'}
            isHalfWidth={true}
            label={'Interest Rate'}
            value={rate}
          />
        </CalculatorBodyWrapper>

        <Radio 
          firstValue={'Repayment'}
          secondValue={'Interest Only'}
        />

        <CalculatorCalculate
          onClick={e => calculate(e)}
        >
          <img src="images/icon-calculator.svg" alt="" />
          Calculate Repayments
        </CalculatorCalculate>
      </CalculatorBody>  
    </CalculatorContainer>
  );
}
 
export default Calculator;