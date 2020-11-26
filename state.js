const immer = require('immer')

// State initialized after the condition
const byId = immer.produce((draft, action) => {
    switch (action.type) {
        case SOME_ACTION:
            action.products.forEach(product => {
                draft[product.id] = product
            })
    }
}, {
    '1': { id: 1, title: "Hello World!" }
})