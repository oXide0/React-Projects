import { useState } from 'react';
import './App.scss';
import AddButton from './components/Buttons/AddButton/AddButton.jsx';
import Modal from './components/modal/Modal.jsx';
import TaskList from './components/TaskList/TaskList.jsx';

export default function App() {
	const [modalActive, setModalActive] = useState(false);
	const [tasks, setTasks] = useState([]);
	const [status, setStatus] = useState('all');
	const [editingTaskIndex, setEditingTaskIndex] = useState(-1);

	const completedTasks = tasks.filter((task) => task.status === 'completed');
	const incompleteTasks = tasks.filter((task) => task.status === 'incomplete');

	const createTask = (newTask) => {
		if (editingTaskIndex !== -1) {
			console.log(editingTaskIndex);
			const index = tasks.findIndex((t) => t.id === editingTaskIndex);
			const updatedTasks = [...tasks];
			updatedTasks[index].name = newTask.name;
			updatedTasks[index].status = newTask.status;
			setTasks(updatedTasks);
			setEditingTaskIndex(-1);
		} else {
			setTasks([...tasks, newTask]);
		}

		setModalActive(false);
	};

	const cancelTask = () => {
		setEditingTaskIndex(-1);
		setModalActive(false);
	};

	const removeTask = (task) => {
		setTasks(tasks.filter((t) => task.id !== t.id));
	};

	const changeStatus = (task) => {
		const index = tasks.findIndex((t) => t.id === task.id);
		const updatedTasks = [...tasks];
		if (task.status === 'completed') {
			updatedTasks[index].status = 'incomplete';
		} else {
			updatedTasks[index].status = 'completed';
		}

		setTasks(updatedTasks);
	};

	const editTask = (task) => {
		setModalActive(true);
		setEditingTaskIndex(task.id);
	};

	return (
		<div className='wrapper'>
			<div className='todo'>
				<h1 className='todo__title'>Todo List</h1>
				<div className='todo__row'>
					<AddButton onClick={setModalActive}>Add Task</AddButton>
					<select className='todo__type' value={status} onChange={(e) => setStatus(e.target.value)}>
						<option value='all' className='type__option'>
							All
						</option>
						<option value='incomplete' className='type__option'>
							Incomplete
						</option>
						<option value='completed' className='type__option'>
							Completed
						</option>
					</select>
				</div>
				<div className='todo__field'>
					<TaskList
						tasks={tasks}
						status={status}
						incompleteTasks={incompleteTasks}
						completedTasks={completedTasks}
						removeTask={removeTask}
						changeStatus={changeStatus}
						editTask={editTask}
					/>
				</div>
			</div>
			<Modal
				active={modalActive}
				setActive={setModalActive}
				createTask={createTask}
				tasks={tasks}
				cancelTask={cancelTask}
				isUpdateTask={editingTaskIndex}
			/>
		</div>
	);
}
