export function objectToMap<K, T>(source: Object) {
  return new Map(Object.entries(source));
}

export function arrayToMap<T, K extends keyof T>(array: Array<T>, property: K) {
  const map = new Map<T[K], T>();
  for (const item of array) {
    map.set(item[property], item);
  }
  return map;
}
