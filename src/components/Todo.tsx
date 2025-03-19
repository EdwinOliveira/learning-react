type Todo = {
	designation: string;
	completed: boolean;
	onComplete: (event: unknown) => void;
};

function Todo({ designation, completed, onComplete }: Todo) {
	return (
		<>
			<p>
				{designation}
				<input
					type="checkbox"
					name={designation}
					defaultChecked={completed}
					onClick={onComplete}
				/>
			</p>
		</>
	);
}

export default Todo;
