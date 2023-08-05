import { clearNumbers } from "./numbers";

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
