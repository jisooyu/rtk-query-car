import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const carApi = createApi({
	reducerPath: 'carApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000',
	}),
	endpoints(builder) {
		return {
			fetchCar: builder.query({
				query: () => {
					return {
						url: '/car/fetch',
						method: 'GET',
					};
				},
			}),
			addCar: builder.mutation({
				query: (car) => {
					return {
						url: '/car/save',
						method: 'POST',
						body: car,
					};
				},
			}),
			removeCar: builder.mutation({
				invalidateTags: (result, error, car) => {
					return [{ type: 'Car', id: car.id }];
				},
				query: (car) => {
					return {
						url: `/car/delete/${car.id}`,
						method: 'DELETE',
					};
				},
			}),
			editCar: builder.mutation({
				query: (updatedCar) => {
					return {
						url: `/car/update/${updatedCar.id}`,
						method: 'PUT',
						body: updatedCar,
					};
				},
			}),
		};
	},
});

export const {
	useFetchCarQuery,
	useAddCarMutation,
	useRemoveCarMutation,
	useEditCarMutation,
} = carApi;
export { carApi };
