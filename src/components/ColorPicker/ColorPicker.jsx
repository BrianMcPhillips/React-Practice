import React, { Component } from 'react';

export default class ColorPicker extends Component {
  state = {
    text: ''
  }

  handleChange = ({ target }) => {
    this.setState({ text: target.value });
  }
  render() {
    const { text } = this.state;
    return (
      <>
        <label htmlFor="text-control">Text</label>
        <input 
          id="text-control" 
          type="text"
          value={text}
          onChange={this.handleChange}
        />
        <div data-testid="display">{text}</div>
      </>
    );
  }
}
