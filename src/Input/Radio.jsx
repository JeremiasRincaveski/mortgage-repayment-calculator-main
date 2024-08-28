import useCalculator from "../hooks/useCalculator";
import { InputError } from "./Input.styled";
import { RadioContainer, RadioLabel, RadioWrapper } from "./Radio.styled";

const Radio = ({ firstValue, secondValue }) => {
  const { handleType, type, errors} = useCalculator();
  const radio1 = firstValue.split(' ').join('');
  const radio2 = secondValue.split(' ').join('');

  return (
    <RadioContainer>
      <RadioLabel>Mortgage Type</RadioLabel>

      <RadioWrapper 
        onClick={e => handleType(e)} 
        id={radio1}  
      >
        <input 
          type="radio" 
          name="type" 
          id={radio1}
          checked={type == radio1}
          onChange={() => {}}
        />
        <span htmlFor={radio1}></span>
        {firstValue}
      </RadioWrapper>

      <RadioWrapper 
        onClick={e => handleType(e)} 
        id={radio2}  
      >
        <input 
          type="radio"
          name="type" 
          id={secondValue.split(' ').join('')} 
          checked={type === radio2}
          onChange={() => {}}
        />
        <span htmlFor={secondValue.split(' ').join('')}></span>
        {secondValue}
      </RadioWrapper>
      <InputError>{errors.type}</InputError>
    </RadioContainer>
  );
}
 
export default Radio;