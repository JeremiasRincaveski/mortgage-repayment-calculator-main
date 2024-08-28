import { useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";

const useCalculator = () => {
  const {
    amount, setAmount,
    errors, setErrors,
    isCalculate, setIsCalculate,
    monthly, setMonthly,
    rate, setRate,
    term, setTerm,
    total, setTotal,
    type, setType,
  } = useContext(CalculatorContext);
  
  const regex = /^\d+((,|.)\d+)*?$/;

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

    if (Object.keys(errors) == 0) {
      setIsCalculate(true);
      // I é a taxa dividida por um ano
      const I = (rate / 100) / 12;
      // N é a quantidade de anos vezes 12
      const N = term * 12;
      const result = ((amount * I * (1 + I)**N) / (((1 + I)**N) - 1));
      setMonthly(result);
      setTotal(result * N);
    }
  };

  const clearAll = () => {
    setAmount('');
    setErrors({ amount: '', term: '', rate: ''});
    setIsCalculate(false);
    setRate('');
    setTerm('');
    setType('');
  };
  

  return {
    amount, handleAmount,
    term, handleTerm,
    rate, handleRate,
    type,
    handleType,
    calculate, validityInput, errors,
    clearAll, isCalculate,
    monthly, total
  };
};

export default useCalculator;