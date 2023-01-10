import React, { useState } from "react";
import AddTodo from "./AddTodo/AddTodo";
import TodoList from "./TodoList/TodoList";
import "./TODO.css";
function TODO() {
	const [todo, setTodo] = useState([]);
	return (
		<section className="todo-container">
			<div className="todo-content">
				<AddTodo todo={todo} setTodo={setTodo} />
				<TodoList todo={todo} setTodo={setTodo} />
			</div>
		</section>
	);
}
export default TODO;
