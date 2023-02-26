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
    <header className="flex">
      <h1>Where in the world?</h1>
      <button onClick={toggleTheme}>
        <i className="fa-regular fa-moon"></i>
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
};

export default Header;
