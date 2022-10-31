import React from 'react';
import './crewScreen.css';
// Components
import { NavBar } from '../../components/NavBar';
// constants
import { crewScreen } from '../../constants/constants';
// hooks
import { useCrewLogic } from '../../hooks/useCrewLogic';
// SEO
import { Helmet } from 'react-helmet';

const CrewScreen: React.FunctionComponent = (): JSX.Element => {
	const { currCrewData, currImg, currCrew, setCurrCrew } = useCrewLogic();

	return (
		<>
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
						<h5>
							<b>02 </b>
							{crewScreen.meetTitle}
						</h5>
					</section>
					{/* Meet crew title - END */}

					{/* Information section */}
					<section className='info-section'>
						<div className='info-container'>
							<h4>{currCrewData.role}</h4>
							<h3>{currCrewData.name}</h3>
							<p>{currCrewData.bio}</p>
						</div>
					</section>
					{/* Information section - END */}

					{/* Dots section */}
					<section className='dots-section'>
						<div className='dots-container'>
							<span
								className={`dot ${
									currCrew.charAt(0) === 'h' ? 'dot-active' : ''
								}`}
								onClick={() => setCurrCrew('hurley')}
							></span>
							<span
								className={`dot ${
									currCrew.charAt(0) === 's' ? 'dot-active' : ''
								}`}
								onClick={() => setCurrCrew('shuttleworth')}
							></span>
							<span
								className={`dot ${
									currCrew.charAt(0) === 'g' ? 'dot-active' : ''
								}`}
								onClick={() => setCurrCrew('glover')}
							></span>
							<span
								className={`dot ${
									currCrew.charAt(0) === 'a' ? 'dot-active' : ''
								}`}
								onClick={() => setCurrCrew('ansari')}
							></span>
						</div>
					</section>
					{/* Dots section - END */}

					{/* Image section */}
					<section className='image-section'>
						<div className='image-container'>
							<img
								src={currImg}
								alt={currCrewData.name + ' ' + currCrewData.role}
							/>
						</div>
					</section>
					{/* Image section */}
				</div>
				{/* Content container */}
			</div>
			{/* Main container - END */}
		</>
	);
};

export default CrewScreen;
