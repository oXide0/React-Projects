import { api } from './api';
import { ITask } from '../types/task';

export const tasksApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getTasks: builder.query<ITask[], void>({
			query: () => '/tasks',
			providesTags: () => ['Tasks'],
		}),
		addTask: builder.mutation({
			query: (body: ITask) => ({
				url: '/tasks',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Tasks'],
		}),
		removeTask: builder.mutation({
			query: (id: string) => ({
				url: `/tasks/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Tasks'],
		}),
		updateTask: builder.mutation({
			query: (body: ITask) => ({
				url: `/tasks/${body.id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['Tasks'],
		}),
	}),
});

export const { useGetTasksQuery, useAddTaskMutation, useRemoveTaskMutation, useUpdateTaskMutation } = tasksApi;
