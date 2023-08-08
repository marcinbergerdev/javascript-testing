import { CalcNumber } from "./calculatesNumber/CalcNumber.ts";
import { ValidStrings } from "./calculatesNumber/ValidStrings.ts";
import "../../scss/TestContainer.scss";
import "../../scss/ValidString.scss"

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
  </ul>
  `;
}
