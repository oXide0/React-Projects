import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { ITask } from '../types/task';

export interface TaskState {
	data: ITask;
}

const initialState: TaskState = {
	data: {} as ITask,
};

const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
		setTask(state, action: PayloadAction<ITask>) {
			state.data = action.payload;
		},
	},
});

export const { setTask } = taskSlice.actions;
export default taskSlice.reducer;
export const taskSelector = (state: RootState) => state.task.data;
