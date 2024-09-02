import { GetServerSideProps } from 'next';
import { useState } from 'react';
import useFetchCountries from '@/hooks/useFetchCountryData';
import { searchCountries } from '../utils/searchCountries';
import { sortCountriesByPopulation } from '../utils/sortCountries';
import filterCountriesByRegion from '../utils/filterCountriesByRegion';
import CountryCard from '../components/CountryCard';
import ThemeToggleButton from '../components/ThemeToggleButton';
import { IconButton, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { useTheme } from '@/context/ThemeContext';
import { styled } from '@mui/material/styles';
import { Country } from '@/utils/types';

interface HomeProps {
  initialCountries: Country[];
}

const Home = ({ initialCountries }: HomeProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortAscending, setSortAscending] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState('All');

  const { isDarkMode } = useTheme();

  const handleRegionChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedRegion(event.target.value as string);
  };

  const filteredCountries = searchCountries(initialCountries, searchQuery);
  const regionFilteredCountries = filterCountriesByRegion(filteredCountries, selectedRegion);
  const sortedCountries = sortCountriesByPopulation(regionFilteredCountries, sortAscending);

  const StyledSelect = styled(Select)(({ theme }) => ({
    color: isDarkMode ? '#ffffff' : '#000000',
    backgroundColor: isDarkMode ? '#303030' : '#ffffff',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: isDarkMode ? '#ffffff' : '#000000',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: isDarkMode ? '#ffffff' : '#000000',
    },
    '& .MuiSvgIcon-root': {
      color: isDarkMode ? '#ffffff' : '#000000',
    },
  }));

  return (
    <div className="pageContainer">
      <div className="header">
        <div className="sort-buttons">
          {!sortAscending ? (
            <IconButton onClick={() => setSortAscending(true)} aria-label="Sort Ascending">
              <ArrowDownward color={isDarkMode ? 'secondary' : 'action'} />
            </IconButton>
          ) : (
            <IconButton onClick={() => setSortAscending(false)} aria-label="Sort Descending">
              <ArrowUpward color={isDarkMode ? 'secondary' : 'action'} />
            </IconButton>
          )}
          Sort by Population
        </div>
        <input
          type="text"
          placeholder="Search by name or capital"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            height: '30px',
            fontSize: '16px',
            padding: '5px',
            borderRadius: '5px',
            width: '300px',
            marginRight: '20px',
            color: isDarkMode ? '#ffffff' : '#000000',
            backgroundColor: isDarkMode ? '#303030' : '#ffffff',
            borderColor: isDarkMode ? '#ffffff' : '#000000',
          }}
        />
        <StyledSelect
          value={selectedRegion}
          onChange={handleRegionChange}
          style={{ height: '40px', fontSize: '16px', borderRadius: '5px', width: '150px' }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="Americas">Americas</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </StyledSelect>
        <ThemeToggleButton />
      </div>
      <div className="country-grid">
        {sortedCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  
  return {
    props: {
      initialCountries: data,
    },
  };
};

export default Home;