import React from 'react';
import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <Link href="/" className='logo'>
        <h1>{"Seohyun's blog"}</h1>
      </Link>
      <Nav />
    </header>
  );
}
