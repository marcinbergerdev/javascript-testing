export function extractNumbers(form: any) {
   const inputNum1: FormDataEntryValue = form.get("num1")!;
   const inputNum2: FormDataEntryValue = form.get("num2")!;

   return [inputNum1, inputNum2];
}

export function extractNumberInputs(form: HTMLFormElement) {
   const formData = new FormData(form);
   const numberInputs = extractNumbers(formData);

   return numberInputs;
}
