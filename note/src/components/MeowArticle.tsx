'use client';

import React, { useEffect, useState } from 'react';
import styles from './Meow.module.css';

export default function MeowArticle() {
  const [text, setText] = useState('loading...');
  useEffect(() => {
    fetch('https://meowfacts.herokuapp.com')
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);

  return <article className={styles.article}>{text}</article>;
}
