import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { City, LatLon } from "../interfaces/interfaces";

interface Props {
  setLatLon: Dispatch<SetStateAction<LatLon | null>>;
}

const SearchBar = ({ setLatLon }: Props) => {
  const [searchResult, setSearchResult] = useState<City[] | null>(null);
  /* const [input, setInput] = useState(""); */


  useEffect(() => {
    const searchFunc = async () => {
      const data = await fetch("response.json")
        .then(response => response.json())
        .catch(err => console.error(err));
      setSearchResult(data);
    }
    searchFunc();
  }, [])

  return (
    <div>
      <h1>Hello from searchBar</h1>
      {/* <input onChange={(e) => setInput(e.target.value)} /> */}
      {searchResult && searchResult.map((city) => (
        <div
          key={city.name}
          onClick={() => {
            setLatLon({
              lat: city.lat,
              lon: city.lon
            });
          }
          }
        >
          {city.name + " / " + city.state}
        </div>
      ))}
    </div>
  )
}

export default SearchBar;
