import { createYield } from 'typescript';

describe('Test main navigation', () => {
	beforeEach(() => {
		cy.viewport(1920, 1120);
		cy.visit('http://localhost:3000');
	});

	it('Should be on the index', () => {
		cy.url().should('include', '/');
	});

	it('Should navigate to destination', () => {
		cy.contains('01 Destination').click();
		cy.url().should('include', '/destination');
	});

	it('Should navigate to crew', () => {
		cy.contains('02 Crew').click();
		cy.url().should('include', '/crew');
	});

	it('Should navigate to technology', () => {
		cy.contains('03 Technology').click();
		cy.url().should('include', '/tech');
	});
});

describe('Test destination navigation', () => {
	beforeEach(() => {
		cy.viewport(1920, 1120);
		cy.visit('http://localhost:3000/destination');
	});

	it('Travel time should be 3 days', () => {
		cy.contains('3 days');
	});

	it('Travel time should be 9 months', () => {
		cy.contains('MARS').click();
		cy.contains('9 months');
	});

	it('Travel time should be 3 years', () => {
		cy.contains('EUROPA').click();
		cy.contains('3 years');
	});

	it('Travel time should be 7 years', () => {
		cy.contains('TITAN').click();
		cy.contains('7 years');
	});
});

describe('Test crew navigation', () => {
	beforeEach(() => {
		cy.viewport(1920, 1120);
		cy.visit('http://localhost:3000/crew');
	});

	it('Should show Douglas Hurley', () => {
		cy.contains('Douglas Hurley');
	});

	it('Should show Mark Shouttleworth', () => {
		cy.get('.dot').first().next().click();
		cy.contains('Mark Shuttleworth');
	});

	it('Should show Victor Glover', () => {
		cy.get('.dot').first().next().next().click();
		cy.contains('Victor Glover');
	});

	it('Should show Anousheh Ansari', () => {
		cy.get('.dot').last().click();
		cy.contains('Anousheh Ansari');
	});
});

describe('Test Technology navigation', () => {
	beforeEach(() => {
		cy.viewport(1920, 1120);
		cy.visit('http://localhost:3000/tech');
	});

	it('Should show Launch Vehicle', () => {
		cy.contains('launch vehicle');
	});

	it('Should show Space Capsule', () => {
		cy.get('.btn').first().next().click();
		cy.contains('space capsule');
	});

	it('Should show Space Capsule', () => {
		cy.get('.btn').last().click();
		cy.contains('spaceport');
	});
});
