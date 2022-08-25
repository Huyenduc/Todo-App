import React, { useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';


const Form = ({ input, setInput, todos, setTodos, edit, setEdit }) => {

  useEffect(() => {
    if (edit) {
      setInput(edit.title)
    } else {
      setInput("")
    }

  }, [setInput, edit])

  const updateTodo = (id, title, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { id, title, completed } : todo
    )
    setTodos(newTodo);

    console.log(newTodo)

    setEdit("");
  }


  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!edit) {
      const item =
      {
        id: Math.floor(Math.random() * 1000),
        title: input,
        completed: false
      }
      setTodos(post => [...post, item])

    }
    else {
      updateTodo( edit.id, input, edit.completed)

    }
    setInput('');
  }

  return (
    <form
      onSubmit={onFormSubmit}
    >

      <div>
        <input type="text" placeholder='Nhập lịch làm việc...' className='task-input'
          value={input}
          required
          onChange={e => setInput(e.target.value)}
        />
        <button className='button-add' type='submit'
        >
          {edit ? "OK": "Thêm"}
        </button>
      </div>
    </form>

  )
}

export default Form
