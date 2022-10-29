import React from 'react';
import './destinationScreen.css';
// Components
import { NavBar } from '../../components/NavBar';

const DestinationScreen: React.FC<{}> = () => {
	return (
		/* Main container */
		<div className='main-container-dest'>
			<NavBar dest={'01'} />
		</div>
		/* Main container - END */
	);
};

export default DestinationScreen;
