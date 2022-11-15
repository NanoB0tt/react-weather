import { nanoid } from "nanoid";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { City, LatLon } from "../interfaces/interfaces";
import { getCityData } from "../services/getCityData";

interface Props {
  setLatLon: Dispatch<SetStateAction<LatLon | null>>;
}

const SearchBar = ({ setLatLon }: Props) => {
  const [searchResult, setSearchResult] = useState<City[] | null>(null);
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState("");


  useEffect(() => {
    if (submit !== "") {
      const searchFunc = async () => {
        const data = await getCityData(submit);
        setSearchResult(data);
      }
      searchFunc();
    }
  }, [submit])

  return (
    <div>
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
    </div>
  )
}

export default SearchBar;
