import { useRef } from "react";
import { InputContainer, InputError, InputField, InputHint, InputLabel, InputWrapper } from "./Input.styled";
import useCalculator from "../hooks/useCalculator";

const Input = ({ changeValue, hint, id, isHalfWidth = false, label, value }) => {
  const input = useRef(null);
  const { validityInput, errors } = useCalculator();

  const focusInput = () => {
    input.current.focus();
  };
  
  return (  
   <InputContainer $flex={isHalfWidth} >
    <InputLabel htmlFor={id}>{label}</InputLabel>

    <InputWrapper $direction={isHalfWidth}>
      <InputHint 
        onClick={focusInput}
      >
        {hint}
      </InputHint>

      <InputField 
        id={id} 
        onChange={(e) => changeValue(e)}
        onBlur={(e) => validityInput(e)}
        ref={input}
        value={value} 
        required
      />
    </InputWrapper>

    <InputError>{errors && errors[id]}</InputError>
   </InputContainer> 
  );
};
 
export default Input;