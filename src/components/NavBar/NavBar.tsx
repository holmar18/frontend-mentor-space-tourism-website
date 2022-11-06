import React from 'react';
import './navbar.css';
// Constants
import { NAV } from '../../constants/constants';
// Logo
import logo from '../../assets/shared/logo.svg';
import mobilemenu from '../../assets/shared/icon-hamburger.svg';
import closeMobile from '../../assets/shared/icon-close.svg';
// Hooks
import { useNavigationLogic } from '../../hooks/useNavigationLogic';

interface INavBarProps {
	home?: string;
	dest?: string;
	crew?: string;
	tech?: string;
}

const NavBar: React.FunctionComponent<INavBarProps> = ({
	home,
	dest,
	crew,
	tech,
}): JSX.Element => {
	const { mobile, route } = useNavigationLogic();

	return (
		<nav>
			{/* Logo & small line container */}
			<div className='logo-line-container'>
				{/* Logo  */}
				<div className='nav-logo-container'>
					<img src={logo} alt='logo' />
				</div>
				{/* Logo  - END */}
				{/* Small line  */}
				<span className='line'></span>
				{/* Small line  - END */}
			</div>
			{/* Logo & small line container - END */}

			{/* Hamburger menu container */}
			<div className='mobilemenu-container'>
				<img
					src={mobilemenu}
					alt='mobile-menu'
					onClick={() => mobile.setToggleMobileMenu((prev: boolean) => !prev)}
				/>
			</div>
			{/* Hamburger menu container - END */}

			{/* Links container  */}
			<div
				className={`links-container ${
					mobile.toogleMobileMenu ? 'show-mobile' : ''
				}`}
			>
				{/* Links inner container  */}
				<div className='links-inner-container'>
					<div className='mobile-close-container'>
						<img
							src={closeMobile}
							alt='mobile-close'
							onClick={() =>
								mobile.setToggleMobileMenu((prev: boolean) => !prev)
							}
						/>
					</div>
					{/* Link home  */}
					<div
						className={home ? 'active' : ''}
						onClick={() => route.setRoute('/home')}
					>
						<b>00 </b>
						{NAV.links.home}
					</div>
					{/* Link home - END  */}

					{/* Link destination  */}
					<div
						className={dest ? 'active' : ''}
						onClick={() => route.setRoute('/destination')}
					>
						<b>01 </b>
						{NAV.links.dest}
					</div>
					{/* Link destination - END */}

					{/* Link Crew  */}
					<div
						className={crew ? 'active' : ''}
						onClick={() => route.setRoute('/crew')}
					>
						<b>02 </b>
						{NAV.links.crew}
					</div>
					{/* Link Crew - END */}

					{/* Link Technology  */}
					<div
						className={tech ? 'active' : ''}
						onClick={() => route.setRoute('/tech')}
					>
						<b>03 </b>
						{NAV.links.tech}
					</div>
					{/* Link Technology - END */}
				</div>
				{/* Links inner container  - END */}
			</div>
			{/* Links container - END */}
		</nav>
	);
};

export default NavBar;
