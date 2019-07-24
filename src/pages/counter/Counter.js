/* eslint no-script-url: 0, jsx-a11y/anchor-is-valid: 0 */
import React, {Fragment} from 'react'
import {PropTypes} from 'prop-types'
import useCounter from '../../store/use-counter'

const Counter = ({startAt}) => {

    const {count, increment, decrement, reset, user, changeName} = useCounter(startAt)

    return (
        <div className="border p-3">
            <div className="d-flex bg-light">
                <h3 className="mr-3 mb-0">Count: {count}</h3>
                <h3 className="mr-3 mb-0">User: {user.firstName} {user.lastName}</h3>
                <button className="btn btn-primary mr-3" onClick={increment}>
                    Increment
                </button>
                <button className="btn btn-primary mr-3" onClick={decrement}>
                    Decrement
                </button>
                <button className="btn btn-secondary mr-3" onClick={reset}>
                    Reset
                </button>
                <button className="btn btn-secondary mr-3" onClick={(evt) => { changeName('Bob', 'Jones') }}>
                    Change Name of User
                </button>
            </div>
        </div>
    )
}

Counter.propTypes = {
    startAt: PropTypes.number.isRequired
}

Counter.defaultProps = {
    startAt: 0
}

export default Counter