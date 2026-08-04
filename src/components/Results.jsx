//Results.jsx

const Results = (props) => {
    return (
        <div>
            {props.results.country && (
                <div>
                    <h1 className="results-title">Weather Results</h1>
                    <p className="results-country">Country: {props.results.country}</p>
                    <p className="results-city">City: {props.results.cityName}</p>
                    <p className="results-temp">Temperature: {props.results.temperature}°C</p>
                    <p className="results-condition">Condition: {props.results.conditionText}</p>
                    <img src={props.results.icon} alt="Weather icon" />
                </div>
            )}
        </div>
    )
}

export default Results;