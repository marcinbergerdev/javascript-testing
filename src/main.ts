import { renderListContainer } from "./components/ListContainer";
import { extractNumberInputs, extractStringInputs ,extractProductData} from "./utils/parse.ts";
import { calculateResult, calculateData, createProduct} from "./utils/math.ts";
import {
   outputNumberResult,
   outputPersonDataResult,
   validateResult,
   validatePersonData,
   generateOutputTemplate,
   showProductListHandler,
} from "./utils/output.ts";
import { calculatePetsImages } from "./utils/math.ts";
import { createProductList } from './utils/output.ts' 

renderListContainer();

const formNumber = document.querySelector<HTMLFormElement>("#formNumber")!;
const formString = document.querySelector<HTMLFormElement>("#formString")!;
const showPetsHandler =
   document.querySelector<HTMLButtonElement>("#show-pets")!;

const formShopCatalog = document.querySelector<HTMLFormElement>('#shopCatalog')!;
const showButton = document.querySelector<HTMLButtonElement>('.show-product-list')!;

const formNumberResultHandler = (e: Event) => {
   e.preventDefault();
   const extractNumberValue = extractNumberInputs(formNumber);
   const result = calculateResult(extractNumberValue);
   const resultText = validateResult(result);
   outputNumberResult(resultText);
};

const formStringResultHandler = (e: Event) => {
   e.preventDefault();
   const extractPersonValue = extractStringInputs(formString);
   const personData = calculateData(extractPersonValue);
   const personDataText = validatePersonData(personData);
   outputPersonDataResult(personDataText);
};

const apiLink: string = "https://api.thecatapi.com/v1/images/search?limit=10";
const imagesRenderHandler = async () => {
   const extractedData = await calculatePetsImages(apiLink);
   generateOutputTemplate(extractedData);
};


const formShopCatalogHandler = async (e: Event) => {
   e.preventDefault();

   const extractedProductData = extractProductData(formShopCatalog);
   const createdShopProduct = await createProduct(extractedProductData);
   createProductList(createdShopProduct);



}
 

formNumber.addEventListener("submit", formNumberResultHandler);
formString.addEventListener("submit", formStringResultHandler);
showPetsHandler.addEventListener("click", imagesRenderHandler);
formShopCatalog.addEventListener('submit',formShopCatalogHandler);
showButton.addEventListener('click', showProductListHandler);