import './App.css';
import Input from './Components/Input';
import Box from './Components/Box';
import { useState } from 'react';
function App() {

  const [todos, setTodo] = useState([]);

const removeTodo = (id)=>{
  //console.log(id)
  const newTodos = todos.filter(
    (d, index)=>{
      return (index!==id)?true:false
    }
  )
  setTodo(newTodos)
}

  const addHandler = (item)=>{
    //console.log(item)
    setTodo(
      [...todos,
      {item,
        time: new Date().toLocaleTimeString()
      }
      ]

    )

  }

  return (
    <div className='bg-black p-3 w-full'>
      <div className="bg-white rounded shadow-md shadow-blue-400 max-w-[100%] min-h-[50%] md:max-w-[60%] md:min-h-[40%] mx-auto p-3">
      <Input handler = {addHandler}/>
      <Box data = {todos} removeHandler = {removeTodo}/>
      </div>
    </div>
      );
    }


export default App;
