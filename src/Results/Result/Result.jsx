import useCalculator from "../../hooks/useCalculator";
import { ResultContainer, ResultDescription, ResultMonthly, ResultTerm, ResultTitle, ResultWrapper, ResultWrapperContainer } from "./Result.styled";

const Result = () => {
  const { monthly, total } = useCalculator();
  return (
    <ResultContainer>
      <ResultTitle>Your results</ResultTitle>

      <ResultDescription>
        Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.
      </ResultDescription>

      <ResultWrapper>
        <ResultWrapperContainer>
          <ResultDescription>Your monthly repayments</ResultDescription>
          <ResultMonthly>{monthly.toFixed(2)}</ResultMonthly>
        </ResultWrapperContainer>
        
        <ResultWrapperContainer>
          <ResultDescription>Total you'll repay over the term</ResultDescription>
          <ResultTerm>{total.toFixed(2)}</ResultTerm>
        </ResultWrapperContainer>
      </ResultWrapper>
    </ResultContainer>
  );
}
 
export default Result;