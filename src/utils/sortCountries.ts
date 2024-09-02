import { Country } from './types';

export const sortCountriesByPopulation = (
  countries: Country[],
  ascending: boolean = true
): Country[] => {
  return countries.sort((a, b) =>
    ascending ? a.population - b.population : b.population - a.population
  );
};