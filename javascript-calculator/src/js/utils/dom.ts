export const $ = <T>(selector: string) => document.querySelector(selector) as unknown as T;
