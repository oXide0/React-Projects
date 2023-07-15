export type TypeTaskState = 'incomplete' | 'completed';
export type FilterValuesType = 'all' | 'completed' | 'incomplete';

export interface ITask {
	id: string;
	title: string;
	status: TypeTaskState;
	time: string;
}
