import { Country } from "@/components/Country";
import CountryComponent from "@/components/Country";
import { useState } from "react";

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
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania", "Clear"];

  const [showRegion, toggleRegion] = useState(false);

  const [keyword, setKeyword] = useState("");
  const [region, setRegion] = useState("");

  const handleKeyword = (event: any) => {
    setKeyword(event.target.value);
  };

  const results = data
    .filter((e) => e.name.common.toLowerCase().includes(keyword.toLowerCase()))
    .filter((e) => e.region.includes(region));

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
            value={keyword}
            onChange={handleKeyword}
          />
        </div>
        <button
          onClick={() => toggleRegion(!showRegion)}
          className="card rounded shadow py-3 px-6 relative flex items-center gap-8 text-xs">
          <span>{region == "" ? "Filter by Region" : region}</span>
          <i className="fa-solid fa-chevron-down fa-xs"></i>
          {showRegion && (
            <div className="absolute top-12 left-0 right-0 my-2 py-2 card rounded shadow flex flex-col">
              {regions.map((e, i) => {
                return (
                  <span
                    key={e}
                    style={
                      i === regions.length - 1
                        ? {
                            color: "red",
                          }
                        : {}
                    }
                    onClick={() => {
                      toggleRegion(false);
                      if (i === regions.length - 1) {
                        setRegion("");
                      } else {
                        setRegion(e);
                      }
                    }}
                    className="px-6 py-1 text-left cursor-pointer">
                    {e}
                  </span>
                );
              })}
            </div>
          )}
        </button>
      </div>
      <div className="flex gap-8 flex-wrap justify-evenly md:justify-around">
        {results.map((country, index) => {
          return <CountryComponent key={index} country={country} />;
        })}
      </div>
    </main>
  );
}
