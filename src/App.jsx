//App.jsx

import Title from './components/Title.jsx';
import Form from './components/Form.jsx';
import Results from './components/Results.jsx';
import AiSuggestion from './components/AiSuggestion.jsx';
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

  const [aiSuggestion, setAiSuggestion] = useState('');

  const getWeather = (e) => {
      e.preventDefault();
      fetch ("https://api.weatherapi.com/v1/current.json?key=e200b57619284cd086b104419260408&q=" + city + "&aqi=no")
      .then(res=> res.json())
      .then(data => {
        getResults({
        country : data.location.country,
        cityName : data.location.name,
        temperature : data.current.temp_c,
        conditionText : data.current.condition.text,
        icon : data.current.condition.icon
      });
      getAiSuggestion(data);  
  })
}

  const getAiSuggestion = (weatherData) =>{
    const prompt = `現在の天気データです。場所は${weatherData.location.name}、国は${weatherData.location.country}、気温は${weatherData.current.temp_c}°C、天気の状態は${weatherData.current.condition.text}です。これらの情報をもとに、今日のおすすめの服装を日本語で80文字程度で提案してください。`;
    fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`
      },
      body: JSON.stringify({
        model: "openrouter/free",
        messages: [
          { role: "user", content: prompt }
        ]
      })
    })
    .then(res => res.json())
    .then(data => setAiSuggestion(data.choices[0].message.content))
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather} />
        <Results results={results} />
        <AiSuggestion suggestion={aiSuggestion}  />
      </div>
    </div>
  )
}

export default App;