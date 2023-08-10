import { clearNumbers } from "./numbers";
import { transformToSpecificTypeArrayOfData } from "./strings";
import {
   validatePersonDataNotEmpty,
   validatePersonDataAgeType,
} from "./validation";
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

export function calculateData(personData: Person) {
   let transformResult: string | (string | number)[] = [];

   try {
      validatePersonDataNotEmpty(personData);
      const typedPersonData = transformToSpecificTypeArrayOfData(personData);
      validatePersonDataAgeType(typedPersonData);
      transformResult = typedPersonData;
      
   } catch (error: any) {
      transformResult = error.message;
   }

   return transformResult;
}
