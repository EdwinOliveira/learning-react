import { useState } from "react";
import Todo from "../components/Todo";

export default function Todos() {
	const [todos, setTodos] = useState<
		Array<{ id: number; designation: string; completed: boolean }>
	>([]);

	const addTodo = (event: { target: { value: string } }) => {
		setTodos([
			...todos,
			{
				id: todos.length + 1,
				designation: event.target.value,
				completed: false,
			},
		]);
	};

	const completeTodo = (event: unknown) => {
		todos.map((todo) => {
			if (todo.designation === event.target.name) {
				todo.completed = !todo.completed;
			}
		});

		console.log(todos);
	};

	return (
		<>
			<h1>Todos</h1>
			<input type="text" placeholder="Add Todo" onBlurCapture={addTodo} />
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					designation={todo.designation}
					completed={todo.completed}
					onComplete={completeTodo}
				/>
			))}
		</>
	);
}
