import { useContext, useEffect, useState } from "react";
import { CalculatorContext } from "../context/CalculatorContext";

const useCalculator = () => {
  const {
    amount, setAmount,
    term, setTerm,
    rate, setRate,
    type, setType,
    errors, setErrors,
  } = useContext(CalculatorContext);
  const [radio1, setRadio1] = useState(false);
  const [radio2, setRadio2] = useState(false);
  
  const regex = /\d+((,|.)\d)*?/

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleTerm = (e) => {
    setTerm(e.target.value);
  };

  const handleRate = (e) => {
    setRate(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.id);
  };

  const validityInput = (e) => {
    const { name, value, id } = e.target;

    setErrors(prevErrors => {
      const newErrors = { ...prevErrors };  

      if (name === 'type' && !type) {
        newErrors.type = 'This field is required';
      } else if (name === 'type' && type) {
        delete newErrors.type;
      }
  
      if (!regex.test(value) && value !== '') {
        newErrors[id] = 'Enter a valid value';
      } else if (!value) {
        newErrors[id] = 'This field is required';
      } else {
        delete newErrors[id];
      }
  
      return newErrors;
    });
  };
  

  const calculate = (e) => {
    e.preventDefault();
    const obj = {amount, term, rate, type};
  
    setErrors(prevErrors => {
      const newErrors = { ...prevErrors };  

      for (const element in obj) {
        
        if (!regex.test(obj[element]) && obj[element] !== '') {
          newErrors[element] = 'Enter a valid value';
        } else if (!obj[element]) {
          newErrors[element] = 'This field is required';
        } else {
          delete newErrors[element];
        }
        
        if (element === 'type' && !type) {
          newErrors.type = 'This field is required';
        } else if (element === 'type' && type) {
          delete newErrors.type;
        }
      }

      return newErrors;
    });
  };

  const clearAll = () => {
    setAmount('');
    setRate('');
    setTerm('');
    setType('');
    setErrors({ amount: '', term: '', rate: ''});
  };
  

  return {
    amount, handleAmount,
    term, handleTerm,
    rate, handleRate,
    type,
    handleType,
    calculate, validityInput, errors,
    clearAll, radio1, radio2
  };
};

export default useCalculator;