import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Result from "./components/Result";

function App() {
  const [search, setSearch] = useState("");
  const [meaning, setMeaning] = useState([]);

  const changeSearch = (value) => {
    setSearch(value);
  };

  const searchMeaningHandler = () => {
    if (search !== "") {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response was not ok " + response.statusText
            );
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setMeaning(data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  };

  return (
    <div className="all">
      <div className="final">
        <span className="heading">Dictionary App</span>
      </div>
      <div>
        <Search
          searchData={search}
          searchHandler={changeSearch}
          searchMeaning={searchMeaningHandler}
        />
      </div>
      <div className="result">
        <Result meaningData={meaning} />
      </div>
    </div>
  );
}

export default App;
