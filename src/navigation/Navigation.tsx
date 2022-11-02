import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Screens
import { HomeScreen } from '../screens/HomeScreen';
import { CrewScreen } from '../screens/CrewScreen';
import { DestinationScreen } from '../screens/DestinationScreen';
import { TechnologyScreen } from '../screens/TechnologyScreen';
import { ErrorScreen } from '../screens/ErrorScreen';

export interface INavigationProps {}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomeScreen />} />
				<Route path='/home' element={<HomeScreen />} />
				<Route path='/crew' element={<CrewScreen />} />
				<Route path='/destination' element={<DestinationScreen />} />
				<Route path='/tech' element={<TechnologyScreen />} />
				<Route path='*' element={<ErrorScreen />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Navigation;
