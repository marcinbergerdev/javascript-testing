export function validateResult(result: string){
  let resultText = '';

  if (result === 'invalid') {
    resultText = 'Invalid input. You must enter valid numbers.';
  } else if (result !== 'no-calc') {
    resultText = 'Result: ' + result;
  }
  return resultText;
}


export function outputResult(resultText: string){
  const output = document.querySelector<HTMLParagraphElement>('.numberOutput')!;
  output.textContent = resultText;
}