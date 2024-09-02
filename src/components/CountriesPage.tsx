import React from 'react';
import CountryList from './CountryList';
import { Country } from '../utils/types';

interface Props {
  countries: Country[];
}

const CountriesPage: React.FC<Props> = ({ countries }) => {
  return (
    <div>
      <h1>Country List</h1>
      <CountryList countries={countries} />
    </div>
  );
};

export default CountriesPage;