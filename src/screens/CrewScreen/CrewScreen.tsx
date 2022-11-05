import React from 'react';
import './crewScreen.css';
// Components
import { NavBar } from '../../components/NavBar';
import { PageTitle } from '../../components/PageTitle';
import ErrorBoundaries from '../../components/ErrorBoundaries';
// constants
import { crewScreen } from '../../constants/constants';
// data
import { crew } from '../../data/navigationData';
// hooks
import { useSubNavigation } from '../../hooks/useSubNavigation';
// SEO
import { Helmet } from 'react-helmet';

const ROUTES = ['hurley', 'shuttleworth', 'glover', 'ansari'];

const CrewScreen: React.FunctionComponent = (): JSX.Element => {
	const { currRoute, setCurrRoute, currData, currImg } = useSubNavigation(crew);

	return (
		<>
			<ErrorBoundaries>
				<Helmet>
					<title>Space Tourism - Crew</title>
					<meta
						name='Crew'
						content='Get to know the crew that will fly you to outer space'
					/>
				</Helmet>
				{/* Main container */}
				<div className='main-container-crew'>
					<NavBar crew='02' />

					{/* Content container */}
					<div className='crew-content-container'>
						{/* Meet crew title */}
						<section className='meet-crew-container'>
							<PageTitle num={'02 '} title={crewScreen.meetTitle} />
						</section>
						{/* Meet crew title - END */}

						{/* Information section */}
						<section className='info-section'>
							<div className='info-container'>
								<h4>{currData.role}</h4>
								<h3>{currData.name}</h3>
								<p>{currData.bio}</p>
							</div>
						</section>
						{/* Information section - END */}

						{/* Sub navigation Dots */}
						<section className='dots-section'>
							<div className='dots-container'>
								{ROUTES.map((route) => {
									return (
										<span
											className={`dot ${
												currRoute.charAt(0) === route.charAt(0)
													? 'dot-active'
													: ''
											}`}
											onClick={() => setCurrRoute(route)}
										></span>
									);
								})}
							</div>
						</section>
						{/* Sub navigation Dots - END */}

						{/* Image section */}
						<section className='image-section'>
							<div className='image-container'>
								<img src={currImg} alt={currData.name + ' ' + currData.role} />
							</div>
						</section>
						{/* Image section */}
					</div>
					{/* Content container */}
				</div>
				{/* Main container - END */}
			</ErrorBoundaries>
		</>
	);
};

export default CrewScreen;
