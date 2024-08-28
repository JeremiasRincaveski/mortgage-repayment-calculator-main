import useCalculator from "../hooks/useCalculator";
import Result from "./Result/Result";
import ResultDefault from "./ResultDefault/ResultDefault";
import { ResultsContainer } from "./Results.styled";

const Results = () => {
  const { isCalculate } = useCalculator();

  return ( 
    <ResultsContainer>
      {!isCalculate && <ResultDefault />}
      {isCalculate && <Result /> }   
    </ResultsContainer> 
  );
}
 
export default Results;