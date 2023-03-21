import { ComponentPropsWithRef, FunctionComponent } from 'react';
import { cn } from '~/shared/en';

export const Background: FunctionComponent<ComponentPropsWithRef<'div'>> = ({ children }) => {
  return <div className={cn('h-screen w-screen overflow-hidden bg-zinc-900')}>{children}</div>;
};
