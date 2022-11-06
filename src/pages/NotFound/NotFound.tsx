import React from 'react';
import './notFound.css';

import { TbError404 } from 'react-icons/tb';

const NotFound = () => {
	return (
		<div className='error-main-container'>
			<div className='error-inner-container'>
				<TbError404 className='error-icon' />
				<h2 className='error-title'>OOPS!</h2>
				<h4 className='error-subtitle'>
					We can't seem to find the page you're looking for
				</h4>
			</div>
		</div>
	);
};

export default NotFound;
