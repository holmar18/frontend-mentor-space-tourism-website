import React, { lazy, Suspense, FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Screens
const Home = lazy(() => import('../pages/Home'));
const Crew = lazy(() => import('../pages/Crew'));
const Destination = lazy(() => import('../pages/Destination'));
const Technology = lazy(() => import('../pages/Technology'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Loading = lazy(() => import('../pages/Loading'));

export interface INavigationProps {}

const Navigation: FunctionComponent<INavigationProps> = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route path='/crew' element={<Crew />} />
					<Route path='/destination' element={<Destination />} />
					<Route path='/tech' element={<Technology />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default Navigation;
