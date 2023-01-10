import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./AddTodo.css";

function AddTodo({ todo, setTodo }) {
	const [value, setValue] = useState("");
	function saveTodo() {
		if(value.length) {
			setTodo([
				...todo,
				{
					id: uuidv4(),
					title: value,
					status: true,
				},
			]);
			setValue("");
		}
	}
	return (
		<div className="Add-style-input">
			<input
				placeholder="Ввидите задачу"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className="AddTodo-input"
			/>
			<button
				onClick={saveTodo}
				className="AddTodo-button"
				// disabled={!value.length}
			>
				Добавить
			</button>
		</div>
	);
}
export default AddTodo;
// if(value.length) {
// 	setTodo([
// 		...todo,
// 		{
// 			id: uuidv4(),
// 			title: value,
// 			status: true,
// 		},
// 	]);
// 	setValue("");
// }
