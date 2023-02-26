import { Country } from "@/components/Country";
import CountryComponent from "@/components/Country";

export async function getServerSideProps(context: any) {
  let response = await fetch("https://restcountries.com/v3.1/all")
    .then((e) => e.json())
    .catch((e) => []);
  return {
    props: {
      data: response,
    },
  };
}

interface Props {
  data: Country[];
}

export default function Home({ data }: Props) {
  console.log("Countries: ", data);
  return (
    <main>
      <div className="py-8 flex flex-wrap justify-between gap-8">
        <div className="card py-4 px-6 rounded shadow-md flex gap-6 w-full max-w-sm text-light-input dark:text-dark-text">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            name="keyword"
            id="keyword"
            placeholder="Search for a country..."
            className="text-xs flex-grow"
          />
        </div>
        <button className="card rounded shadow py-3 px-6 flex items-center gap-8 text-xs">
          <span>Filter by Region</span>
          <i className="fa-solid fa-chevron-down fa-xs"></i>
        </button>
      </div>
      <div className="flex gap-8 flex-wrap justify-between">
        {data.map((country, index) => {
          return <CountryComponent key={index} country={country} />;
        })}
      </div>
    </main>
  );
}
