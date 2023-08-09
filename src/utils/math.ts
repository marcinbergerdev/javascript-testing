import { clearNumbers } from "./numbers";
import { transformToSpecificTypeArrayOfData} from "./strings"; 
import { validatePersonDataNotEmpty, validatePersonDataSpecificType} from './validation'
import { Person } from "./parse";

export function addNumbers(numbers: any) {
   let sum = 0;

   for (const number of numbers) {
      sum += +number;
   }
   return sum;
}

export function calculateResult(numberValues: any) {
   let result = "";
   try {
      const numbers = clearNumbers(numberValues);
      result = addNumbers(numbers).toString();
   } catch (error: any) {
      result = error.message;
   }
   return result;
}


export function calculateDataString(personData: Person) {
   try {
      // validatePersonDataNotEmpty(personData);
      const typedPersonData = transformToSpecificTypeArrayOfData(personData); 

      validatePersonDataSpecificType(typedPersonData);

   


      // const transformedPersonData = transformPersonDataToArray(personData);
      // console.log(transformedPersonData);


   } catch (error: any) {
      console.log(error.message);
   }
}
