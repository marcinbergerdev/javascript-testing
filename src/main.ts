import { renderListContainer } from "./components/ListContainer";
import { extractNumberInputs } from "./utils/parse.ts";
import { calculateResult } from "./utils/math.ts";
import { outputResult, validateResult } from "./utils/output.ts";

renderListContainer();

const formNumber = document.querySelector<HTMLFormElement>("#formNumber")!;
const formString = document.querySelector<HTMLFormElement>("#formString")!;

const formNumberResultHandler = (e: SubmitEvent) => {
   e.preventDefault();
   const extractNumberValue = extractNumberInputs(formNumber);

   const result = calculateResult(extractNumberValue);
   const resultText = validateResult(result);
   outputResult(resultText);
};

interface Person {
   [key: string | number]: FormDataEntryValue;
}

const formStringResultHandler = (e: SubmitEvent) => {
   e.preventDefault();
   const stringOutput =
      document.querySelector<HTMLParagraphElement>(".stringOutput")!;
   const form = new FormData(formString);

   const person: Person = {
      firstName: form.get("text1")!,
      secondName: form.get("text2")!,
      age: form.get("num3")!,
      profession: form.get("text4")!,
   };

   try {
      for (const data in person) {
         if (person[data].length === 0 && data.trim()) {
            throw new Error("Invalid - all input are invalid");
         }
      }

      const { firstName, secondName, age, profession }: Person = person;
      stringOutput.innerHTML = `
         <ul class='user-list-data'>
            <li class='user-element-data'>
               <h3 class="user-element-data__title">First Name: </h3>
               <p>${firstName}</p>
            </li>
            <li class='user-element-data'>
               <h3 class="user-element-data__title">Second Name: </h3>
               <p>${secondName}</p>
            </li>
            <li class='user-element-data'>
               <h3 class="user-element-data__title">Age: </h3>
               <p>${age}</p>
            </li>
            <li class='user-element-data'>
               <h3 class="user-element-data__title">Profession: </h3>
               <p>${profession}</p>
            </li>
         </ul>
      `;
   } catch (error: any) {
      stringOutput.textContent = error.message;
   }
};

formNumber.addEventListener("submit", formNumberResultHandler);
formString.addEventListener("submit", formStringResultHandler);
