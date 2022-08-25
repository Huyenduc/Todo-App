import React from 'react'

const ListTodo = ({ todos,setTodos,setEdit }) => {


  const handleComplete =(id)=>{
    setTodos(
      todos.map((item)=>{
        if(item.id===id.id){
          return {...item, completed:!item.completed}
        }
        return item;
      })
    )
  }

  const handleEdit =({id})=>{
    const findTodo = todos.find((todo) =>todo.id ===id);
    setEdit(findTodo);
    // console.log(findTodo)
  }

  const handleDelete=({id})=>{

      setTodos(todos.filter((todo)=> todo.id !== id))

  }
  return (
    <div>
      {
        todos.map((post) => (
          
          <li className='list-item' key={post.id}>
            <input 
              value={post.title}
              className ={`list ${post.completed ? "complete" :""}`}
              onChange={e => e.preventDefault()}
            />
            <button className='button-complete task-button'
              onClick={()=>handleComplete(post)}
            >
              <i className="fas fa-check-circle"></i>
            </button>
            <button className='button-edit task-button'
              // disabled= "true"
              onClick={()=>handleEdit(post)}
            >
              <i className="fas fa-edit"></i>
            </button>
            <button className='button-delete task-button'
              onClick={()=>handleDelete(post)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </li>
        ))
      }
    </div>

  )
}

export default ListTodo
