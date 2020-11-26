const immer = require('immer')

const todoArray = [
    { id: 1, todo: "This is fisrt todo" },
    { id: 2, todo: "This is another todo" }
]

const addTodo = immer.produce(todoArray, (draftState) => {
    draftState.push({ id: 3, todo: "Newly Added todo" })
})

const addTodoFirst = immer.produce(todoArray, (draftState) => {
    draftState.unshift({ id: 7, todo: "Grand Todo" })
})

const deleteTodo = immer.produce(todoArray, (draftState) => {
    draftState.filter(todo => todo.id !== 3)
})

const updateTodo = immer.produce(todoArray, (draftState) => {
    draftState[1].todo = "Immer is really easy to learn though"
})

const addToSpecificPosition = immer.produce(todoArray, (draftState) => {
    draftState.splice(1, 0, { id: 5, todo: "Redux now can be maintain easily" })
})

const removeLastTodo = immer.produce(todoArray, (draftState) => {
    draftState.pop()
})

const removeFirstTodo = immer.produce(todoArray, (draftState) => {
    draftState.shift()
})
