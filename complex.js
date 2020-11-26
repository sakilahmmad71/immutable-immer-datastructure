const { produce } = require('immer')

// example complex data structure
const store = {
    users: new Map([
        [
            "17",
            {
                name: "Michel",
                todos: [
                    {
                        title: "Get coffee",
                        done: false
                    }
                ]
            }
        ]
    ])
}

// updating something deeply in-an-object-in-an-array-in-a-map-in-an-object:
const nextStore = produce(store, draft => {
    draft.users.get("17").todos[0].done = true
})

// filtering out all unfinished todo's
const nextStore = produce(store, draft => {
    const user = draft.users.get("17")
    // when filtering, creating a fresh collection is simpler than
    // removing irrelvant items
    user.todos = user.todos.filter(todo => todo.done)
})