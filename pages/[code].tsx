import { Country } from "@/components/Country";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export async function getServerSideProps(context: any) {
  const code = context.query.code;
  let response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then((e) => e.json())
    .catch((e) => []);
  if (!response.length) {
    return { notFound: true };
  }
  console.log("Response:", response);
  return {
    props: { country: response[0] },
  };
}

interface Props {
  country: Country;
}

const CountryPage = ({ country }: Props) => {
  console.log("Country", country);
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
        <article className="flex items-center justify-between gap-8">
          <Image
            width={450}
            height={300}
            className="object-fill aspect-[3/2]"
            src={country.flags.svg}
            alt="Country Flag"
          />
          <div className="flex flex-col gap-12">
            <h2 className="font-extrabold text-3xl">{country.name.common}</h2>
            <div className="flex gap-4">
              <div>
                <div>
                  <span>Native Name:</span>
                  {country.nativeName}
                </div>

                <div>
                  <span>Population:</span>
                  {country.population}
                </div>

                <div>
                  <span>Region:</span>
                  {country.region}
                </div>

                <div>
                  <span>Sub Region:</span>
                  {country.subregion}
                </div>

                <div>
                  <span>Capital:</span>
                  {country.capital}
                </div>
              </div>
              <div>
                <div>
                  <span>Top Level Domain: </span>
                  {country.tld.map((value, index) => {
                    return <span key={index}>{value}</span>;
                  })}
                </div>
                <div>
                  <span>Currencies: </span>
                  {Object.keys(country.currencies).map((key, index) => {
                    return (
                      <span key={key + index}>
                        {country.currencies[key].name}
                      </span>
                    );
                  })}
                </div>
                <div>
                  <span>Languages: </span>
                  {Object.keys(country.languages).map((key, index) => {
                    return (
                      <span key={key + index}>{country.languages[key]}</span>
                    );
                  })}
                </div>
              </div>
            </div>
            <ul className="flex flex-wrap items-center gap-3 ">
              <span className="font-semibold">Border Countries:</span>
              {country.borders.map((value, index) => {
                return (
                  <li
                    key={"border" + index}
                    className="px-6 py-1 card rounded shadow-lg text-xs">
                    {value}
                  </li>
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
