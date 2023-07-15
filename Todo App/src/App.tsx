import styles from './App.module.scss';
import Button from './components/Button/Button';
import { toggleModal, setModalType } from './features/modalSlice';
import { useDispatch } from 'react-redux';
import TaskList from './components/TaskList/TaskList';
import Modal from './components/Modal/Modal';
import { useState } from 'react';
import { FilterValuesType } from './types/task';

const App = () => {
	const [filter, setFilter] = useState<FilterValuesType>('all');
	const dispatch = useDispatch();

	const openModal = () => {
		dispatch(setModalType('add'));
		dispatch(toggleModal(true));
	};

	return (
		<div className={styles.wrapper}>
			<Modal />
			<div className={styles.todo}>
				<h1 className={styles.todo__title}>Todo List</h1>
				<div className={styles.todo__row}>
					<Button onClick={openModal}>Add Task</Button>
					<select
						className={styles.todo__type}
						onChange={(e) => setFilter(e.target.value as FilterValuesType)}
					>
						<option value='all' className={styles.type__option}>
							All
						</option>
						<option value='incomplete' className={styles.type__option}>
							Incomplete
						</option>
						<option value='completed' className={styles.type__option}>
							Completed
						</option>
					</select>
				</div>
				<div className={styles.todo__field}>
					<TaskList filter={filter} />
				</div>
			</div>
		</div>
	);
};

export default App;
