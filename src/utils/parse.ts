import { Product } from "../../types/CatalogItems";

export function extractNumbers(form: any) {
   const inputNum1: FormDataEntryValue = form.get("num1")!;
   const inputNum2: FormDataEntryValue = form.get("num2")!;

   return [inputNum1, inputNum2];
}

export function extractNumberInputs(form: HTMLFormElement) {
   const formData = new FormData(form);
   const numberInputs = extractNumbers(formData);

   return numberInputs;
}

export interface Person {
   [key: string]: string;
}

export function extractString(form: FormData) {
   const person = {
      firstName: form.get("text1"),
      secondName: form.get("text2"),
      age: form.get("num3"),
      profession: form.get("text4"),
   };
   return person as Person;
}

export function extractStringInputs(form: HTMLFormElement) {
   const formData = new FormData(form)!;
   const stringInput = extractString(formData);

   return stringInput;
}

export function extractProductData(form: HTMLFormElement) {
   const formData = new FormData(form);

   const product = {
      name: formData.get("name")!,
      price: formData.get("price")!,
      available: formData.get("available")!,
   };

   return product as Product;
}
