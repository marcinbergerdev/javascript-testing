import { Person } from "./parse";



export function transformToSpecificTypeArrayOfData(personData: Person) {
   const transformData: (string | number | File)[] = [];

   for (const data in personData) {
      if (data === "age") {
         const age = Number(personData[data]);
         transformData.push(age);
      } else {
         transformData.push(personData[data]);
      }
   }

   return transformData;
}
