import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

export function useThunk(thunk) {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const dispatch = useDispatch();

	const runThunk = useCallback(
		async (arg) => {
			try {
				setIsLoading(true);
				const resultAction = await dispatch(thunk(arg));
				setIsLoading(false);
				// to extract the payload of the promise from dispatching thunk, use unwrapResult or unwrap
				const response = unwrapResult(resultAction);
				return response;
			} catch (err) {
				setIsLoading(false);
				setError(err);
				return [null, err];
			}
		},
		[dispatch, thunk]
	);

	return [runThunk, isLoading, error];
}
