export const minBy = <T, U extends number | string>(array: T[], cb: (item: T) => U): T | undefined => {
  if (array.length === 0) {
    return undefined;
  }

  let minItem = array[0];
  let minValue = cb(minItem as T);

  for (const item of array) {
    const value = cb(item);
    if (value < minValue) {
      minValue = value;
      minItem = item;
    }
  }

  return minItem;
};

export const maxBy = <T, U extends number | string>(array: T[], cb: (item: T) => U): T | undefined => {
  if (array.length === 0) {
    return undefined;
  }

  let maxItem = array[0];
  let maxValue = cb(maxItem as T);

  for (const item of array) {
    const value = cb(item);
    if (value > maxValue) {
      maxValue = value;
      maxItem = item;
    }
  }

  return maxItem;
};
