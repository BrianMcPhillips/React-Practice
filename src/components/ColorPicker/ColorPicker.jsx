import React, { Component } from 'react';

export default class ColorPicker extends Component {
  state = {
    text: '',
    backgroundColor: 'black',
    color: 'white'
  }

  handleChange = ({ target }) => {
    this.setState({ text: target.value });
  }

  handleBackground = ({ target }) => {
    this.setState({ backgroundColor: target.value });
  }

  handleColor = ({ target }) => {
    this.setState({ color: target.value });
  }

  render() {
    const { text, backgroundColor, color } = this.state;
    return (
      <>
        <label htmlFor="text-control">Text</label>
        <input 
          id="text-control" 
          type="text"
          value={text}
          onChange={this.handleChange}
        />
        <label htmlFor="background-color-control">Background Color</label>
        <input 
          id="background-color-control"
          type="color"
          value={backgroundColor}
          onChange={this.handleBackground} 
        />
        <label htmlFor="color-control">Text Color</label>
        <input 
          id="color-control"
          type="color"
          value={color}
          onChange={this.handleColor} 
        />
        <div 
          data-testid="display"
          style={{ 
            backgroundColor,
            color 
          }}
        >
          {text}
        </div>
      </>
    );
  }
}
