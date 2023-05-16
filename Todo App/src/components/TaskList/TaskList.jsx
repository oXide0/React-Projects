import Task from '../Task/Task.jsx';

export default function TaskList(props) {
	if (props.tasks.length === 0) {
		return <p className='field__text'>No Todos</p>;
	}
	if (props.status === 'incomplete') {
		return props.incompleteTasks.map((task) => (
			<Task
				key={task.id}
				task={task}
				removeTask={props.removeTask}
				changeStatus={props.changeStatus}
				editTask={props.editTask}
			/>
		));
	} else if (props.status === 'completed') {
		return props.completedTasks.map((task) => (
			<Task
				key={task.id}
				task={task}
				removeTask={props.removeTask}
				changeStatus={props.changeStatus}
				editTask={props.editTask}
			/>
		));
	}
	return props.tasks.map((task) => (
		<Task
			key={task.id}
			task={task}
			removeTask={props.removeTask}
			changeStatus={props.changeStatus}
			editTask={props.editTask}
		/>
	));
}
