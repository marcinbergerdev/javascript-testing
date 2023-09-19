import { Product } from "./../../types/CatalogItems";

export async function getPetsRequest(apiLink: string) {
   const response = await fetch(apiLink);
   return response;
}

export async function transformToArrayOfPets(response: Response) {
   const selectedPets = await response.json();
   return selectedPets;
}

// DATA BASE REPLACED WITH LOCAL STORAGE
export function saveProductData(product: Product) {
   const userProductList: Product[] | null = JSON.parse(localStorage.getItem("products")!);
   
   let newUserProductList: Product[] = [];

   if (!userProductList && userProductList === null) {
      newUserProductList.push(product);
      localStorage.setItem("products", JSON.stringify(newUserProductList));
      return newUserProductList;
   }

   if (userProductList.length >= 10) {
      return userProductList;
   }

   newUserProductList = userProductList;
   newUserProductList.push(product);
   localStorage.setItem("products", JSON.stringify(newUserProductList));

   return newUserProductList!;
}
