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
		/* Main container */
		<div className='main-container-tech'>
			<NavBar tech='03' />
			{/* Content container */}
			<div className='content-container-tech'>
				{/* Section Space lunch */}
				<section className='title-section-tech'>
					<h5>
						<b>03 </b>
						{techSreen.title}
					</h5>
				</section>
				{/* Section Space lunch - END */}

				{/* Section image */}
				<section className='image-section-tech'>
					<img src={currImg} alt={currData.name} className='tec-image' />
				</section>
				{/* Section image - END */}

				{/* Section buttons */}
				<section className='btn-section-tech'>
					{/* button 1 */}
					<span
						className={`btn ${currRoute.charAt(0) === 'v' ? 'btn-active' : ''}`}
						onClick={() => setCurrRoute('vehicle')}
					>
						1
					</span>
					{/* button 1 - END */}

					{/* button 2 */}
					<span
						className={`btn ${currRoute.charAt(0) === 'c' ? 'btn-active' : ''}`}
						onClick={() => setCurrRoute('capsule')}
					>
						2
					</span>
					{/* button 2 - END */}

					{/* button 3 */}
					<span
						className={`btn ${currRoute.charAt(0) === 's' ? 'btn-active' : ''}`}
						onClick={() => setCurrRoute('spaceport')}
					>
						3
					</span>
					{/* button 3 - END */}
				</section>
				{/* Section buttons */}

				{/* Section information */}
				<section className='text-section-tech'>
					<p className='subheader-tech'>{techSreen.subheading}</p>
					<h3>{currData.name}</h3>
					<p className='tech-description'>{currData.description}</p>
				</section>
				{/* Section information - END */}
			</div>
			{/* Content container - END */}
		</div>
		/* Main container - END */
	);
};

export default TechnologyScreen;
