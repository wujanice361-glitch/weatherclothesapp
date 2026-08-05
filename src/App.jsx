//App.jsx

import Title from './components/Title.jsx';
import Form from './components/Form.jsx';
import Results from './components/Results.jsx';
import AiSuggestion from './components/AiSuggestion.jsx';
import { useState } from 'react';

const App = () => {
  const [city, setCity] = useState('');

  const [results, setResults] = useState({
    country:"",
    cityName:"",
    temperature:"",
    conditionText:"",
    icon:""
  });

  const [aiSuggestion, setAiSuggestion] = useState('');

  const [loading, setLoading] = useState(false);

  const getWeather = (e) => {
      e.preventDefault();
      setAiSuggestion(''); // 前回のAI提案をリセット
      fetch ("https://api.weatherapi.com/v1/current.json?key=" + import.meta.env.VITE_WEATHER_API_KEY + "&q=" + city + "&aqi=no")
      .then(res=> res.json())
      .then(data => {
        setResults({
          country : data.location.country,
          cityName : data.location.name,
          temperature : data.current.temp_c,
          conditionText : data.current.condition.text,
          icon : data.current.condition.icon
        });
      getAiSuggestion(data);  
      })
    .catch(err => {
        console.error(err);
    })
}
  

  const getAiSuggestion = (weatherData) =>{
    const prompt = `現在の天気データです。場所は${weatherData.location.name}、国は${weatherData.location.country}、気温は${weatherData.current.temp_c}°C、天気の状態は${weatherData.current.condition.text}です。これらの情報をもとに、今日のおすすめの服装を英語で80文字程度で提案してください。`;
    
    setLoading(true);
    
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
    .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false); // 成功・失敗にかかわらずローディング解除
      });
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather} />
        <Results results={results} />
        <AiSuggestion suggestion={aiSuggestion} loading={loading} />
      </div>
    </div>
  )
}

export default App;