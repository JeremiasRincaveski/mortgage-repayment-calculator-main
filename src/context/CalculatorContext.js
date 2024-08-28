import { createContext, useState } from "react";

export const CalculatorContext = createContext();

const CalculatorProvider = ({ children }) => {
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');
  const [rate, setRate] = useState('');
  const [type, setType] = useState('');
  const [errors, setErrors] = useState({});

  return (
    <CalculatorContext.Provider value={{ 
      amount, setAmount,
      term, setTerm,
      rate, setRate,
      type, setType,
      errors, setErrors
     }}>
      {children}
    </CalculatorContext.Provider>
  )
};

export default CalculatorProvider;