import Result from "./Result/Result";
import ResultDefault from "./ResultDefault/ResultDefault";
import { ResultsContainer } from "./Results.styled";

const Results = () => {
  return ( 
    <ResultsContainer>
      {/* <ResultDefault /> */}
      <Result />
    </ResultsContainer> 
  );
}
 
export default Results;