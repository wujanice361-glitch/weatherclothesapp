//App.jsx
import Title from './components/Title.jsx'
import Form from './components/Form.jsx'
import Results from './components/Results.jsx'
import { useState } from 'react';

const App = () => {
  const [city, setCity] = useState('');

  const [results,getResults] = useState({
    country:"",
    cityName:"",
    temperature:"",
    conditionText:"",
    icon:""
  });

  const getWeather = (e) => {
      e.preventDefault();
      fetch ("https://api.weatherapi.com/v1/current.json?key=e200b57619284cd086b104419260408&q=" + city + "&aqi=no")
      .then(res=> res.json())
      .then(data => getResults({
        country : data.location.country,
        cityName : data.location.name,
        temperature : data.current.temp_c,
        conditionText : data.current.condition.text,
        icon : data.current.condition.icon
      })
    )
  }
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather} />
        <Results results={results} />
      </div>
    </div>
  )
}

export default App;