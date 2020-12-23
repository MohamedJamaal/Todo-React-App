import React, {useState, useEffect} from 'react';
import './App.css';

import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all"); // for status change
  const [filteredTodos, setFilteredTodos] = useState([]); // for filter todos status

  // run once when app runs 
  useEffect(()=>{
    getLocalTodos();
  }, [])


  // useEfferct runs function every time value changes
  // every time change complete status or todo submitted it will run 
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]) // this array of argument teel useEffect it should run every todo submitted and status changes


  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo=>todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo=>todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  }

  // save to local Storage on browser
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if( localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
    let todoLocal = JSON.parse(localStorage.getItem('todos'));
    setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>    MOHAMED TODO LIST    </h1>
      </header>
      <Form 
      // for inputs
      inputText={inputText} 
      setInputText={setInputText} 
      // for making todo records
      todos={todos} 
      setTodos={setTodos} 
      // for status change
      setStatus={setStatus}
      />
      <TodoList 
      setTodos={setTodos} 
      todos={todos} 
      // filter todos
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
