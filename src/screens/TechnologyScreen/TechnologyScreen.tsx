import React from 'react';
import './technologyScreen.css';
// Components
import { NavBar } from '../../components/NavBar';
// Constants
import { techSreen } from '../../constants/constants';
// Hooks
import { useTechnologyLogic } from '../../hooks/useTechnologyLogic';

const TechnologyScreen: React.FunctionComponent = (): JSX.Element => {
	const { currRoute, setCurrRoute, currData, currImg } = useTechnologyLogic();

	return (
		<div className='main-container-tech'>
			<NavBar tech='03' />
			<div className='content-container'>
				<section className='title-section'>
					<h5>
						<b>03 </b>
						{techSreen.title}
					</h5>
				</section>
				<section className='image-section'>
					<img src={currImg} alt={currData.name} className='tec-image' />
				</section>
				<section className='btn-section'>
					<span
						className={`btn ${currRoute.charAt(0) === 'v' ? 'btn-active' : ''}`}
						onClick={() => setCurrRoute('vehicle')}
					>
						1
					</span>
					<span
						className={`btn ${currRoute.charAt(0) === 'c' ? 'btn-active' : ''}`}
						onClick={() => setCurrRoute('capsule')}
					>
						2
					</span>
					<span
						className={`btn ${currRoute.charAt(0) === 's' ? 'btn-active' : ''}`}
						onClick={() => setCurrRoute('spaceport')}
					>
						3
					</span>
				</section>
				<section className='text-section'>
					<p className='subheader'>{techSreen.subheading}</p>
					<h3>{currData.name}</h3>
					<p className='tech-description'>{currData.description}</p>
				</section>
			</div>
		</div>
	);
};

export default TechnologyScreen;
