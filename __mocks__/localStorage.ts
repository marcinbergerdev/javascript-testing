import { vi } from "vitest";

export const localStorage = {
   storage: {},
   setItem: vi.fn(function (key: string, value: any): undefined {
      return (this.storage[key] = value || "");
   }),
   getItem: vi.fn(function (key: string): any | null {
      return key in this.storage ? this.storage[key] : null;
   }),
   removeItem: vi.fn(function (key: any) {
      delete this.storage[key];
   }),
   get: vi.fn(function length() {
      return Object.keys(this.storage).length;
   }),
   key: vi.fn(function (i: any) {
      const keys = Object.keys(this.storage);
      return keys[i] || null;
   }),
   clear: vi.fn(function () {
      this.storage = {};
   }),
};
