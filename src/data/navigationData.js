// Destination Planets images
import europa from '../assets/destination/image-europa.png';
import mars from '../assets/destination/image-mars.png';
import moon from '../assets/destination/image-moon.png';
import titan from '../assets/destination/image-titan.png';
// Crew images
import ansari from '../assets/crew/image-anousheh-ansari.png';
import hurley from '../assets/crew/image-douglas-hurley.png';
import shuttleworth from '../assets/crew/image-mark-shuttleworth.png';
import glover from '../assets/crew/image-victor-glover.png';
// Technology
// Images landscape
import vehicleL from '../assets/technology/image-launch-vehicle-landscape.jpg';
import capsuleL from '../assets/technology/image-space-capsule-landscape.jpg';
import spaceportL from '../assets/technology/image-spaceport-landscape.jpg';
// Images Portrait
import vehicleP from '../assets/technology/image-launch-vehicle-portrait.jpg';
import capsuleP from '../assets/technology/image-space-capsule-portrait.jpg';
import spaceportP from '../assets/technology/image-spaceport-portrait.jpg';
// Data
import data from './data.json';

// props values for HOC component useSubnavigation - For the TechnologyScreen
const technology = () => {
	return {
		title: ['vehicle', 'capsul', 'spaceport'],
		data: [data.technology[0], data.technology[2], data.technology[1]],
		image:
			window.innerWidth > 1007
				? [vehicleP, capsuleP, spaceportP]
				: [vehicleL, capsuleL, spaceportL],
	};
};

// props values for HOC component useSubnavigation - For the CrewScreen
const crew = {
	title: ['hurley', 'ansari', 'shuttleworth', 'glover'],
	data: [data.crew[0], data.crew[3], data.crew[1], data.crew[2]],
	image: [hurley, ansari, shuttleworth, glover],
};

// props values for HOC component useSubnavigation - For the DestinationScreen
const destination = {
	title: ['moon', 'mars', 'europa', 'titan'],
	data: [
		data.destinations[0],
		data.destinations[1],
		data.destinations[2],
		data.destinations[3],
	],
	image: [moon, mars, europa, titan],
};

export { technology, crew, destination };
