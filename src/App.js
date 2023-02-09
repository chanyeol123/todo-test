import { useState } from 'react';
import './App.css';
import Todoitem from './components/Todoitem';

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const onInputChangeHandler = (event) => {
    setInput(event.target.value)
  }

  const addTodos = () =>{
    setTodos([...todos, input])

    setInput('')
  }

  return (
    <>
    <div className='head'>
      <input value = {input} type="text" placeholder='자바스크립트를 배워봅시다'
      onChange={onInputChangeHandler}></input>
      <button onClick={addTodos}>추가하기</button>
    </div>
    <div className='todo-list'>
      <h2>Todo List</h2>
    </div>
    <div>
    <Todoitem todos={todos}/>
    
    </div>
    </>
  );
}

export default App;
