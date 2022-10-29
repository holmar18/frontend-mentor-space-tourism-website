import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Screens
import { HomeScreen } from '../screens/HomeScreen';
import { CrewScreen } from '../screens/CrewScreen';
import { DestinationScreen } from '../screens/DestinationScreen';
import { TechnologyScreen } from '../screens/TechnologyScreen';

export interface INavigationProps {}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/home' element={<HomeScreen />} />
				<Route path='/crew' element={<CrewScreen />} />
				<Route path='/destination' element={<DestinationScreen />} />
				<Route path='/tech' element={<TechnologyScreen />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Navigation;
