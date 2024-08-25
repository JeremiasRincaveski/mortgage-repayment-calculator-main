import { RadioContainer, RadioLabel, RadioWrapper } from "./Radio.styled";

const Radio = ({ firstValue, secondValue }) => {
  return (
    <RadioContainer>
      <RadioLabel>Mortgage Type</RadioLabel>

      <RadioWrapper>
        <input type="radio" name="type" id={firstValue.split(' ').join(' ')} />
        <span htmlFor={firstValue.split(' ').join(' ')}></span>
        {firstValue}
      </RadioWrapper>

      <RadioWrapper>
        <input type="radio" name="type" id={secondValue.split(' ').join(' ')} />
        <span htmlFor={secondValue.split(' ').join(' ')}></span>
        {secondValue}
      </RadioWrapper>
    </RadioContainer>
  );
}
 
export default Radio;