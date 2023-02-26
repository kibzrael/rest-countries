import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  let [theme, setTheme] = useState("light");

  useEffect(() => loadTheme);

  function loadTheme() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }

  function toggleTheme() {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
    loadTheme();
    console.log("Theme changed", localStorage.theme);
  }

  return (
    <header className="card py-5 shadow flex justify-between">
      <Link href="/">
        <h1 className="text-xl font-extrabold">Where in the world?</h1>
      </Link>
      <button className="font-semibold text-sm" onClick={toggleTheme}>
        <i
          className={
            "fa-" + (theme === "light" ? "regular" : "solid") + " fa-moon mr-2"
          }></i>
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
};

export default Header;
