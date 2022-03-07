import React from 'react'

function Form() {
    return (
        <div>
            <form mv-action="set(newTodo, newTodo.trim()), if(newTodo != '', add(newTodo, todo) & set(newTodo, ''))">
                <input property="newTodo" className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus />
            </form>
        </div>
    )
}

export default Form