import clsx, { ClassDictionary } from 'clsx';

export type cnDictionaryType = {
  [x: string]: any;
};

export type cnType = cnDictionaryType | string | number | null | boolean | undefined;

export const cn = (...input: cnType[]): string => {
  return clsx(input);
};
