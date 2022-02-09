import React from 'react';
import { render, screen } from '@testing-library/react';
import Prueba from '../../components/Prueba';

describe('render table structure', () => {
  test('renders learn react link', () => {
    renderInputBox();
    const linkElement = screen.getByText(/HOLAAAAA/i);
    expect(linkElement).toBeDefined();
  });
});

function renderInputBox() {
  return render(<Prueba />);
}
