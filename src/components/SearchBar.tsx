import { useEffect, useState } from "react";

const SearchBar = () => {
  const [searchResult, setSearchResult] = useState<CityName[] | null>(null);
  const [input, setInput] = useState("");
  const [{ lat, lon }, setLatLon] = useState({} as CityName);


  useEffect(() => {
    const searchFunc = async () => {
      const data = await fetch("response.json")
        .then(response => response.json())
        .catch(err => console.error(err));
      setSearchResult(data);
    }
    searchFunc();
  }, [])
  console.log(lat, lon)

  return (
    <div>
      <h1>Hello from searchBar</h1>
      <input onChange={(e) => setInput(e.target.value)} />
      {searchResult && searchResult.map((city) => (
        <div
          key={city.name}
          onClick={() => setLatLon(
            {
              lat: city.lat,
              lon: city.lon
            }
          )}
        >
          {city.name + " / " + city.state}
        </div>
      ))}
    </div>
  )
}

export default SearchBar;
