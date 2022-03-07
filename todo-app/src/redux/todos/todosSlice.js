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
        activeFilter: 'all'
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
        },
        changeActiveFilter: (state, action) => {
            console.log('action', action)
            state.activeFilter = action.payload;
        },
        clearCompleted: (state) => {
            const filter = state.items.filter(item => item.completed === false)
            state.items = filter;
        }
    }
})

export const { addTodo, toogle, deleteTodo, changeActiveFilter, clearCompleted } = todosSlice.actions
export default todosSlice.reducer;