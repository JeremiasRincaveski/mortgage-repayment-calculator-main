import Input from "../Input/Input";
import Radio from "../Input/Radio";
import { CalculatorBody, CalculatorBodyWrapper, CalculatorCalculate, CalculatorClearButton, CalculatorContainer, CalculatorHeader, CalculatorTitile } from "./Calculator.styled";

const Calculator = () => {
  return ( 
    <CalculatorContainer>
      <CalculatorHeader>
        <CalculatorTitile>Mortgage Calculator</CalculatorTitile>

        <CalculatorClearButton>Clear All</CalculatorClearButton>
      </CalculatorHeader>

      <CalculatorBody>
       <CalculatorBodyWrapper>
        <Input 
            label={'Mortgage Amount'} 
            hint={'£'}
            id={'amount'}
            value={'300,00'}
          />
          <Input 
            label={'Mortgage Term'} 
            isHalfWidth={true} 
            hint={'years'}
            id={'term'}
            value={25}
          />
          <Input 
            label={'Interest Rate'}
            isHalfWidth={true}
            hint={'%'}
            id={'rate'}
            value={5.25}
          />
       </CalculatorBodyWrapper>

       <Radio 
        firstValue={'Repayment'}
        secondValue={'Interest Only'}
       />
      </CalculatorBody>  

      <CalculatorCalculate><img src="images/icon-calculator.svg" alt="" />Calculate Repayments</CalculatorCalculate>
    </CalculatorContainer>
  );
}
 
export default Calculator;