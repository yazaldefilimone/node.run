'use client';
import '~/ui/styles/base.css';

import { ThemeContainer } from '~/ui/components/theme-container';
import { Inter } from 'next/font/google';
import { cn } from '~/shared/en';
import { Background } from '~/ui/components/background';
import { ToastWrapper } from '~/ui/components/toast-wrapper';
import { NextApiResponse } from 'next';
import { useEffect } from 'react';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <ThemeContainer>
          <Background>{children}</Background>
          <ToastWrapper />
        </ThemeContainer>
      </body>
    </html>
  );
}

RootLayout.setHeaders = (res: NextApiResponse) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corps');
};
