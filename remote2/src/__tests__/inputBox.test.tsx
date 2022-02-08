import InputBox from "../components/InputBox";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

describe('render table structure', () => {
	jest.mock('remote1/TrainService', 
		() => { 
			// some mocking for my remote app routes
		},
		{ virtual: true }
	);
	it('display table headers', async () => {
		const { findByText } = renderInputBox();
		//const nameOfCar = await findByText("Name Of Car");
    	//expect(nameOfCar).not.toBeUndefined();
	});
});

function renderInputBox() {
	return render(<InputBox />); 
}