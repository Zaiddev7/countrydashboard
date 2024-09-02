export interface CountryName {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  }
  
  export interface Currency {
    name: string;
    symbol: string;
  }
  
  export interface Country {
    cca2: string; 
    ccn3: string; 
    cca3: string; 
    name: CountryName;
    tld?: string[]; 
    independent?: boolean;
    unMember: boolean;
    currencies?: {
      [key: string]: Currency;
    };
    idd?: {
      root: string;
      suffixes: string[];
    };
    capital?: string[];
    altSpellings?: string[];
    region: string;
    subregion?: string;
    languages?: {
      [key: string]: string;
    };
    translations?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
    latlng: number[];
    landlocked: boolean;
    area: number; 
    demonyms?: {
      eng: {
        f: string; 
        m: string;
      };
    };
    flag: string;
    flags: {
      png: string;
      svg: string;
    };
    maps: {
      googleMaps: string;
      openStreetMaps: string;
    };
    population: number;
    car?: {
      signs?: string[];
      side: string;
    };
    timezones: string[];
    continents: string[];
    startOfWeek: string;
    capitalInfo?: {
      latlng: number[];
    };
    coatOfArms?: {
      png?: string;
      svg?: string;
    };
  }