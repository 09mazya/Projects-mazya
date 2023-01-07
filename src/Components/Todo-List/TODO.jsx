import React , {useState}from "react";
import AddTodo from "./AddTodo/AddTodo";
import TodoList from "./TodoList/TodoList";

function TODO(){
    const [todo, setTodo] = useState([]);
    return(
        <div>
            <AddTodo  todo={todo} setTodo={setTodo}/>
            <TodoList todo={todo} setTodo={setTodo}/>
        </div>
    )
}
export default TODO;