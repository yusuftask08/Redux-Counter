import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toogle, deleteTodo } from '../redux/todos/todosSlice'
function TodoList() {
    const items = useSelector(state => state.todos.items)
    const dispatch = useDispatch();
    const handleDestroy = (id) => {

        if (window.confirm('Are you sure ?')) {
            dispatch(deleteTodo(id))
        }
    }
    return (
        <div>
            <ul className="todo-list">
                {
                    items.map((item) => (
                        <li key={item.id} className={item.completed ? 'completed' : ''}>
                            <div className="view">
                                <input
                                    className="toggle"
                                    type="checkbox"
                                    onChange={() => dispatch(toogle({ id: item.id }))}
                                    checked={item.completed}
                                />
                                <label>{item.title}</label>
                                <button className="destroy" onClick={() => handleDestroy(item.id)}></button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList