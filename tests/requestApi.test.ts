import { describe, it, expect, beforeAll } from "vitest";
import {
   getPetsRequest,
   transformToArrayOfPets,
} from "../src/utils/requestApi";

let correctApiLink: string;
let wrongApiLink: string;

beforeAll(() => {
   correctApiLink = "https://api.thecatapi.com/v1/images/search?limit=10"; // correct link api to get response
   wrongApiLink = "https://api.thecatapi.com/v1/test"; // wrong link api to get error
});

describe("getPetsRequest()", () => {
   it("should return valid request status form the server", async () => {
      const validRequest = await getPetsRequest(correctApiLink);
      expect(validRequest.status).toBe(200);
   });

   it("should throw an 404 status error if wrong api link is provided", async () => {
      const invalidRequest = await getPetsRequest(wrongApiLink);
      expect(invalidRequest.status).toBe(404);
   });
});

describe("transformToArrayOfPets()", async () => {
   it("should return array of pets if correct api link is provided", async () => {
      const response = await getPetsRequest(correctApiLink);

      const transformedResponse = await transformToArrayOfPets(response);

      expect(transformedResponse).toEqual(transformedResponse);
   });

   it("should return string if pets contain valid data", async () => {
      const response = await getPetsRequest(correctApiLink);
      const [pet] = await transformToArrayOfPets(response);
      expect(pet.id).toBeTypeOf("string");
   });

   it("should throw an error if wrong api link is provided", async () => {
      const response = await getPetsRequest(wrongApiLink);

      const transformedPets = await transformToArrayOfPets(response);

      expect(transformedPets.message).toMatch("404");
   });
});
