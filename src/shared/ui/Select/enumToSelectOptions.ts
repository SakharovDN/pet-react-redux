import { SelectOption } from './Select';

export const enumToSelectOptions = <T extends Record<string, number | string>>(
  enumType: T,
  options?: { getLabel?: (key: T[keyof T]) => string; numeric?: boolean }
): SelectOption<T[keyof T]>[] =>
  Object.values(enumType)
    .filter((item) => (options?.numeric ? !isNaN(Number(item)) : true))
    .map((item) => ({
      value: item as T[keyof T],
      label: options?.getLabel?.(item as T[keyof T]) ?? item.toString(),
    }));
