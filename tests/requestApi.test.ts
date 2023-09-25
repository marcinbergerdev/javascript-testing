import { describe, it, expect, vi, beforeAll, beforeEach } from "vitest";
import {
   getPetsRequest,
   saveProductData,
   transformToArrayOfPets,
} from "../src/utils/requestApi";
import { Pets } from "../types/Pets";
import { localStorage } from "../__mocks__/localStorage";

vi.stubGlobal("localStorage", localStorage);



let correctApiLink: string;
let wrongApiLink: string;

beforeAll(() => {
   correctApiLink = "https://api.thecatapi.com/v1/images/search?limit=10"; // correct link api to get response
   wrongApiLink = "https://api.thecatapi.com/v1/test"; // wrong link api to get error
});

beforeEach(() => {
   localStorage.clear();
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

      const pets: Pets[] = await transformToArrayOfPets(response);

      pets.forEach((pet) => {
         expect(pet).toHaveProperty("id");
      });
   });

   it("should throw an error if wrong api link is provided", async () => {
      const response = await getPetsRequest(wrongApiLink);

      const transformedPets = await transformToArrayOfPets(response);

      expect(transformedPets.message).toMatch("404");
   });
});

describe("saveProductData()", () => {
   it("should execute local story function", () => {
      const product = {
         id: "testId",
         name: "testName",
         price: "10",
         available: "true",
      };

      saveProductData(product);

      expect(localStorage.getItem).toBeCalled();
      expect(localStorage.setItem).toBeCalled();
   });

   it("should execute local story function with arguments", () => {
      const product = { id: "testId", name: "testName", price: "10", available: "true"};
      const newProduct = [ { id: "testId", name: "testName", price: "10", available: "true",}];
      
      saveProductData(product);

      expect(localStorage.getItem).toBeCalledWith("products");
      expect(localStorage.setItem).toBeCalledWith("products",JSON.stringify(newProduct));
   });

   it("should create array of products", () => {
      const product = {
         id: "testId",
         name: "testName",
         price: "10",
         available: "true",
      };

      const newProduct = [
         {
            id: "testId",
            name: "testName",
            price: "10",
            available: "true",
         },
      ];

      const resultProduct = saveProductData(product);

      expect(resultProduct).toEqual(newProduct);
   });
});

