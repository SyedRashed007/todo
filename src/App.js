import "./index.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from "react";
import { db } from "./firebase";
import TodoListItem from "./todo"

function App() {

  const [todos, setTodos] = useState([])
  const [todoInput, setTodoInput] = useState("")
  
  useEffect(() => {
    getTodos();
  }, [])

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot){
      setTodos(
        querySnapshot.docs.map((doc) => ({
        id: doc.id,
        todo: doc.data().todo,
        inProgress: doc.data().inProgress
      }))
      )
    })
  }

  function addTodo(e) {
    e.preventDefault();
    
    db.collection("todos").add({
      inProgress: true,
      todo: todoInput,
    });
    setTodoInput("");
  }

  return (
    <div className="App">
      <div 
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}>
          <h1>ToDo App</h1>
          <form>
            <TextField 
            id="standard-basic" 
            label="Write your ToDo's" 
            value={todoInput}
            onChange={(e) =>
              setTodoInput(e.target.value)}
            style={{
              maxWidth: "500px", width: "100vw", 
            }}/>
            <Button type="submit" variant="outlined" onClick={addTodo}>Add</Button>
          </form>

            <div style={{
              maxWidth: "500px", width: "100vw", marginTop: "25px"}}>
              {todos.map((todo) => (
                <TodoListItem   
                  todo={todo.todo} 
                  inProgress={todo.inProgress} 
                  id={todo.id}
                />
              ))}
            </div>
      </div>
    </div>
  )
}

export default App;
