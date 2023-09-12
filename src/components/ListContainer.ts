import { CalcNumber } from "./layouts/CalcNumber.ts";
import { ValidStrings } from "./layouts/ValidStrings.ts";
import { ApiRequest } from "./layouts/ApiRequest.ts";
import { ShopCatalog } from './layouts/ShopCatalog.ts'

import "../../scss/testContainer.scss";
import "../../scss/validString.scss";
import "../../scss/apiRequest.scss";
import "../../scss/shopCatalog.scss"

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