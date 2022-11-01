import { useEffect, useState } from 'react';

interface ISubNavProps {
	title: Array<string>;
	data: Array<object>;
	image: Array<string>;
}

interface ISubNavRet {
	currRoute: string;
	setCurrRoute: Function;
	currData: object;
	currImg: string;
}

const useSubNavigation: Function = (props: ISubNavProps): ISubNavRet => {
	const [currRoute, setCurrRoute] = useState<string>(props.title[0]);
	const [currData, setCurrData] = useState<object>(props.data[0]);
	const [currImg, setCurrImg] = useState<string>(props.image[0]);

	useEffect(() => {
		handleData(currRoute);
	}, [currRoute]);

	const handleData = (type: string): void => {
		for (var i = 0; i < props.title.length; i++) {
			if (props.title[i] === type) {
				setCurrData(props.data[i]);
				setCurrImg(props.image[i]);
				break;
			}
		}
	};

	return {
		currRoute: currRoute,
		setCurrRoute: setCurrRoute,
		currData: currData,
		currImg: currImg,
	};
};

export default useSubNavigation;
