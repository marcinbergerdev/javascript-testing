import { renderListContainer } from "./components/ListContainer";
import { extractNumberInputs } from "./utils/parse.ts";
import { calculateResult } from "./utils/math.ts";
import { outputResult, validateResult } from "./utils/output.ts";

renderListContainer();



const formNumber = document.querySelector<HTMLFormElement>('#formNumber')!;

const formResultHandler = (e: SubmitEvent) => {
  e.preventDefault();
  const extractNumberValue = extractNumberInputs(formNumber);

  const result = calculateResult(extractNumberValue);
  const resultText = validateResult(result);
  outputResult(resultText);
 
}



formNumber.addEventListener('submit', formResultHandler);