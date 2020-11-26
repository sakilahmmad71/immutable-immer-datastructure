const immer = require('immer')

const todosObject = {
    id1: { id: 1, todo: 'Learn new things' },
    id2: { id: 2, todo: 'Forget old things' }
}

const addedTodo = immer.produce(todosObject, (draftState) => {
    draftState['id3'] = { id: 3, todo: "Woaw immer is awesome" }
})

const updateTodo = immer.produce(todosObject, (draftState) => {
    draftState['id2'].todo = "Remember old things"
})

const deleteTodo = immer.produce(todosObject, (draftState) => {
    delete draftState['id2']
})

console.log(todosObject)
console.log(addedTodo)
console.log(updateTodo)
console.log(deleteTodo)
console.log(todosObject)