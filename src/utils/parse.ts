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


export interface Person {
   [key: string]: string;
}

export function extractString(form: FormData) {
    const person = {
      firstName: String(form.get("text1")),
      secondName: String(form.get("text2")),
      age: String(form.get("num3")),
      profession: String(form.get("text4")),
   };
   return person;
}

export function extractStringInputs(form: HTMLFormElement) {
   const formData = new FormData(form)!;
   const stringInput = extractString(formData);

   return stringInput;
}
