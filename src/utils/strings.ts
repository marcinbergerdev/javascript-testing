import { Person } from "./parse";

export function transformToSpecificTypeArrayOfData(personData: Person) {
   const transformData: (string | number)[] = [];

   for (const data in personData) {
      if (data === "age") {
         const age = Number(personData[data]);
         transformData.push(age);
         continue;
      }

      transformData.push(personData[data]);
   }

   return transformData;
}
