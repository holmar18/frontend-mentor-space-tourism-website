import React from 'react';
import './destinationScreen.css';
// Components
import { NavBar } from '../../components/NavBar';
// Data
import data from '../../data/data.json';
// Hooks
import { useDestinationLogic } from '../../hooks/useDestinationLogic';
// Constants
import { planetsScreen } from '../../constants/constants';
// SEO
import { Helmet } from 'react-helmet';

const DestinationScreen: React.FunctionComponent<{}> = (): JSX.Element => {
	const { currDest, setCurrDest, currData, currImg } = useDestinationLogic();

	return (
		<>
			<Helmet>
				<title>Space Tourism - Destination</title>
				<meta name='Destination' content='Pick destination to visir in space' />
			</Helmet>
			{/* Main container */}
			<div className='main-container-dest'>
				<NavBar dest={'01'} />
				{/* Content container */}
				<div className='main-content-container'>
					{/* Section globe image */}
					<section>
						{/* Pick destination title */}
						<div className='pick-dest-container'>
							<h5>
								<b>01 </b>
								{data.destinScreen.pick}
							</h5>
						</div>
						{/* Pick destination title - END */}

						{/* Globe image */}
						<div className='center'>
							<img src={currImg} alt={currData.name} className='planet-img' />
						</div>
						{/* Globe image - END */}
					</section>
					{/* Section globe image - END */}

					{/* Section nav, destination & Description */}
					<section>
						{/* Navigation */}
						<div className='navigation'>
							<div
								className={`nav-item ${
									currDest === 'moon' ? 'nav-active' : ''
								}`}
								onClick={() => setCurrDest('moon')}
							>
								{planetsScreen.moon}
							</div>
							<div
								className={`nav-item ${
									currDest === 'mars' ? 'nav-active' : ''
								}`}
								onClick={() => setCurrDest('mars')}
							>
								{planetsScreen.mars}
							</div>
							<div
								className={`nav-item ${
									currDest === 'europa' ? 'nav-active' : ''
								}`}
								onClick={() => setCurrDest('europa')}
							>
								{planetsScreen.europa}
							</div>
							<div
								className={`nav-item ${
									currDest === 'titan' ? 'nav-active' : ''
								}`}
								onClick={() => setCurrDest('titan')}
							>
								{planetsScreen.titan}
							</div>
						</div>
						{/* Navigation - END */}

						{/* Title & Description */}
						<div className='center title-desc-container'>
							<h1 className='title'>{currData.name}</h1>
							<p className='description'>{currData.description}</p>
						</div>
						{/* Title & Description - END */}

						{/* Distance & Time */}
						<div className='dist-time-container'>
							{/* Distance */}
							<div className='dist-time-item'>
								<p className='subheading-one'>{planetsScreen.dist}</p>
								<p className='subheading-two'>{currData.distance}</p>
							</div>
							{/* Distance - END */}

							{/* Time */}
							<div className='dist-time-item'>
								<p className='subheading-one'>{planetsScreen.time}</p>
								<p className='subheading-two'>{currData.travel}</p>
							</div>
							{/* Time - END */}
						</div>
						{/* Distance & Time */}
					</section>
					{/* Section nav, destination & Description - END */}
				</div>
				{/* Content container - END */}
			</div>
			{/* Main container - END */}
		</>
	);
};

export default DestinationScreen;
