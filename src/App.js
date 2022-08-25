import "./Css/style.css"
import InputUnstyled from '@mui/base/InputUnstyled';
import Form from "./components/Form";
import { useState } from "react";
import ListTodo from "./components/ListTodo"


export default function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit,setEdit] = useState(null);


  return (
    <div className="container">
      <div className="app-wrapper">
        <div className='header'>
          <h1>Todo List</h1>
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            edit = {edit}
            setEdit = {setEdit}
            />
        </div>
        <div>
          <ListTodo
            todos={todos}
            setTodos={setTodos}
            setEdit = {setEdit}
          />
        </div>

        <div>
     
    </div>
      </div>



    </div>
  )
}