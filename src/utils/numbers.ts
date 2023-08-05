import { validateStringNotEmpty, validateNumber } from "./validation";

export function transformToNumber(value: string | number) {
   return +value;
}

export function clearNumbers(numberInputs: any) {
   const numbers = [];
   for (const numberInput of numberInputs) {
      validateStringNotEmpty(numberInput);
      const number = transformToNumber(numberInput);
      validateNumber(number);
      numbers.push(number);
   }
   return numbers;
}
