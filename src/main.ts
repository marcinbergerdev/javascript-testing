import { renderListContainer } from "./components/ListContainer";
import { extractNumberInputs ,extractStringInputs} from "./utils/parse.ts";
import { calculateResult, calculateData} from "./utils/math.ts";
import { outputNumberResult, outputPersonDataResult, validateResult, validatePersonData} from "./utils/output.ts";
import { calculatePetsImages } from "./utils/math.ts";
renderListContainer();

const formNumber = document.querySelector<HTMLFormElement>("#formNumber")!;
const formString = document.querySelector<HTMLFormElement>("#formString")!;
const showPetsHandler = document.querySelector<HTMLButtonElement>('#show-pets')!;

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



const imageResultHandler = async () => {
   
   const petsResult = await calculatePetsImages();
   
  

  

}




formNumber.addEventListener("submit", formNumberResultHandler);
formString.addEventListener("submit", formStringResultHandler);
showPetsHandler.addEventListener('click', imageResultHandler);



















