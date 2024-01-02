import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="banner__container">
      <div className="banner__img">
        <Image
          src={`/images/jjanggu.gif`}
          alt="iam"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      <div className="banner__txt">
        <h2>SeoHyun</h2>
        <p>Frontend Developer</p>
        <Link href="/contact" className="banner__link">
          contact me♥
        </Link>
      </div>
    </section>
  );
}
