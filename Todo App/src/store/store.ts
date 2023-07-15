import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import modalReducer from '../features/modalSlice';
import taskReducer from '../features/taskSlice';
import { api } from '../services/api';

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		task: taskReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
