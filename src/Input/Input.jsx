import { useRef } from "react";
import { InputContainer, InputField, InputHint, InputLabel, InputWrapper } from "./Input.styled";

const Input = ({ isHalfWidth = false, id, label, value, changeValue, hint }) => {
  const input = useRef(null);

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
        value={value} 
        onChange={() => changeValue()}
        ref={input}
      />
    </InputWrapper>
   </InputContainer> 
  );
};
 
export default Input;