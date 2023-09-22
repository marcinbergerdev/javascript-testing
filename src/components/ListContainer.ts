import { CalcNumber } from "./layouts/CalcNumber.ts";
import { ValidStrings } from "./layouts/ValidStrings.ts";
import { ApiRequest } from "./layouts/requestApi.ts";
import { ShopCatalog } from "./layouts/shopsCatalog.ts";


import "../../scss/validStrings.scss"
import "../../scss/requestApi.scss"
import "../../scss/shopsCatalog.scss"
import "../../scss/testsWrapper.scss"

export function renderListContainer() {
   const app = document.querySelector<HTMLDivElement>("#app")!;
   app.innerHTML = `
   <ul>
    <li class="test-content">
      ${CalcNumber}
    </li>
    <li class="test-content">
      ${ValidStrings}
    </li>
    <li class="test-content">
      ${ApiRequest}
    </li>
    <li class="test-content">
      ${ShopCatalog}
    </li>
  </ul>
  `;
}