import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { Cake, InputCake } from '../bakery-types';

let initialState: Array<Cake> = [];

const cakeSlice = createSlice({
	name: 'cakes',
	initialState,
	reducers: {
		addCake: (state, action: PayloadAction<InputCake>) => {
			state.push({ ...action.payload, id: nanoid(), retired: false });
		},
	},
});

const { actions } = cakeSlice;
export const { addCake } = actions;
export const { reducer } = cakeSlice;

/*
	{ type: 'cakes/addCake', payload: {id, size, cakeFilling}}
*/
