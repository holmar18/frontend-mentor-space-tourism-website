import { useState, useEffect } from 'react';
// Images
import ansari from '../../assets/crew/image-anousheh-ansari.png';
import hurley from '../../assets/crew/image-douglas-hurley.png';
import shuttleworth from '../../assets/crew/image-mark-shuttleworth.png';
import glover from '../../assets/crew/image-victor-glover.png';
// data
import data from '../../data/data.json';

interface ICrewLogic {
	currCrewData: object;
	currImg: string;
	currCrew: string;
	setCurrCrew: Function;
}

const useCrewLogic: Function = (): ICrewLogic => {
	const [currCrew, setCurrCrew] = useState<string>('hurley');
	const [currImg, setCurrImg] = useState<string>(hurley);
	const [currCrewData, setCurrCrewData] = useState<object>(data.crew[0]);

	useEffect(() => {
		handleDotClick(currCrew);
	}, [currCrew]);

	const handleDotClick: Function = (crew: string) => {
		switch (crew) {
			case 'hurley':
				setCurrCrewData(data.crew[0]);
				setCurrImg(hurley);
				break;
			case 'ansari':
				setCurrCrewData(data.crew[3]);
				setCurrImg(ansari);
				break;
			case 'shuttleworth':
				setCurrCrewData(data.crew[1]);
				setCurrImg(shuttleworth);
				break;
			default:
				setCurrCrewData(data.crew[2]);
				setCurrImg(glover);
		}
	};

	return {
		currCrewData: currCrewData,
		currImg: currImg,
		currCrew: currCrew,
		setCurrCrew: setCurrCrew,
	};
};

export default useCrewLogic;
