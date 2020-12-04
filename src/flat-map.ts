type FlatMap = <T, U>(array: T[], callbackfn: (value: T, index: number, array: T[]) => U[]) => U[];

const flatMap: FlatMap = (array, callbackfn) => {
  return Array.prototype.concat(...array.map(callbackfn));
};

export default flatMap;
