import { renderTestsNumbers } from "./numbers/TestNumbers.ts";
import "../../scss/TestContainer.scss";

export function renderTestsContainer() {
   const app = document.querySelector<HTMLDivElement>("#app")!;
   app.innerHTML = `
   <ul class="tests-list">
    <li class="tests-content">
      ${renderTestsNumbers}
    </li>
  </ul>
  `;
}
