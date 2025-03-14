import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { Cake, InputCake } from '../bakery-types';
import { getAllCakes, persistCake } from '../bakery-dao';

export const fetchCakes = createAsyncThunk('cakes/fetchCakes', async () => {
	const cakes = await getAllCakes();
	return cakes;
});

let initialState: Array<Cake> = [];

const cakeSlice = createSlice({
	name: 'cakes',
	initialState,
	reducers: {
		addCake: (state, action: PayloadAction<InputCake>) => {
			state.push({ ...action.payload, id: nanoid(), retired: false });
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCakes.fulfilled, (state, action) => {
			return action.payload;
		});
		builder.addCase(fetchCakes.rejected, (state) => {
			console.error('Could not load cakes');
			return state;
		});
	},
});

const { actions } = cakeSlice;
export const { addCake } = actions;
export const { reducer } = cakeSlice;
