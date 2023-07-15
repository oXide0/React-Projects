import { useGetTasksQuery } from '../../services/tasksApi';
import Task from '../Task/Task';
import { ITask } from '../../types/task';
import styles from './TaskList.module.scss';
import { FilterValuesType } from '../../types/task';

interface TaskListProps {
	filter: FilterValuesType;
}

const TaskList = ({ filter }: TaskListProps) => {
	const { data, error, isSuccess } = useGetTasksQuery();

	if (isSuccess) {
		const filteredTasks = data
			.filter((task: ITask) => {
				if (filter === 'all') {
					return task;
				} else if (filter === 'incomplete') {
					return task.status === 'incomplete';
				} else {
					return task.status === 'completed';
				}
			})
			.reverse();

		return (
			<div className={styles.tasks}>
				{!filteredTasks.length || error ? (
					<h1 className={styles.title}>Not todos</h1>
				) : (
					filteredTasks.map((task: ITask) => <Task key={task.id} task={task} />)
				)}
			</div>
		);
	}
};

export default TaskList;
