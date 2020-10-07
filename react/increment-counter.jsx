
function Button(props) {
    return (<button onClick={() => props.handleClickFunction(props.incrementValue)}>{props.incrementValue}</button>);
}

function Display(props) {
    return (<div>{props.message}</div>);
}

function App() {
    const [counter, setCounter] = useState(5);
    const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
    return (<div>
        <Button handleClickFunction={incrementCounter} incrementValue={1} />
        <Button handleClickFunction={incrementCounter} incrementValue={5} />
        <Button handleClickFunction={incrementCounter} incrementValue={10} />
        <Button handleClickFunction={incrementCounter} incrementValue={100} />
        <Display message={counter} />
    </div>);
}

ReactDOM.render(<App />, document.getElementById('mountNode'))
