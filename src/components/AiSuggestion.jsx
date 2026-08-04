//AiSuggestion.jsx

const AiSuggestion = (props) => {
    return (
        <div>
            {props.suggestion && 
            <div className="ai-suggestion">
                <p>AI Suggestion: {props.suggestion}</p>
            </div>
        }
        </div>

    )
}
export default AiSuggestion;