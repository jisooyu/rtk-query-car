import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchUser } from './store';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		// Dispatch the fetchData action directly
		dispatch(fetchUser());
	}, [dispatch]);
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/dashboard'
					element={<Dashboard />}
				/>
			</Routes>
		</>
	);
}

export default App;
