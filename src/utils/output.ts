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

   pets.forEach((pet) => {
      const petElement: HTMLLIElement = document.createElement("li");
      petsList.setAttribute("id", pet.id);
      petElement.classList.add("image-wrapper");

      const petImage: HTMLImageElement = document.createElement("img");
      petImage.classList.add("image-wrapper__img");
      petImage.setAttribute("loading", "lazy");
      petImage.setAttribute("src", pet.url);
      petImage.setAttribute("alt", "animal");

      petElement.appendChild(petImage);
      petsList.appendChild(petElement);
   });
}
