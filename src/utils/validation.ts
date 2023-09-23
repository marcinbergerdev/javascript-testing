import { Product } from "../../types/CatalogItems";
import { Person } from "./parse";

export function validateStringNotEmpty(value: string) {
   if (value.trim().length === 0) {
      throw new Error("Invalid input - must not be empty.");
   }
}

export function validateNumber(number: any) {
   if (isNaN(number) || typeof number !== "number") {
      throw new Error("Invalid number input.");
   }
}

export function validatePersonDataNotEmpty(person: Person) {
   for (const data in person) {
      const personData = person[data];
      if (personData.trim().length === 0) {
         throw new Error("Invalid - all input are invalid");
      }
   }
}

export function validatePersonAgeType(number: number) {
   if (isNaN(number) || typeof number !== "number") {
      throw new Error("Invalid - Age input must be number!");
   }
}

export function validateServerError(response: Response) {
   if (!response.ok) {
      throw new Error("Something goes wrong try later");
   }
}
export function validateServerStatus(response: Response) {
   if (response.status === 404) {
      throw new Error("Sorry - server is down :(");
   }
}








export function validateEmptyInputs(productData: Product) {
   for (const product in productData) {
      if (productData[product].trim().length === 0) {
         throw new Error("Sorry: Invalid all inputs!");
      }
   }
}

export function validateMaxAmount(products: Product[]) {
   console.log(products);
   if (!!products && products.length >= 10) {
      throw new Error(
         "Sorry: your list of product is full, please delete some products"
      );
   }
}
