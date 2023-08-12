import { Person } from "./parse";
import { validatePersonAgeType } from '../utils/validation' 

export function transformToSpecificTypeArrayOfData(personData: Person) {
   const transformData: (string | number)[] = [];

   for (const data in personData) {
      if (data === "age") {
         const age = Number(personData[data]);
         validatePersonAgeType(age);
         transformData.push(age);
         continue;
      }

      transformData.push(personData[data]);
   }

   return transformData;
}
