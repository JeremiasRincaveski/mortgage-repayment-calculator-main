import { createContext, useState } from "react";

export const CalculatorContext = createContext();

const CalculatorProvider = ({ children }) => {
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');
  const [rate, setRate] = useState('');
  const [type, setType] = useState('');
  const [errors, setErrors] = useState({});
  const [isCalculate, setIsCalculate] = useState(false);
  const [monthly, setMonthly] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <CalculatorContext.Provider value={{ 
      amount, setAmount,
      term, setTerm,
      rate, setRate,
      type, setType,
      errors, setErrors,
      isCalculate, setIsCalculate,
      monthly, setMonthly,
      total, setTotal,
     }}>
      {children}
    </CalculatorContext.Provider>
  )
};

export default CalculatorProvider;