import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './CountryCard.module.css';
import { Country } from '../utils/types';
import { useTheme } from '@/context/ThemeContext';

interface Props {
  country: Country;
}

const CountryCard: React.FC<Props> = ({ country }) => {
  const router = useRouter();
  const { isDarkMode } = useTheme();

  const handleClick = () => {
    router.push({
      pathname: `/${country.cca3}`,
      query: {
        name: country.name.common,
        officialName: country.name.official,
        capital: country.capital?.[0] || 'N/A',
        population: country.population || 'N/A',
        region: country.region || 'N/A',
        subregion: country.subregion || 'N/A',
        flag: country.flags.png,
        languages: JSON.stringify(country.languages || {}),
        currencies: JSON.stringify(country.currencies || {}),
        timezones: country.timezones.join(', ') || 'N/A',
        googleMaps: country.maps.googleMaps || 'N/A',
        openStreetMaps: country.maps.openStreetMaps || 'N/A',
      },
    });
  };

  const formatData = (data: string | undefined) => (data ? data : 'N/A');

  return (
    <div
      className={`${styles.countryCard} ${isDarkMode ? styles.countryCardDark : styles.countryCardLight}`}
      onClick={handleClick}
    >
      <div className={styles.imageBox}>
        <Image
          src={country.flags.png}
          alt={`${country.name.common} flag`}
          width={100}
          height={60}
          layout="intrinsic"
          style={{ borderColor: isDarkMode ? 'white' : '#303030' }}
        />
      </div>
      <div className={styles.countryName}>{formatData(country.name.common)}</div>
      <div className={styles.textContainer}>
        <div className={`${isDarkMode ? styles.titleDark : styles.title}`}>Capital: </div>
        <div className={styles.data}>{formatData(country.capital?.[0])}</div>
      </div>
      <div className={styles.textContainer}>
        <div className={`${isDarkMode ? styles.titleDark : styles.title}`}>Population: </div>
        <div className={styles.data}>{country.population ? country.population.toLocaleString() : 'N/A'}</div>
      </div>
      <div className={styles.textContainer}>
        <div className={`${isDarkMode ? styles.titleDark : styles.title}`}>Region: </div>
        <div className={styles.data}>{formatData(country.region)}</div>
      </div>
    </div>
  );
};

export default CountryCard;