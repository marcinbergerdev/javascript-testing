import { Product } from "./../../types/CatalogItems";
import { Pets } from "./../../types/Pets";

export function validateResult(result: string) {
   let resultText = "";

   console.log(result);
   if (result === "invalid") {
      resultText = "Invalid input. You must enter valid numbers.";
   } else if (result !== "no-calc") {
      resultText = "Result: " + result;
   }
   return resultText;
}
export function outputNumberResult(resultText: string) {
   const output =
      document.querySelector<HTMLParagraphElement>(".numberOutput")!;
   output.textContent = resultText;
}

export function validatePersonData(personData: string | (string | number)[]) {
   let resultText: string | (string | number)[];

   if (personData.includes("Invalid")) {
      resultText = "Error " + personData;
   } else {
      resultText = personData;
   }

   return resultText;
}

export function outputErrorPersonData(resultText: string) {
   const output =
      document.querySelector<HTMLParagraphElement>(".stringOutput")!;
   output.textContent = resultText;
}

export function outputPersonDataResult(
   personData: string | (string | number)[]
) {
   const output =
      document.querySelector<HTMLParagraphElement>(".stringOutput")!;

   if (personData.includes("Invalid")) {
      outputErrorPersonData(String(personData));
      return;
   }

   const [firstName, secondName, age, profession] = personData;
   output.innerHTML = `
          <ul class='user-list-data'>
             <li class='user-element-data'>
                <h3 class="user-element-data__title">First Name: </h3>
                <p>${firstName}</p>
             </li>
             <li class='user-element-data'>
                <h3 class="user-element-data__title">Second Name: </h3>
                <p>${secondName}</p>
            </li>
             <li class='user-element-data'>
                <h3 class="user-element-data__title">Age: </h3>
                <p>${age}</p>
             </li>
             <li class='user-element-data'>
                <h3 class="user-element-data__title">Profession: </h3>
                <p>${profession}</p>
            </li>
          </ul>
       `;
}

export function generateOutputTemplate(data: string | Pets[]) {
   if (typeof data === "string" && typeof data !== "object") {
      createErrorMessage(data);
      return;
   }

   createPetsList(data);
}

function createErrorMessage(error: string) {
   const apiResult = document.querySelector<HTMLElement>("#result-api")!;
   apiResult.innerHTML = "";

   const errorMessage = document.createElement("p");
   errorMessage.textContent = error;
   apiResult.appendChild(errorMessage);
}

function createPetsList(pets: Pets[]) {
   const apiResult = document.querySelector<HTMLElement>("#result-api")!;
   apiResult.innerHTML = "";

   const petsList: HTMLUListElement = document.createElement("ul");
   petsList.classList.add("images-list");
   apiResult.appendChild(petsList);

   pets.forEach((pet, id) => {
      const petElement: HTMLLIElement = document.createElement("li");
      petsList.setAttribute("id", pet.id);
      petElement.classList.add("image-wrapper");
      petElement.classList.add(`image${id}`);

      const petImage: HTMLImageElement = document.createElement("img");
      petImage.classList.add("image-wrapper__img");
      petImage.setAttribute("loading", "lazy");
      petImage.setAttribute("src", pet.url);
      petImage.setAttribute("alt", "animal");

      petElement.appendChild(petImage);
      petsList.appendChild(petElement);
   });
}

const createMessageIfProductListIsFull = (message: string) => {
   const productContainer =
      document.querySelector<HTMLElement>(".product-container")!;
   productContainer.innerHTML = "";

   const resultTitle = document.createElement("p");
   resultTitle.classList.add("result-container__title");
   resultTitle.textContent = "Result";

   const resultMessage = document.createElement("p");
   resultMessage.classList.add("result-container__result");
   resultMessage.textContent = message;

   const showProductList = document.createElement("button");
   showProductList.classList.add("showProducts");
   showProductList.textContent = "show products";
   showProductList.addEventListener("click", () => {
      const products: Product[] = JSON.parse(
         localStorage.getItem("products") as string
      );
      createProductList(products);
   });

   productContainer.append(resultTitle, resultMessage, showProductList);
};

export const createProductList = (products: Product[]) => {
   if (typeof products === "string") {
      createMessageIfProductListIsFull(products);
      return;
   }

   const productContainer = document.querySelector<HTMLElement>(".product-container")!;
   productContainer.innerHTML = "";

   const productList = document.createElement("ul");
   productList.classList.add("product-list");

   products.forEach((product) => {
      const productElement = document.createElement("li");
      productElement.classList.add("product-element");

      const productTitle = document.createElement("h3");
      productTitle.classList.add("product-element__title");
      productTitle.textContent = product.name;

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("product-element__delete");
      deleteButton.textContent = "X";

      const productPrice = document.createElement("p");
      productPrice.classList.add("product-element__price");
      productPrice.textContent = `${product.price} €`;

      const productStatus = document.createElement("p");
      productStatus.classList.add("product-element__status");
      productStatus.textContent =
         product.available === "true" ? "available" : "unavailable";

      const checkStatusButton = document.createElement("button");
      checkStatusButton.classList.add("product-element__checkAvailableButton");
      checkStatusButton.textContent = "check availability";

      productElement.append(
         productTitle,
         deleteButton,
         productPrice,
         productStatus,
         checkStatusButton
      );
      productList.appendChild(productElement);
   });

   productContainer.appendChild(productList);
};
