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

  it('changes the displays background color on ColorChange', async() => {
    render(<ColorPicker />);
    const backgroundColorInput = await screen
      .findByLabelText('Background Color');
    const display = await screen.findByTestId('display');

    fireEvent.change(backgroundColorInput, { target: { value: '#FF0000' } });
    await waitFor(() => {
      expect(display).toHaveStyle({ 
        backgroundColor: '#FF0000',
        color: 'white' 
      });
    });
  });

  it('changes the displays text color', async() => {
    render(<ColorPicker />);
    const textColorInput = await screen.findByLabelText('Text Color');
    const display = await screen.findByTestId('display');

    fireEvent.change(textColorInput, { target: { value: '#00FF00' } });
    await waitFor(() => {
      expect(display).toHaveStyle({ 
        backgroundColor: 'black', 
        color: '#00FF00' 
      });
    });
  });

//   it('changes the background of the entire page', async() => {
//     render(<ColorPicker />);
//     const textTwoInput = await screen.findByLabelText('Text two');
//     const display = await screen.findByTestId('display');

//     fireEvent.change(textTwoInput, { target: { value: 'Yo maaaaa' } });
//     await waitFor(() => {
//       expect(display).toHaveTextContent('Yo maaaaa');
//     });
//   });
});
