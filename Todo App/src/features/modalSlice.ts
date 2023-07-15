import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

export interface ModalState {
	active: boolean;
	type: string | null;
}

const initialState: ModalState = {
	active: false,
	type: null,
};

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		toggleModal(state, action: PayloadAction<boolean>) {
			state.active = action.payload;
		},
		setModalType(state, action: PayloadAction<string>) {
			state.type = action.payload;
		},
	},
});

export const { toggleModal, setModalType } = modalSlice.actions;
export default modalSlice.reducer;
export const modalSelector = (state: RootState) => state.modal.active;
export const modalTypeSelector = (state: RootState) => state.modal.type;
