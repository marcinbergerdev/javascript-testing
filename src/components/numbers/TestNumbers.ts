export function renderTestsNumbers() {
   const list = document.querySelector<HTMLUListElement>(".test-list")!;
   list.innerHTML = `
      <form class="form-numbers">
      <div class="form-numbers__box">
        <label for="value1">First Number</label>
        <input type="text" />
      </div>

      <div class="form-numbers__box">
        <label for="value2">Second Number</label>
        <input type="text" />
      </div>

      <button class="form-numbers__button">Show Result</button>
      </form>

      <div class="result-container" v-if="false">
        <p>result</p>
      </div>

      <div class="test-image">
        <img src="../../../assets/images/test1.png" alt="example-test" />
        <img src="../../../assets/images/test1.png" alt="example-test" />
        <img src="../../../assets/images/test1.png" alt="example-test" />
        <img src="../../../assets/images/test1.png" alt="example-test" />
      </div>
  `;
}
