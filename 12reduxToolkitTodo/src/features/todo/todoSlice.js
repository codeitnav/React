import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid creates unique id

const initialState = {
    todos: [{id:1, text:"Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
    addTodo: (state, action) => {
        const todo = {
            id: nanoid(),
            text: action.payload
            // payload is an object in itself. so can use properties like payload.text or payload.id
        }
        state.todos.push(todo)
    },
    removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload )
    },
    }
})

// export all the actions
// this exporting of individual functionality will be useful for components
export const {addTodo, removeTodo} = todoSlice.actions

// export all reducers
// the store needs a list of all the reducers
export default todoSlice.reducer


/*
1. reducers: {
    properties: functions
    } 

2. addTodo: (state, action) => {}
(a) state variable - gives access to the current values of the variable stored in state
                   - This is like a notebook where you write down your tasks. It's a snapshot of what your app looks like at a particular moment. In your to-do list app, the state might include a list of tasks, whether a task is completed or not, and any filters you've applied.
(b) action variable - This is like a message telling your app to do something. It's a way to communicate with your app and change its state. For example, if you want to add a new task to your to-do list, you'd send an "add task" action.

3. In React Toolkit, a payload is essentially additional data that's included with an action. It's like a package that's attached to a message (the action) to provide more context or information.

Think of it like this:

Action: The message or instruction.
Payload: The package containing extra details.
*/

