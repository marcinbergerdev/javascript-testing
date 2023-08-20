
const apiLink: string = "https://api.thecatapi.com/v1/images/search?limit=10";




export async function getPetsRequest(){
  const response = await fetch(apiLink);
  return response;
}

export async function transformToArrayOfPets(response: Response){
  const selectedPets = await response.json();
  return selectedPets;
}