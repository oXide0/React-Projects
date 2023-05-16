import { useState } from 'react';
import './Modal.scss';
import AddButton from '../Buttons/AddButton/AddButton.jsx';
import CancelButton from '../Buttons/CancelButton/CancelButton.jsx';

export default function Modal({ active, createTask, cancelTask, isUpdateTask }) {
	const [task, setTask] = useState({ name: '', status: 'incomplete' });
	const [identificator, setIdentificator] = useState(0);

	const addNewTask = () => {
		const newTask = {
			...task,
			id: identificator,
			time: setTime(),
		};
		setIdentificator(identificator + 1);
		createTask(newTask);
		setTask({ name: '', status: 'incomplete' });
	};

	const setTime = () => {
		const currentDate = new Date();
		return currentDate.toLocaleString('en-US');
	};

	const handleKeyDown = (event) => {
		if (event.code === 'Enter') {
			addNewTask();
		}
	};

	return (
		<div
			className={active ? 'modal__container active' : 'modal__container'}
			onClick={() => {
				setTask({ name: '', status: 'incomplete' });
				cancelTask();
			}}
		>
			<div
				className={active ? 'modal active' : 'modal'}
				onClick={(e) => e.stopPropagation()}
				onKeyDown={handleKeyDown}
			>
				<h2 className='modal__title'>Add TODO</h2>
				<div className='modal__block'>
					<h3 className='block__title'>Title</h3>
					<input
						type='text'
						className='block__input'
						value={task.name}
						onChange={(e) => setTask({ ...task, name: e.target.value })}
					/>
				</div>
				<div className='modal__block'>
					<h3 className='block__title'>Status</h3>
					<select
						className='block__input'
						value={task.status}
						onChange={(e) => setTask({ ...task, status: e.target.value })}
					>
						<option value='incomplete' className='block__option'>
							Incomplete
						</option>
						<option value='completed' className='block__option'>
							Completed
						</option>
					</select>
				</div>
				<div className='modal__buttons'>
					<AddButton onClick={addNewTask}>{isUpdateTask === -1 ? 'Add Task' : 'Update Task'}</AddButton>

					<CancelButton
						onClick={() => {
							setTask({ name: '', status: 'incomplete' });
							cancelTask();
						}}
					>
						Cancel
					</CancelButton>
				</div>
			</div>
		</div>
	);
}
