import { render, screen } from '@testing-library/react';
import HomeScreen from './Home';

// Mocked react navigation
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...(jest.requireActual('react-router-dom') as any),
	useNavigate: () => mockedUsedNavigate,
}));
// Mocked react navigation - END

describe('HomeScreen', () => {
	render(<HomeScreen />);

	const cont = screen.getByTestId('content-home');

	test('Contains test id', () => {
		expect(cont).toBeInTheDocument();
	});

	test('Contains <h1> tag', () => {
		expect(cont).toContainHTML('</h1>');
	});

	test('Contains <h4> tag', () => {
		expect(cont).toContainHTML('</h4>');
	});

	test('Contains <h5> tag', () => {
		expect(cont).toContainHTML('</h5>');
	});
});
