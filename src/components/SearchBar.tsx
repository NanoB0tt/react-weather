import { nanoid } from "nanoid";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { City, LatLon } from "../interfaces/interfaces";
import { getCity } from "../services/getCity";

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
  }, [submit])

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        setSubmit(input);
      }}>
        <input onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {searchResult && searchResult.map((city) => (
        <div
          key={nanoid()}
          onClick={() => {
            setLatLon({
              lat: city.lat,
              lon: city.lon
            });
          }
          }
        >
          {`${city.name} / ${city.state ? `${city.state},` : ""} ${city.country}`}
        </div>
      ))}
    </>
  )
}

export default SearchBar;
