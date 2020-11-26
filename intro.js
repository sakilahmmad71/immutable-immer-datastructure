const immer = require('immer')

const baseState = [
    {
        id: 1,
        todo: "Learning Immer",
        completed: false
    },
    {
        id: 2,
        todo: "Coding along with immer",
        completed: false
    }
]

const nextState = immer.produce(baseState, (draftState) => {
    draftState.push({ id: 3, todo: "Wow immer is awesome", completed: false })
    draftState[1].completed = true
})

console.log(baseState)
console.log(nextState)