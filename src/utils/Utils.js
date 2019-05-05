import { useReducer } from 'reactn'
// import merge from 'deepmerge'

const clone = item => JSON.parse(JSON.stringify(item))

const useMergedState = (initialState, useClone = true) =>
    useReducer((state, partialNewState) => {
        return useClone ? clone({ ...state, ...partialNewState }) : { ...state, ...partialNewState }
    }, initialState)

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
    }
}

const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle)
    const end = polarToCartesian(x, y, radius, startAngle)

    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

    return ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ')
}

export { clone, describeArc, polarToCartesian, useMergedState }
