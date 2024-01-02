import React from 'react';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <li>
        <Link href="/">home</Link>
      </li>
      <li>
        <Link href="/about">about</Link>
      </li>
      <li>
        <Link href="/posts">posts</Link>
      </li>
      <li>
        <Link href="/contact">contact</Link>
      </li>
    </nav>
  );
}
