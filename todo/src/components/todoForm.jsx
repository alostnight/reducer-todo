import React, { useState, useReducer } from 'react';

import Todo from './todo';

import { initialState, reducer } from '../reducers/todoReducer';

const TodoForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const [inputText, setInputText] = useState('')

    const handleChanges = event => {
        setInputText(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: inputText })
        setInputText('')
    }

    const clearForm = event => {
        event.preventDefault();
        dispatch({ type: 'CLEAR_COMPLETED', payload: state})
    }

    return (
        <div className= "todoForm">
            <form>
                <label htmlFor='todo' />
                <input 
                id='todo'
                type='text'
                name='todo'
                value={inputText}
                placeholder='Todo Now!'
                onChange={handleChanges}
                />
                <button onClick={handleSubmit}>Add</button>
                
            </form>
                <Todo state={state} dispatch={dispatch}/>
                <button onClick={clearForm}>Clear</button>
        </div>
    )
}

export default TodoForm; 