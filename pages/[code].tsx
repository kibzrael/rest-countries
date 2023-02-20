import { Country } from "@/components/Country";
import Image from "next/image";
import { useRouter } from "next/router";

const CountryPage = (country: Country) => {
  const router = useRouter();
  const { code } = router.query;

  return (
    <main>
      <button>
        <i className="fa-solid fa-arrow-left-long"></i>
        Back
      </button>
      <article>
        <Image src={country.flag} alt="Country Flag" />
        <div>
          <h2>{country.name}</h2>
          <div>
            <dl>
              <dt>
                Native Name:
                <dd>{country.nativeName}</dd>
              </dt>
              <dt>
                Population:
                <dd>{country.population}</dd>
              </dt>
              <dt>
                Region:
                <dd>{country.region}</dd>
              </dt>
              <dt>
                Sub Region:
                <dd>{country.subregion}</dd>
              </dt>
              <dt>
                Capital:
                <dd>{country.capital}</dd>
              </dt>
            </dl>
            <dl>
              <dt>
                Top Level Domain:
                <dd>{country.topLevelDomain}</dd>
              </dt>
              <dt>
                Currencies:
                {country.currencies.map((value, index) => {
                  return <dd key={index}>{value.name}</dd>;
                })}
              </dt>
              <dt>
                Languages:
                {country.languages.map((value, index) => {
                  return <dd key={index}>{value.name}</dd>;
                })}
              </dt>
            </dl>
          </div>
          <span>
            Border Countries:
            <ul>
              {country.borders.map((value, index) => {
                return <li key={index}>{value}</li>;
              })}
            </ul>
          </span>
        </div>
      </article>
    </main>
  );
};

export default CountryPage;
