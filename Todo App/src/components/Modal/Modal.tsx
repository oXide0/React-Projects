import styles from './Modal.module.scss';
import { toggleModal, modalSelector, modalTypeSelector, setModalType } from '../../features/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import { useAddTaskMutation, useUpdateTaskMutation } from '../../services/tasksApi';
import { useState, useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { setTime } from '../../utils/time';
import { taskSelector } from '../../features/taskSlice';
import { TypeTaskState } from '../../types/task';

interface ITaskData {
	title: string;
	status: TypeTaskState;
}

const Modal = () => {
	const [taskData, setTaskData] = useState<ITaskData>({ title: '', status: 'incomplete' });
	const [addTask] = useAddTaskMutation();
	const [updateTask] = useUpdateTaskMutation();
	const active = useSelector(modalSelector);
	const task = useSelector(taskSelector);
	const modalType = useSelector(modalTypeSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		if (modalType === 'edit') {
			setTaskData({ title: task.title, status: task.status });
		} else {
			setTaskData({ title: '', status: 'incomplete' });
		}
	}, [modalType, task]);

	const closeModal = () => {
		dispatch(toggleModal(false));
	};

	const addTaskHandler = async () => {
		setTaskData({ title: '', status: 'incomplete' });
		await addTask({ id: nanoid(), ...taskData, time: setTime() });
		closeModal();
	};

	const updateTaskHandler = async () => {
		await updateTask({ ...task, title: taskData.title, status: taskData.status });
		closeModal();
		dispatch(setModalType('add'));
	};

	return (
		<div
			className={active ? `${styles.modal__container} ${styles.active}` : styles.modal__container}
			onClick={closeModal}
		>
			<div
				className={active ? `${styles.modal} ${styles.active}` : styles.modal}
				onClick={(e: React.MouseEvent<HTMLInputElement>) => e.stopPropagation()}
			>
				<h2 className={styles.modal__title}>Add TODO</h2>
				<div className={styles.modal__block}>
					<h3 className={styles.block__title}>Title</h3>
					<input
						type='text'
						className={styles.block__input}
						value={taskData.title}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setTaskData({ ...taskData, title: e.target.value })
						}
					/>
				</div>
				<div className={styles.modal__block}>
					<h3 className={styles.block__title}>Status</h3>
					<select
						className={styles.block__input}
						value={taskData.status}
						onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
							setTaskData({ ...taskData, status: e.target.value as TypeTaskState })
						}
					>
						<option value='incomplete' className={styles.block__option}>
							Incomplete
						</option>
						<option value='completed' className={styles.block__option}>
							Completed
						</option>
					</select>
				</div>
				<div className={styles.modal__buttons}>
					{modalType === 'add' ? (
						<Button onAsyncClick={addTaskHandler}>Add Task</Button>
					) : (
						<Button onAsyncClick={updateTaskHandler}>Update Task</Button>
					)}
					<button className={styles.modal__btn} onClick={closeModal}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
