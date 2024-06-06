import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/authSlice';
import { carApi } from './apis/carApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		[carApi.reducerPath]: carApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(carApi.middleware);
	},
});

setupListeners(store.dispatch);

export * from './thunks/fetchUser';
export { useFetchCarQuery } from './apis/carApi';
