import { CalcNumber } from "./layouts/CalcNumber.ts";
import { ValidStrings } from "./layouts/ValidStrings.ts";
import { ApiRequest } from "./layouts/ApiRequest.ts";

import "../../scss/TestContainer.scss";
import "../../scss/ValidString.scss"
import "../../scss/ApiRequest.scss"

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
  </ul>
  `;
}
