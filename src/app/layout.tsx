import '~/ui/styles/base.css';

import { ThemeContainer } from '~/ui/components/theme-container';
import { Inter } from 'next/font/google';
import { cn } from '~/shared/en';
import { Background } from '~/ui/components/background';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Node Run - PlayGround',
  description: 'fast run javascript, typescript and nodejs ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <ThemeContainer>
          <Background>{children}</Background>
        </ThemeContainer>
      </body>
    </html>
  );
}
