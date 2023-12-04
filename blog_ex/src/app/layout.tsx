import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

import { Advent_Pro } from 'next/font/google';
import { Noto_Sans } from 'next/font/google';

const noto = Noto_Sans({ weight: '500', subsets: ['latin'] });
const advent = Advent_Pro({ weight: '700', subsets: ['latin'] });

export const metadata: Metadata = {
  title: '서현 버전1 블로그',
  description: '연습용 블로그',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={noto.className}>
      <body>
        <header>
          <h1>
            <Link href="/">서현 블로그</Link>
          </h1>
          <nav>
            <Link href="/about">about</Link>
            <Link href="/posts">posts</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
