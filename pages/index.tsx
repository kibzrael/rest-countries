import CountryComponent from "@/components/Country";

export default function Home() {
  return (
    <main>
      <div>
        <div>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" name="keyword" id="keyword" />
        </div>
        <div>
          <span>Filter by Region</span>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </main>
  );
}
