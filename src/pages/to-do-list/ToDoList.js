/* eslint no-script-url: 0, jsx-a11y/anchor-is-valid: 0 */
import React, {Fragment, useEffect, useGlobal, useState} from 'reactn'
import {PropTypes} from 'prop-types'

import {clone, useMergedState} from '../../utils/Utils'

const ToDoList = ({title, score}) => {

    const myOrg = {
        name: 'ApexCo',
        location: 'Bethesda',
    }

    const [globalState, setGlobalState] = useGlobal()
    
    const [toDoListState, setToDoListState] = useMergedState({
        // title: 'My Awesome To Do List',
        list: [
            {
                id: 0,
                title: 'Get milk',
                completed: false,
            },
            {
                id: 1,
                title: 'Feed the dog',
                completed: false,
            },
            {
                id: 2,
                title: 'Read a book',
                completed: true,
            },
            {
                id: 3,
                title: 'Watch Netflix',
                completed: false,
            },
        ],
        userName: '',
        allCompleted: false,
    })

    const [shoppingState, setShoppingState] = useMergedState({
        shoppingList: [
            {
                id: 0,
                product: 'Shoes',
                qty: 1,
            },
        ],
    })

    const [state, setState] = useState({
        org: myOrg,
        name: 'John',
        age: 42
    })

    useEffect(() => {
        console.log('useEffect called = ')
        console.log(score)

        setToDoListState({ userName: 'John Smith'})

        return (evt) => {
            console.log('Clean up happened')
        }
    }, [score, setToDoListState])

    const markCompleted = (itemIndex) => {
        const list = clone(toDoListState.list)
        // list[itemIndex].completed = !list[itemIndex].completed
        list[itemIndex].completed = true
        setToDoListState({
            list
        })
    }

    const toggleCompleted = (itemIndex) => {
        const list = clone(toDoListState.list)
        list[itemIndex].completed = !list[itemIndex].completed
        // list[itemIndex].completed = true
        setToDoListState({
            list
        })
    }

    return (
        <Fragment>

            {/* Example of useState() */}
            <div className="">
                <h1>Name: {state.name}</h1>
                <h1>Age: {state.age}</h1>
                <h1>Org: {state.org.name}</h1>
                <h1>Location: {state.org.location}</h1>
                <div className="">
                    <button className="btn btn-secondary" onClick={(evt) => {

                        setState((prevState) => {
                            /*const newState = clone(prevState)
                            newState.name = 'Mary'
                            myOrg.location = 'Bangalore'
                            return newState*/
                            
                            return {...prevState, name: 'Mary'}
                        })

                        // setState({name: 'Mary'})
                    }}>Call setState()</button>
                </div>
            </div>

            <br/><br/><br/>

            {/* Example of useMergedState() */}
            <div className="">
                <h2>{title} of {toDoListState.userName}: {toDoListState.list.length}</h2>
                <ul>
                    {toDoListState.list.map((item, itemIndex) =>
                        <li key={itemIndex} className="mb-2">
                            {item.title} {item.completed ? <span className="mr-2">- Completed</span> : <button className="btn btn-secondary mr-2" onClick={(evt) => { markCompleted(itemIndex) }}>Mark completed</button>}
                            <button className="btn btn-secondary mr-2" onClick={(evt) => { toggleCompleted(itemIndex) }}>Toggle completed</button>
                        </li>
                    )}
                </ul>
                <div className="mt-3">
                    <h3>Pet: {globalState.petName} is a {globalState.animal}</h3>
                </div>
            </div>
        </Fragment>
    )
}

ToDoList.propTypes = {
    title: PropTypes.string.isRequired,
    score: PropTypes.number,
}

ToDoList.defaultProps = {
    title: '',
    score: 0
}

export default ToDoList