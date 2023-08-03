export function extractNumbers(form: any) {
  const inputNum1 = form.get('num1');
  const inputNum2 = form.get('num2');

  return [inputNum1, inputNum2]
}


export function extractNumberInputs(form: HTMLFormElement){
  const formData = new FormData(form);
  const numberInputs = extractNumbers(formData);

  return numberInputs;
}