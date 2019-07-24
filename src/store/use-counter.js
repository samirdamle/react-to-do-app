import createPersistedState from 'use-persisted-state'

const useCounterState = createPersistedState('count')
const useUserState = createPersistedState('user')

const useCounter = initialCount => {
    const [count, setCount] = useCounterState(initialCount)
    const [user, setUser] = useUserState({
        firstName: 'John',
        lastName: 'Smith',
    })

    return {
        user,
        changeName: (firstName, lastName) => setUser((prevState) => ({ firstName, lastName })),
        count,
        increment: () => setCount(currentCount => currentCount + 1),
        decrement: () => setCount(currentCount => currentCount - 1),
        reset: () => setCount(currentCount => initialCount),
    }
}

export default useCounter