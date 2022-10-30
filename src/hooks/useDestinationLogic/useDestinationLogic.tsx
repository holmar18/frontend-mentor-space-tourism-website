import { useState, useEffect } from 'react';
// Planets images
import europa from '../../assets/destination/image-europa.png';
import mars from '../../assets/destination/image-mars.png';
import moon from '../../assets/destination/image-moon.png';
import titan from '../../assets/destination/image-titan.png';
// Data
import data from '../../data/data.json';

interface IDestLogic {
	currDest: string;
	setCurrDest: Function;
	currData: object;
	currImg: string;
}

const useDestinationLogic: Function = (): IDestLogic => {
	const [currDest, setCurrDest] = useState<string>('moon');
	const [currData, setCurrData] = useState<object>(data.destinations[0]);
	const [currImg, setCurrImg] = useState<string>(mars);

	useEffect(() => {
		handleData(currDest);
	}, [currDest]);

	const handleData = (type: string) => {
		switch (type) {
			case 'europa':
				setCurrData(data.destinations[2]);
				setCurrImg(europa);
				break;
			case 'mars':
				setCurrData(data.destinations[1]);
				setCurrImg(mars);
				break;
			case 'moon':
				setCurrData(data.destinations[0]);
				setCurrImg(moon);
				break;
			default:
				setCurrData(data.destinations[3]);
				setCurrImg(titan);
				break;
		}
	};

	return {
		currDest: currDest,
		setCurrDest: setCurrDest,
		currData: currData,
		currImg: currImg,
	};
};

export default useDestinationLogic;
