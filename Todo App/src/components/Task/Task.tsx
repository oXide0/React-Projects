import styles from './Task.module.scss';
import { useRemoveTaskMutation, useUpdateTaskMutation } from '../../services/tasksApi';
import { toggleModal } from '../../features/modalSlice';
import { setTask } from '../../features/taskSlice';
import { useDispatch } from 'react-redux';
import { setModalType } from '../../features/modalSlice';
import { ITask } from '../../types/task';

interface TaskProps {
	task: ITask;
}

const Task = ({ task }: TaskProps) => {
	const [removeTask] = useRemoveTaskMutation();
	const [updateTask] = useUpdateTaskMutation();
	const dispatch = useDispatch();

	const editTaskHandler = () => {
		dispatch(setModalType('edit'));
		dispatch(setTask(task));
		dispatch(toggleModal(true));
	};

	const removeTaskHandler = async () => {
		await removeTask(task.id);
	};

	const handleChangeStatus = async () => {
		const taskStatus = task.status === 'incomplete' ? 'completed' : 'incomplete';
		await updateTask({ ...task, status: taskStatus });
	};

	return (
		<div className={styles.task__container}>
			<div
				className={
					task.status === 'completed' ? `${styles.task__content} ${styles.done}` : styles.task__content
				}
			>
				<div className={styles.task__info}>
					<div
						className={
							task.status === 'completed' ? `${styles.info__box} ${styles.purple}` : styles.info__box
						}
						onClick={handleChangeStatus}
					>
						<img src='checkmark_icon.svg' alt='checkmark_icon' />
					</div>
					<div className={styles.info__field}>
						<p
							className={
								task.status === 'completed' ? `${styles.info__name} ${styles.done}` : styles.info__name
							}
						>
							{task.title}
						</p>
						<p className={styles.info__time}>{task.time}</p>
					</div>
				</div>
				<div className={styles.task__control}>
					<button className={styles.control__button} onClick={editTaskHandler}>
						<img src='edit_icon.svg' alt='edit_icon' />
					</button>
					<button className={styles.control__button} onClick={removeTaskHandler}>
						<img src='delete_icon.svg' alt='delete_icon' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Task;
