import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const [isIndex, setIsIndex] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsIndex(router.pathname === '/');
  }, [router]);

  return (
    <header>
      <a className="linkStyle" href="/">
        {isIndex ? (
          <h1 className="h1Ttl">Celestium Analytics-AI</h1>
        ) : (
          <p className="h1Ttl">Celestium Analytics-AI</p>
        )}
      </a>
    </header>
  );
}