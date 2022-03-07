import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toogle } from '../redux/todos/todosSlice'
function TodoList() {
    const items = useSelector(state => state.todos.items)
    const dispatch = useDispatch();

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
                                <button className="destroy"></button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList