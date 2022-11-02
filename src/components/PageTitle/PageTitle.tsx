import React from 'react';
import './pageTitle.css';

interface IPageTitleProps {
	num: string;
	title: string;
}

const PageTitle: React.FunctionComponent<IPageTitleProps> = ({
	num,
	title,
}): JSX.Element => {
	return (
		<>
			<h5 className='page-title'>
				<b>{num}</b>
				{title}
			</h5>
		</>
	);
};

export default PageTitle;
