export type SnakeToCamelCase<S extends string> =
  S extends `${infer First}_${infer Rest}`
    ? `${First}${Capitalize<SnakeToCamelCase<Rest>>}`
    : S;

export type ConvertSnakeToCamel<T> = T extends object
  ? T extends Array<infer U>
    ? Array<ConvertSnakeToCamel<U>>
    : {
        [K in keyof T as SnakeToCamelCase<K & string>]: ConvertSnakeToCamel<
          T[K]
        >;
      }
  : T;

export function snakeToCamel<T>(data: T): ConvertSnakeToCamel<T> {
  // Обработка примитивов и null
  if (typeof data !== "object" || data === null) {
    return data as any;
  }

  // Обработка массивов
  if (Array.isArray(data)) {
    var newArray = [];
    for (var i = 0; i < data.length; i++) {
      newArray[i] = snakeToCamel(data[i]);
    }
    return newArray as any;
  }

  // Обработка объектов
  var newObj: any = {};
  var keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++) {
    var originalKey = keys[i];
    var value = (data as any)[originalKey];

    // Преобразование ключа
    var camelKey = originalKey.replace(/_([a-z])/g, function (_, letter) {
      return letter.toUpperCase();
    });

    // Рекурсивный вызов
    newObj[camelKey] = snakeToCamel(value);
  }
  return newObj as any;
}
