import React, { lazy, Suspense, FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Screens
const HomeScreen = lazy(() => import('../screens/HomeScreen'));
const CrewScreen = lazy(() => import('../screens/CrewScreen'));
const DestinationScreen = lazy(() => import('../screens/DestinationScreen'));
const TechnologyScreen = lazy(() => import('../screens/TechnologyScreen'));
const NotFoundScreen = lazy(() => import('../screens/NotFoundScreen'));
const LoadingScreen = lazy(() => import('../screens/LoadingScreen'));

export interface INavigationProps {}

const Navigation: FunctionComponent<INavigationProps> = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingScreen />}>
				<Routes>
					<Route path='/' element={<HomeScreen />} />
					<Route path='/home' element={<HomeScreen />} />
					<Route path='/crew' element={<CrewScreen />} />
					<Route path='/destination' element={<DestinationScreen />} />
					<Route path='/tech' element={<TechnologyScreen />} />
					<Route path='*' element={<NotFoundScreen />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default Navigation;
