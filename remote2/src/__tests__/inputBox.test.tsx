import InputBox from "../components/InputBox";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import { sort } from "../api/SortService";

describe('Display input box', () => {
	beforeAll(() => (act(() => { render(<InputBox />) })));
	test('display table headers', () => {
		const nameOfCar =  screen.findByText('Name of Car');
		const destination =  screen.findByText('Destination');
		const receiver =  screen.findByText('Receiver');

		expect(nameOfCar).toBeDefined();
		expect(destination).toBeDefined();
		expect(receiver).toBeDefined();
	});

	test('display table content', () => {
		const nameOfCar =  screen.findByText('Car 1');
		const destination =  screen.findByText('Houston');
		const receiver =  screen.findByText('FedEx');
		
		expect(nameOfCar).toBeDefined();
		expect(destination).toBeDefined();
		expect(receiver).toBeDefined();
	});
});

describe('Display select options', () => {
	beforeAll(() => (act(() => { render(<InputBox />) })));
	test('display destinations options', () => {
		const LA =  screen.findByText('LA');
		const Houston =  screen.findByText('Houston');
		const Chicago =  screen.findByText('Chicago');

		expect(LA).toBeDefined();
		expect(Houston).toBeDefined();
		expect(Chicago).toBeDefined();
	});

	test('display receivers options', () => {
		const FedEx =  screen.findByText('FedEx');
		const OldDominion =  screen.findByText('Old Dominion');
		const UPS =  screen.findByText('UPS');
		
		expect(FedEx).toBeDefined();
		expect(OldDominion).toBeDefined();
		expect(UPS).toBeDefined();
	});
});

describe('Test input box buttons', () => {
	test('test sort button', async () => {
		const sortFn = jest.fn();
		act(() => {
			render(<InputBox />)
		});	
		const sortBtn = await screen.findByText("Sort");
		expect(sortBtn).toBeDefined();
		userEvent.click(sortBtn);
		expect(sortFn).toHaveBeenCalled();
	});
});

describe('Display output box', () => {
	beforeAll(() => (act(() => { render(<InputBox />) })));
	test('display table headers', () => {
		const classificationTrack =  screen.findByText('Classification Track');
		const nameOfCar =  screen.findByText('Name of Car');
		const destination =  screen.findByText('Destination');
		const receiver =  screen.findByText('Receiver');

		expect(classificationTrack).toBeDefined();
		expect(nameOfCar).toBeDefined();
		expect(destination).toBeDefined();
		expect(receiver).toBeDefined();
	});
});

// function renderInputBox() {
// 	return render(<InputBox />); 
// }