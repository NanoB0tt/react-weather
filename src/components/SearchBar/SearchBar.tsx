import { nanoid } from "nanoid";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { City, LatLon } from "../../interfaces/interfaces";
import { getCity } from "../../services/getCity";
import { FaSearch } from "react-icons/fa";
import "./style.css";

interface Props {
  setLatLon: Dispatch<SetStateAction<LatLon | null>>;
}

const SearchBar = ({ setLatLon }: Props) => {
  const [searchResult, setSearchResult] = useState<City[] | null>(null);
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState("");


  useEffect(() => {
    if (submit !== "") {
      const searchFunc = () => {
        getCity(submit).then(setSearchResult);
      }
      searchFunc();
    }
  }, [submit]);

  return (
    <div className="search-container">
      <form onSubmit={(e) => {
        e.preventDefault();
        setSubmit(input);
      }}>
        <input onChange={(e) => setInput(e.target.value)} value={input} />
        <button type="submit"><FaSearch></FaSearch></button>
      </form>
      <ul className="items-list">
        {searchResult && searchResult.map((city) => (
          <li
            key={nanoid()}
            onClick={() => {
              setLatLon({
                lat: city.lat,
                lon: city.lon
              });
              setSearchResult(null);
              setInput("");
            }
            }
            className="search-item"
          >
            {`${city.name} / ${city.state ? `${city.state},` : ""} ${city.country}`}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchBar;
