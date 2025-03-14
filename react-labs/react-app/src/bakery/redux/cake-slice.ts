import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { Cake, InputCake } from '../bakery-types';
import { getAllCakes, persistCake } from '../bakery-dao';

export const fetchCakes = createAsyncThunk('cakes/fetchCakes', async () => {
	const cakes = await getAllCakes(); // fulfilled, rejected, or pending
	return cakes;
});

export const saveCake = createAsyncThunk('cakes/saveCake', async (cake: InputCake) => {
	const savedCake = await persistCake(cake);
	return savedCake;
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
		builder.addCase(saveCake.fulfilled, (state, action) => {
			state.push(action.payload);
		});
		builder.addCase(saveCake.rejected, (state, action) => {
			console.error('Failed to add cake:', action.payload);
		});
	},
});

const { actions } = cakeSlice;
export const { addCake } = actions;
export const { reducer } = cakeSlice;
