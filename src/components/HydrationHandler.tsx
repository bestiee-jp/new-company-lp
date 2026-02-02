'use client';

import { useEffect } from 'react';

export default function HydrationHandler() {
  useEffect(() => {
    document.body.classList.add('hydrated');
  }, []);

  return null;
}
