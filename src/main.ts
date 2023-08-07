import { renderListContainer } from "./components/ListContainer";
import { extractNumberInputs } from "./utils/parse.ts";
import { calculateResult } from "./utils/math.ts";
import { outputResult, validateResult } from "./utils/output.ts";

renderListContainer();



const formNumber = document.querySelector<HTMLFormElement>('#formNumber')!;
const formString = document.querySelector<HTMLFormElement>('#formString')!;

const formNumberResultHandler = (e: SubmitEvent) => {
  e.preventDefault();
  const extractNumberValue = extractNumberInputs(formNumber);

  const result = calculateResult(extractNumberValue);
  const resultText = validateResult(result);
  outputResult(resultText);
 
}


const formStringResultHandler = (e: SubmitEvent) => {
  e.preventDefault();
  const form = new FormData(formString);
  const text1 = form.get('text1');
  const text2 = form.get('text2');
  const num3 = form.get('num3');
  const text4 = form.get('text4');

}


formNumber.addEventListener('submit', formNumberResultHandler);
formString.addEventListener('submit', formStringResultHandler);