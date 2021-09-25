import '@babel/polyfill';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ColorPicker from './ColorPicker';

describe('ColorPicker component', () => {
  it('changes the text when the text input is manipulated', async() => {
    render(<ColorPicker />);
    const textInput = await screen.findByLabelText('Text');
    fireEvent.change(textInput, { target: { value: 'my text' } });

    const display = await screen.findByTestId('display');
    await waitFor(() => {
      expect(display).toHaveTextContent('my text');
    });
  });
});
