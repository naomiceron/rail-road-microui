import React from 'react';
import { render, screen } from '@testing-library/react';
import Destinations from '../../components/Destinations';

describe('Destionations Component', () => {
  it('should render Destionation component', () => {
    render(<Destinations />);
    const linkElement = screen.getByText(/Destination/i);
    expect(linkElement).toBeDefined();
  });
});
