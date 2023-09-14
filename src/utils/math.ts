import { Items } from './../../types/CatalogItems';
import { Pets } from "./../../types/Pets";

import { clearNumbers } from "./numbers";
import { transformToSpecificTypeArrayOfData } from "./strings";
import { validatePersonDataNotEmpty } from "./validation";
import { Person } from "./parse";
import { getPetsRequest, transformToArrayOfPets } from "./requestApi";
import { validateServerError, validateServerStatus } from "./validation";

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
      transformResult = typedPersonData;
   } catch (error: any) {
      transformResult = error.message;
   }

   return transformResult;
}

export async function calculatePetsImages(apiLink: string) {
   let transformedPets: string | Pets[] = [];
   
   try {
      const petResponse: Response = await getPetsRequest(apiLink);
      validateServerError(petResponse);
      validateServerStatus(petResponse);
      const transformPetsResponse: Pets[] = await transformToArrayOfPets(petResponse);
         transformedPets = transformPetsResponse;
      } catch (err: any) {
         transformedPets = err.message;
      }
      
   return transformedPets;
}



export async function createProduct(productData: Items[]){
   try{

   }catch(err: any){

   };
}