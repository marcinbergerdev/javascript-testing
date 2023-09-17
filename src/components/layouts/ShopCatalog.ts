export const ShopCatalog = `
  <header class='test-header'>
    <h2>Shop Catalog</h2>
  </header>

  <form class="form" id="shopCatalog">
    <div class="form__box">
      <label for="name">Product Name</label>
      <input type="text" id='name' name='name' />
    </div>

    <div class="form__box">
      <label for='price'>Product Price</label>
      <input type="number" id='prise' name='price'/>
    </div>

    <div class="form__box availability-container">
      <label for='available'>Availability</label>

      <div class="user-choice-availability">
        <div class="choice-box">
          <label for="availChoice1">yes</label>
          <input type="radio" id='availChoice1' name='available' value="true" checked/>
        </div>

        <div class="choice-box">
          <label for='availChoice2'>no</label>
          <input type="radio" id='availChoice2' name='available' value="false"/>
        </div>
        </div>
        
        <p class='error-message'>error</p>

    </div>

    <button type="submit" class="form__button">add product</button>

  </form>

  <section class="result-container">
    <p class="result-container__title">Result</p>
    <p class="result-container__result numberOutput">...</p>
  </section>

  <section class="test-images availability-images">
    <img class="test-images__img" src="/images/tests/numbers/test1.png" alt="example-test" />
    <img class="test-images__img" src="/images/tests/numbers/test2.png" alt="example-test" />
    <img class="test-images__img" src="/images/tests/numbers/test3.png" alt="example-test" />
    <img class="test-images__img" src="/images/tests/numbers/test4.png" alt="example-test" />
  </section>

  <a class="test-link" href="https://github.com/marcinbergerdev/javascript-testing/tree/main/tests">
  → check my code here ←
  </a>
`;
