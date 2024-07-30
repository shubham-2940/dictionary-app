import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import Result from "./components/Result";
import backgroundImage from "./assets/istockphoto-522878692-612x612.jpg"; 

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
    <div
      className="container-fluid p-3"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="text-center mt-5">
        <span className="bg-danger text-white py-2 px-3 rounded">Dictionary App</span>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Search
          searchData={search}
          searchHandler={changeSearch}
          searchMeaning={searchMeaningHandler}
        />
      </div>
      <div className="mt-4">
        <Result meaningData={meaning} />
      </div>
    </div>
  );
}

export default App;
