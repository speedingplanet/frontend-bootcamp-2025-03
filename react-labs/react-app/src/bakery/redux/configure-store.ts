import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as cakeReducer, fetchCakes } from './cake-slice';

export const store = configureStore({
	reducer: combineReducers({
		cakes: cakeReducer,
	}),
});

store.dispatch(fetchCakes());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
