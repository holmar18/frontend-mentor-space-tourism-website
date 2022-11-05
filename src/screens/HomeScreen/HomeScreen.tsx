import React from 'react';
import './homeScreen.css';
// Components
import { NavBar } from '../../components/NavBar';
import ErrorBoundaries from '../../components/ErrorBoundaries';
// data
import data from '../../data/data.json';
// SEO
import { Helmet } from 'react-helmet';

const HomeScreen: React.FunctionComponent<{}> = (): JSX.Element => {
	return (
		<>
			<ErrorBoundaries>
				<Helmet>
					<title>Space Tourism</title>
					<meta
						name='Space tourism - Home'
						content='Home page for frontend mentor challange Space tourism'
					/>
				</Helmet>
				{/* Main container */}
				<div className='main-container-home'>
					<NavBar home={'00'} />
					{/* Content container */}
					<div className='content-container' data-testid='content-home'>
						{/* Section text */}
						<section className='section-one'>
							<div>
								<h5 className='small-title'>{data.home.smalltitle}</h5>
							</div>
							<div>
								<h1 className='big-title'>{data.home.title}</h1>
							</div>
							<div>
								<p>{data.home.description}</p>
							</div>
						</section>
						{/* Section text - END */}

						{/* Section Circle */}
						<section className='section-two'>
							{/* Circle outer container */}
							<div className='cirlce-container'>
								{/* Outer Circle */}
								<div className='outer-circle'>
									{/* Inner Circle */}
									<div className='circle'>
										<h4>{data.home.explore}</h4>
									</div>
									{/* Inner Circle - END */}
								</div>
								{/* Outer Circle - END */}
							</div>
							{/* Circle outer container - END */}
						</section>
						{/* Section Circle - END */}
					</div>
					{/* Content container - END */}
				</div>
			</ErrorBoundaries>
		</>
		/* Main container - END */
	);
};

export default HomeScreen;
