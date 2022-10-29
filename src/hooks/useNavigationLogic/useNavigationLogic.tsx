import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface IMobileRet {
	mobile: {
		toogleMobileMenu: boolean;
		setToggleMobileMenu: Function;
	};
	route: {
		currRoute: string;
		setRoute: Function;
	};
}

const useNavigationLogic = (): IMobileRet => {
	const [toogleMobileMenu, setToggleMobileMenu] = useState<boolean>(false);
	const [currRoute, setCurrRoute] = useState<string>('');
	const navigate = useNavigate();

	/* When links are clicked it will update the route and after updating the route navigate is activated */
	useEffect(() => {
		navigate(currRoute);
	}, [currRoute]);

	return {
		mobile: {
			toogleMobileMenu: toogleMobileMenu,
			setToggleMobileMenu: setToggleMobileMenu,
		},
		route: {
			currRoute: currRoute,
			setRoute: setCurrRoute,
		},
	};
};

export default useNavigationLogic;
