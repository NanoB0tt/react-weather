import CityWeather from "./components/CityWeather";

const App = () => {

  /* const API_KEY = "7bdccd0dc9d84769b31404caaf84be08"; */
  /**/
  /* fetch("weatherAPI.json") */
  /*   .then(res => res.json()) */
  /*   .then(data => console.log(data[1].weather.description)); */

  return (
    <div className="App">
      <CityWeather />
    </div>
  )
}

export default App
