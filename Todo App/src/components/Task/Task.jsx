import './Task.scss';

export default function Task({ task, removeTask, changeStatus, editTask }) {
	return (
		<div className='task__container'>
			<div className={task.status === 'completed' ? 'task__content done' : 'task__content'}>
				<div className='task__info'>
					<div
						className={task.status === 'completed' ? 'info__box purple' : 'info__box'}
						onClick={() => changeStatus(task)}
					>
						<img src='img/checkmark_icon.svg' alt='checkmark_icon' />
					</div>
					<div className='info__field'>
						<p className={task.status === 'completed' ? 'info__name done' : 'info__name'}>{task.name}</p>
						<p className='info__time'>{task.time}</p>
					</div>
				</div>
				<div className='task__control'>
					<button className='control__button' onClick={() => editTask(task)}>
						<img src='img/edit_icon.svg' alt='edit_icon' />
					</button>
					<button className='control__button' onClick={() => removeTask(task)}>
						<img src='img/delete_icon.svg' alt='delete_icon' />
					</button>
				</div>
			</div>
		</div>
	);
}
