import { useState, useEffect } from 'react';
// Images landscape
import vehicleL from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import capsuleL from '../../assets/technology/image-space-capsule-landscape.jpg';
import spaceportL from '../../assets/technology/image-spaceport-landscape.jpg';
// Images Portrait
import vehicleP from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import capsuleP from '../../assets/technology/image-space-capsule-portrait.jpg';
import spaceportP from '../../assets/technology/image-spaceport-portrait.jpg';
// Data
import data from '../../data/data.json';

interface ITechnology {
	currRoute: string;
	setCurrRoute: Function;
	currData: object;
	currImg: string;
}

const useTechnologyLogic: Function = (): ITechnology => {
	const [currRoute, setCurrRoute] = useState<string>('vehicle');
	const [currData, setCurrData] = useState<object>(data.technology[0]);
	const [currImg, setCurrImg] = useState<string>(
		window.innerWidth > 1007 ? vehicleP : vehicleL
	);

	useEffect(() => {
		handleData(currRoute);
	}, [currRoute]);

	const handleData: Function = (route: string): void => {
		const ww = window.innerWidth > 1007;

		console.log('Window width: ', window.innerWidth);
		switch (route) {
			case 'vehicle':
				setCurrData(data.technology[0]);
				setCurrImg(ww ? vehicleP : vehicleL);
				break;
			case 'capsule':
				setCurrData(data.technology[2]);
				setCurrImg(ww ? capsuleP : capsuleL);
				break;
			default:
				setCurrData(data.technology[1]);
				setCurrImg(ww ? spaceportP : spaceportL);
		}
	};

	return {
		currRoute: currRoute,
		setCurrRoute: setCurrRoute,
		currData: currData,
		currImg: currImg,
	};
};

export default useTechnologyLogic;
