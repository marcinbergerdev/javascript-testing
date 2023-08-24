export async function getPetsRequest(apiLink: string) {
   const response = await fetch(apiLink);
   return response;
}

export async function transformToArrayOfPets(response: Response) {
   const selectedPets = await response.json();
   return selectedPets;
}
