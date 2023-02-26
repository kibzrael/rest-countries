import Image from "next/image";
import Link from "next/link";

export interface Country {
  name: { common: string };
  capital: string;
  flags: { svg: string };
  population: number;
  region: string;
  borders: string[];
  tld: string[];
  subregion: string;
  nativeName: string;
  cca3: string;
  languages: { [key: string]: string };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
}

const CountryComponent = ({ country }: { country: Country }) => {
  return (
    <Link href={`/${country.cca3}`}>
      <article className="card rounded-md shadow max-w-[300px]">
        <Image
          src={country.flags.svg}
          alt="Country Flag"
          className="object-fill aspect-[3/2] rounded-t-md"
          width={300}
          height={200}
        />
        <div className="p-6 text-sm">
          <h2 className="text-lg font-extrabold mb-4 whitespace-normal">
            {country.name.common}
          </h2>
          <div className="text-light-input my-1">
            <span className="inline font-semibold text-light-text dark:text-dark-text">
              Population:{" "}
            </span>
            {country.population}
          </div>
          <div className="text-light-input my-1">
            <span className="inline font-semibold text-light-text dark:text-dark-text">
              Region:{" "}
            </span>
            {country.region}
          </div>
          <div className="text-light-input my-1">
            <span className="inline font-semibold text-light-text dark:text-dark-text">
              Capital:{" "}
            </span>
            {country.capital}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CountryComponent;
