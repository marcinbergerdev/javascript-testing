import { CalcNumber } from "./calculatesNumber/CalcNumber.ts";
import "../../scss/TestContainer.scss";

export function renderListContainer() {
   const app = document.querySelector<HTMLDivElement>("#app")!;
   app.innerHTML = `
   <ul class="tests-list">
    <li class="tests-content">
      ${CalcNumber}
    </li>
  </ul>
  `;
}