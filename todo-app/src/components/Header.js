import React from 'react'

function Header() {
    return (
        <header className='header'>
            <h1>Todos</h1>
            <form mv-action="set(newTodo, newTodo.trim()), if(newTodo != '', add(newTodo, todo) & set(newTodo, ''))">
                <input property="newTodo" className="new-todo"
                    placeholder="What needs to be done?"
                    autofocus />
            </form>
        </header>
    )
}

export default Header