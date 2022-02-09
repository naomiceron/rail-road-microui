import InputBox from '../components/InputBox';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';

describe('render table structure', () => {
  const renderComponent = () => render(<InputBox />);

  it('display table headers', async () => {
    renderComponent();
    const nameOfCar = await screen.findByText('Name Of Car');
    //const nameOfCar = await findByText("Name Of Car");
    expect(nameOfCar).not.toBeUndefined();
  });
});

function renderInputBox() {
  return render(<InputBox />);
}
