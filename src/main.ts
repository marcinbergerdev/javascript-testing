import { renderListContainer } from "./components/ListContainer";
import { extractNumberInputs ,extractStringInputs} from "./utils/parse.ts";
import { calculateResult, calculateData} from "./utils/math.ts";
import { outputNumberResult, outputPersonDataResult, validateResult, validatePersonData} from "./utils/output.ts";

renderListContainer();

const formNumber = document.querySelector<HTMLFormElement>("#formNumber")!;
const formString = document.querySelector<HTMLFormElement>("#formString")!;

const formNumberResultHandler = (e: SubmitEvent) => {
   e.preventDefault();
   const extractNumberValue = extractNumberInputs(formNumber);

   const result = calculateResult(extractNumberValue);
   const resultText = validateResult(result);
   outputNumberResult(resultText);
};


const formStringResultHandler = (e: SubmitEvent) => {
   e.preventDefault();
   const extractPersonValue = extractStringInputs(formString);

   const personData = calculateData(extractPersonValue);
   const personDataText = validatePersonData(personData);
   outputPersonDataResult(personDataText);
};

formNumber.addEventListener("submit", formNumberResultHandler);
formString.addEventListener("submit", formStringResultHandler);



















