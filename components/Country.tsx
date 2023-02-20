import Image from "next/image";

export interface Country {
  name: string;
  capital: string;
  flag: string;
  population: number;
  region: string;
  borders: string[];
  topLevelDomain: string[];
  subregion: string;
  nativeName: string;
  languages: {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }[];
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
}

const CountryComponent = (country: Country) => {
  return (
    <article>
      <Image src={country.flag} alt="Country Flag" />
      <h2>{country.name}</h2>
      <p>
        <span>Population: </span>
        {country.population}
      </p>
      <p>
        <span>Region: </span>
        {country.region}
      </p>
      <p>
        <span>Capital: </span>
        {country.capital}
      </p>
    </article>
  );
};

export default CountryComponent;
