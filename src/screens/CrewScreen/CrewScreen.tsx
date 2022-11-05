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

						{/* Dots section */}
						<section className='dots-section'>
							<div className='dots-container'>
								<span
									className={`dot ${
										currRoute.charAt(0) === 'h' ? 'dot-active' : ''
									}`}
									onClick={() => setCurrRoute('hurley')}
								></span>
								<span
									className={`dot ${
										currRoute.charAt(0) === 's' ? 'dot-active' : ''
									}`}
									onClick={() => setCurrRoute('shuttleworth')}
								></span>
								<span
									className={`dot ${
										currRoute.charAt(0) === 'g' ? 'dot-active' : ''
									}`}
									onClick={() => setCurrRoute('glover')}
								></span>
								<span
									className={`dot ${
										currRoute.charAt(0) === 'a' ? 'dot-active' : ''
									}`}
									onClick={() => setCurrRoute('ansari')}
								></span>
							</div>
						</section>
						{/* Dots section - END */}

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
