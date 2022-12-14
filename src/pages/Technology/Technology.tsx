import React from 'react';
import './technology.css';
// Components
import { NavBar } from '../../components/NavBar';
import { PageTitle } from '../../components/PageTitle';
import ErrorBoundaries from '../../components/ErrorBoundaries';
// Constants
import { TECHNOLOGY } from '../../constants/constants';
// data
import { technology } from '../../data/data';
// Hooks
import { useSubNavigation } from '../../hooks/useSubNavigation';
// SEO
import { Helmet } from 'react-helmet';

const TECH = ['vehicle', 'capsul', 'spaceport'];

const Technology: React.FunctionComponent = (): JSX.Element => {
	const { currRoute, setCurrRoute, currData, currImg } = useSubNavigation(
		technology()
	);

	return (
		<>
			<ErrorBoundaries>
				<Helmet>
					<title>Space Tourism - Technology</title>
					<meta name='Technology' content='Technology used in outer space' />
				</Helmet>
				{/* Main container */}
				<div className='main-container-tech'>
					<NavBar tech='03' />
					{/* Content container */}
					<div className='content-container-tech'>
						{/* Section Space lunch */}
						<section className='title-section-tech'>
							<PageTitle num={'03 '} title={TECHNOLOGY.title} />
						</section>
						{/* Section Space lunch - END */}

						{/* Section image */}
						<section className='image-section-tech'>
							<img src={currImg} alt={currData.name} className='tec-image' />
						</section>
						{/* Section image - END */}

						{/* Section buttons */}
						<section className='btn-section-tech'>
							{/* Sub navigation */}
							{TECH.map((route, index) => {
								return (
									<span
										className={`btn ${
											currRoute.charAt(0) === route.charAt(0)
												? 'btn-active'
												: ''
										}`}
										onClick={() => setCurrRoute(route)}
									>
										{index + 1}
									</span>
								);
							})}
							{/* Sub navigation - END */}
						</section>
						{/* Section buttons */}

						{/* Section information */}
						<section className='text-section-tech'>
							<p className='subheader-tech'>{TECHNOLOGY.subheading}</p>
							<h3>{currData.name}</h3>
							<p className='tech-description'>{currData.description}</p>
						</section>
						{/* Section information - END */}
					</div>
					{/* Content container - END */}
				</div>
				{/* Main container - END */}
			</ErrorBoundaries>
		</>
	);
};

export default Technology;
