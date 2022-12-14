import React from 'react';
import './destination.css';
// Components
import { NavBar } from '../../components/NavBar';
import { PageTitle } from '../../components/PageTitle';
import ErrorBoundaries from '../../components/ErrorBoundaries';
// Data
import data from '../../data/data.json';
import { destination } from '../../data/data';
// Hooks
import { useSubNavigation } from '../../hooks/useSubNavigation';
// Constants
import { PLANETS } from '../../constants/constants';
// SEO
import { Helmet } from 'react-helmet';

const ROUTES = ['moon', 'mars', 'europa', 'titan'];

const Destination: React.FunctionComponent<{}> = (): JSX.Element => {
	const { currRoute, setCurrRoute, currData, currImg } =
		useSubNavigation(destination);

	return (
		<>
			<ErrorBoundaries>
				<Helmet>
					<title>Space Tourism - Destination</title>
					<meta
						name='Destination'
						content='Pick destination to visir in space'
					/>
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
								<PageTitle num={'01 '} title={data.destinScreen.pick} />
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
								{ROUTES.map((route) => {
									return (
										<div
											className={`nav-item ${
												currRoute === route ? 'nav-active' : ''
											}`}
											onClick={() => setCurrRoute(route)}
										>
											{PLANETS[`${route as keyof unknown}`]}
										</div>
									);
								})}
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
									<p className='subheading-one'>{PLANETS.dist}</p>
									<p className='subheading-two'>{currData.distance}</p>
								</div>
								{/* Distance - END */}

								{/* Time */}
								<div className='dist-time-item'>
									<p className='subheading-one'>{PLANETS.time}</p>
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
			</ErrorBoundaries>
		</>
	);
};

export default Destination;
