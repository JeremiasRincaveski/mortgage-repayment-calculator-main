import { ResultContainer, ResultDescription, ResultTitle } from "./Result.styled";

const Result = () => {
  return (
    <ResultContainer>
      <ResultTitle>Your results</ResultTitle>

      <ResultDescription>
        Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.
      </ResultDescription>

      
    </ResultContainer>
  );
}
 
export default Result;