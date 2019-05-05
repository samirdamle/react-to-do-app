import React, {useEffect, useGlobal} from 'reactn';
import {useMergedState} from './utils/Utils'
import './App.css';
import './assets/scss/main.scss'
import ToDoList from './pages/to-do-list/ToDoList'

function App() {

    const [appState, setAppState] = useGlobal()

    useEffect((evt) => {
        setAppState({
            petName: 'Toffee',
            animal: 'dog',
        })
    })

    const [state, setState] = useMergedState({
        title: 'My Awesome To Do List',
        score: 0
    })

    return (
        <div className="App">
            <div className="alert alert-success">
                Score: {state.score}
            </div>
            <div className="mb-3">
                <button className="btn btn-primary mr-2" onClick={(evt) => { setState({ score: state.score + 1}) }}>Increment Score</button>
                <button className="btn btn-primary mr-2" onClick={(evt) => { setState({ title: 'Another To Do List'}) }}>Change Title</button>
            </div>
            <div className="mb-3">
                Pet: {appState.petName} - This is coming from the global state into App.
            </div>
            {state.score < 5 && <ToDoList title={state.title} score={state.score} />}
        </div>
    );
}

export default App;
