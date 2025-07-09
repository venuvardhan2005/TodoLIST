import { useState } from 'react'
import './App.css'


function App() {

  let [todovalues, updatetodovalues] = useState("")

  let [todolist, updtetodos] = useState(
    [
      // {
      //   id: 1,
      //   task: "Reading "
      // },
      // {
      //   id: 2,
      //   task: "writting and playing "
      // }
    ]
    
  )
  let nextId = 3

  function addNewTodo() {
    if (todovalues == "") {
      alert("please enter the task")
    } else {
      let newTodos = [...todolist, { id: nextId++, task: todovalues }]
      updtetodos(newTodos);
    }
   
  }

  function DeleteTodo(id) {
    const updateTask = todolist.filter((_, ids) => {
      return id != ids;
    })
    updtetodos(updateTask)

  }

  return (
    <div className="main-body d-flex justify-content-center align-items-center">

      <div className="Todo-body">

        <h3 className="text-center mt-3 color">My Todo List</h3>

        <div className="form-floating mb-3 todo-content d-flex">
          <input type="text" className="form-control" id="floatingInput" placeholder="Enter your todo task" value={todovalues} onChange={(e) => {
            let value = e.target.value;
            updatetodovalues(value)

          }} ></input>
          <label htmlForfor="floatingInput">Enter your todo task</label>
          <button className="btn btn-primary bt-sm button" onClick={() => {
            addNewTodo()
          }} >+</button>
        </div>

        <ul className='ul-items'>

          {
            todolist.map((todos,id) => {
              return (
                <li key={id} className='box'>{todos.task}
                  <div className='buttons'>
                    <button className='btn btn-danger' onClick={()=>DeleteTodo(id)}>Delete</button>
                  </div>
                </li>
              )

            })
          }


          {/* <li className='box'>Reading Books
            <div className='buttons'>
              <button className='btn btn-success'>Edit</button>
              <button className='btn btn-danger'>Delete</button>
            </div>
          </li>

          <li className='box'>writting Books
            <div className='buttons'>
              <button className='btn btn-success'>Edit</button>
              <button className='btn btn-danger'>Delete</button>
            </div>
          </li> */}

        </ul>

      </div>
    </div>







  )
}

export default App
