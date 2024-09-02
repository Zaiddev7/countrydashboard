import React, { useEffect, useRef, useState } from 'react';
import CountryCard from './CountryCard';
import { Country } from '../utils/types';

interface Props {
  countries: Country[];
}

const CountryList: React.FC<Props> = ({ countries }) => {
  const [visibleCount, setVisibleCount] = useState(10);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prevCount) => prevCount + 10);
        }
      },
      {
        rootMargin: '100px',
      }
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {countries.slice(0, visibleCount).map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
      <div ref={loadMoreRef} style={{ height: '1px' }} />
    </div>
  );
};

export default CountryList;