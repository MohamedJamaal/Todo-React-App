import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    // inputText Hnadler to set inputText of state
    const inputTextHanlder = e =>{
        setInputText(e.target.value)
    }

    // submit todoHandler
    const submitTodoHandler = e => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random()*1000}
        ]);
        setInputText('');
    };

    // for status filter
    const statusHandler = e => {
        setStatus(e.target.value)
    }

    return(
        <form>
            <input 
            value={inputText} 
            onChange={inputTextHanlder} 
            type="text" 
            className="todo-input" 
            />
            <button 
            onClick={submitTodoHandler} 
            className="todo-button" 
            type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
      </form>
    );
}

export default Form;