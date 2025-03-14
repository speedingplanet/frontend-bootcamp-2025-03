import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as cakeReducer } from './cake-slice';

export const store = configureStore({
	reducer: combineReducers({
		cakes: cakeReducer,
	}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

