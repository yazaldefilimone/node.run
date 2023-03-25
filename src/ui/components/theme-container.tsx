'use client';
import { FunctionComponent, ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

type themeContainerType = {
  children: ReactNode;
};

export const ThemeContainer: FunctionComponent<themeContainerType> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};
