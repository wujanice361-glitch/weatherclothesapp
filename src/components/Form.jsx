//Form.jsx

const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="enter city name here!" onChange = {e=>props.setCity(e.target.value)}/>
            <button type="submit">Proceed</button>
        </form>
    )
}

export default Form;