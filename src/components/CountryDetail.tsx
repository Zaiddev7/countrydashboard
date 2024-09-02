import React from 'react';
import Image from 'next/image';
import { Country } from '../utils/types';
import { useTheme } from '@/context/ThemeContext';
import styles from './CountryDetail.module.css';
import ThemeToggleButton from './ThemeToggleButton';

interface Props {
  country: Country;
}

const CountryDetail: React.FC<Props> = ({ country }) => {
  const { isDarkMode } = useTheme();

  if (!country) return <p>No details available.</p>;

  const formatData = (data: string | undefined) => (data ? data : 'N/A');

  return (
    <div className={styles.pageContainer}>
      <div className={styles.detailsHeader}>
        <ThemeToggleButton />
      </div>
      <div className={`${styles.countryDetail} ${isDarkMode ? styles.countryDetailDark : styles.countryDetailLight}`}>
        <div className={styles.headerContainer}>
          <div className={styles.imageBox}>
            <Image
              src={country.flags.png}
              alt={`${country.name.common} flag`}
              width={200}
              height={120}
              layout="intrinsic"
              style={{ borderColor: isDarkMode ? 'white' : 'black' }}
            />
          </div>
          <div className={styles.countryName}>{formatData(country.name.common)}</div>
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.textContainer}>
            <div className={`${isDarkMode ? styles.titleDark : styles.title}`}>Official Name:</div>
            <div className={styles.data}>{formatData(country.name.official)}</div>
          </div>
          <div className={styles.textContainer}>
            <div className={`${isDarkMode ? styles.titleDark : styles.title}`}>Capital:</div>
            <div className={styles.data}>{formatData(country.capital?.[0])}</div>
          </div>
          <div className={styles.textContainer}>
            <div className={`${isDarkMode ? styles.titleDark : styles.title}`}>Population:</div>
            <div className={styles.data}>{country.population ? country.population.toLocaleString() : 'N/A'}</div>
          </div>
          <div className={styles.textContainer}>
            <div className={`${isDarkMode ? styles.titleDark : styles.title}`}>Region:</div>
            <div className={styles.data}>{formatData(country.region)}</div>
          </div>
          <div className={styles.textContainer}>
            <div className={`${isDarkMode ? styles.titleDark : styles.title}`}>Subregion:</div>
            <div className={styles.data}>{formatData(country.subregion)}</div>
          </div>
          <div className={styles.textContainer}>
            <div className={`${isDarkMode ? styles.titleDark : styles.title}`}>Languages:</div>
            <div className={styles.data}>{Object.values(country.languages || {}).join(', ') || 'N/A'}</div>
          </div>
          <div className={styles.textContainer}>
            <div className={`${isDarkMode ? styles.titleDark : styles.title}`}>Currencies:</div>
            <div className={styles.data}>
              {Object.values(country.currencies || {}).map(c => c.name).join(', ') || 'N/A'}
            </div>
          </div>
          <div className={styles.textContainer}>
            <div className={`${isDarkMode ? styles.titleDark : styles.title}`}>Timezones:</div>
            <div className={styles.data}>{country.timezones.join(', ') || 'N/A'}</div>
          </div>
          <div className={styles.textContainer}>
            <div className={`${isDarkMode ? styles.titleDark : styles.title}`}>Maps:</div>
            <div className={styles.data}>
              <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">
                Google Maps
              </a>
              ,{' '}
              <a href={country.maps.openStreetMaps} target="_blank" rel="noopener noreferrer">
                OpenStreetMaps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;