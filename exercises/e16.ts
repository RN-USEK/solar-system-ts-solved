// see e16.md

// DO NOT USE `any` for this, you will need to use generics in order to pass both the vitest tests and the tsc compiler
export function find<T>(array: T[], callback: (value: T | undefined, index: number, array: T[]) => boolean): T | undefined {
  for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
          return array[i];
      }
  }
  return undefined;
}