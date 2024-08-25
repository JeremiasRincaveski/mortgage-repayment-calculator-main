import { ResultDefaultContainer, ResultDefaultDescription, ResultDefaultImg, ResultDefaultTitle } from "./ResultDefault.styled";

const ResultDefault = () => {
  return (
    <ResultDefaultContainer>
      <ResultDefaultImg src="images/illustration-empty.svg" alt="" />

      <ResultDefaultTitle>Results shown here</ResultDefaultTitle>

      <ResultDefaultDescription>Complete the form and click “calculate repayments” to see what your monthly repayments would be.</ResultDefaultDescription>
    </ResultDefaultContainer>
  );
}
 
export default ResultDefault;