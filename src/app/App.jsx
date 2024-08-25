import Calculator from "../Calculator/Calculator";
import Results from "../Results/Results";
import { AppContainer } from "./App.styled"

const App = () => {
  return (
    <AppContainer>
      <Calculator />
      <Results />
    </AppContainer>
  );
}

export default App;
