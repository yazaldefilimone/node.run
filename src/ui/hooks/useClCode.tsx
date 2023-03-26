import { useAtom } from 'jotai';
import { clCode } from '../atom/cl-code';

export const useCLCode = () => {
  const atom = useAtom(clCode);

  return atom;
};
