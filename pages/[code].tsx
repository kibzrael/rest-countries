import { Country } from "@/components/Country";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export async function getServerSideProps(context: any) {
  const code = context.query.code;
  let response = await fetch(`https://restcountries.com/v3.1/all`)
    .then((e) => e.json())
    .catch((e) => []);
  if (!response.length) {
    return { notFound: true };
  }
  return {
    props: {
      country: response.filter((e: { cca3: any }) => e.cca3 === code)[0],
      data: response,
    },
  };
}

interface Props {
  country: Country;
  data: Country[];
}

const CountryPage = ({ country, data }: Props) => {
  return (
    <>
      <Head>
        <title>{country.name.common}</title>
        <link
          rel="shortcut icon"
          href={country.flags.svg}
          type="image/x-icon"
        />
      </Head>
      <main className="flex flex-col">
        <Link
          href="/"
          className="self-start my-16 px-8 py-2 card rounded-md shadow-lg">
          <i className="fa-solid fa-arrow-left-long mr-4"></i>
          Back
        </Link>
        <article className="flex flex-col sm:flex-row items-center justify-between gap-10 sm:gap-20 lg:gap-32">
          <Image
            width={450}
            height={300}
            className="object-fill aspect-[3/2] w-full sm:max-w-[45vw] lg:max-w-[35vw]"
            src={country.flags.svg}
            alt="Country Flag"
          />
          <div className="flex-grow flex flex-col gap-6">
            <h2 className="font-extrabold text-3xl">{country.name.common}</h2>
            <div className="details flex flex-wrap gap-4 justify-between whitespace-nowrap">
              <div>
                <div>
                  <span className="title">Native Name:</span>
                  {country.name.official}
                </div>

                <div>
                  <span className="title">Population:</span>
                  {country.population}
                </div>

                <div>
                  <span className="title">Region:</span>
                  {country.region}
                </div>

                <div>
                  <span className="title">Sub Region:</span>
                  {country.subregion}
                </div>

                <div>
                  <span className="title">Capital:</span>
                  {country.capital}
                </div>
              </div>
              <div>
                <div>
                  <span className="title">Top Level Domain: </span>
                  {country.tld.map((value, index) => {
                    return (
                      <span key={index}>
                        {value}
                        {index < country.tld.length - 1 ? ", " : ""}
                      </span>
                    );
                  })}
                </div>
                <div>
                  <span className="title">Currencies: </span>
                  {Object.keys(country.currencies).map((key, index) => {
                    return (
                      <span key={key + index}>
                        {country.currencies[key].name}
                        {index < Object.keys(country.currencies).length - 1
                          ? ", "
                          : ""}
                      </span>
                    );
                  })}
                </div>
                <div>
                  <span className="title">Languages: </span>
                  {Object.keys(country.languages).map((key, index) => {
                    return (
                      <span key={key + index}>
                        {country.languages[key]}
                        {index < Object.keys(country.languages).length - 1
                          ? ", "
                          : ""}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            <ul className="flex flex-wrap items-center gap-3 sm:my-12">
              <span className="font-semibold">Border Countries:</span>
              {country.borders.map((value, index) => {
                return (
                  <Link key={"border" + index} href={`/${value}`}>
                    <li className="px-6 py-2 card rounded shadow-lg text-xs">
                      {data.filter((e) => e.cca3 === value)[0].name.common}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </article>
      </main>
    </>
  );
};

export default CountryPage;
