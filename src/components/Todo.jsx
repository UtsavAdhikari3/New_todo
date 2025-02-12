import { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList";

const Todo = () =>{
    const [todos,setTodos] = useState([]);
    return(
        <div>
            <Form todos={todos} setTodos={setTodos}/>
            <TodoList todos={todos} setTodos={setTodos}/>
        </div>
    );
}

export default Todo