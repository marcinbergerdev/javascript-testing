import { clearNumbers } from "./numbers";

export function add(numbers: any) {
   let sum = 0;

   // throw new Error('Something went wrong');

   for (const number of numbers) {
      sum += +number;
   }
   return sum;
}

export function calculateResult(numberValues: any) {
   let result = "";
   try {
      const numbers = clearNumbers(numberValues);
      result = add(numbers).toString();
   } catch (error: any) {
      result = error.message;
   }
   return result;
}
