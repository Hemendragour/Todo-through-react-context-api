import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTode: (todo) => { },
    updateTode: (id, todo) => { },
    deleteTode: (id) => { },
    toggleCompleted: (id) => { },
})


export const useTodo = () => {
    return useContext(TodoContext)

}

export const TodoProvider = TodoContext.Provider;