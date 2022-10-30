import React from 'react';
import './homeScreen.css';
// Components
import { NavBar } from '../../components/NavBar';
// data
import data from '../../data/data.json';

const HomeScreen: React.FunctionComponent<{}> = (): JSX.Element => {
	return (
		/* Main container */
		<div className='main-container-home'>
			<NavBar home={'00'} />
			{/* Content container */}
			<div className='content-container'>
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
		/* Main container - END */
	);
};

export default HomeScreen;
