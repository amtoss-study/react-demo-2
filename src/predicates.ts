// tell Typescript that the value's type is not undefined
export const notUndefined = <T>(item: T | undefined): item is T => {
  return item !== undefined;
};
