import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [
            {
                id: 1,
                title: 'Learn React',
                completed: true
            },
            {
                id: 2,
                title: 'Learn Vue',
                completed: false
            }
        ],
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload)
        },
        toogle: (state, action) => {
            const { id } = action.payload;
            const item = state.items.find(item => item.id === id);
            item.completed = !item.completed
        },
        deleteTodo: (state, action) => {
            const id = action.payload;
            const filtered = state.items.filter((item) => item.id !== id);
            state.items = filtered;
        }
    }
})

export const { addTodo, toogle, deleteTodo } = todosSlice.actions
export default todosSlice.reducer;