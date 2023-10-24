'use client';
import React, { useState } from 'react';

export default function Counter() {
  const [count, setCcount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCcount((num) => num + 1)}>button</button>
    </div>
  );
}
