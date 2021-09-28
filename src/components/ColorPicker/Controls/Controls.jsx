import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Controls extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBackground: PropTypes.func.isRequired,
    handleColor: PropTypes.func.isRequired
  }
  render() {
    const { 
      text, 
      backgroundColor, 
      color,
      handleChange,
      handleBackground,
      handleColor 
    } = this.props;
    return (
      <>
        <label htmlFor="text-control">Text</label>
        <input 
          id="text-control" 
          type="text"
          value={text}
          onChange={handleChange}
        />
        <label htmlFor="background-color-control">Background Color</label>
        <input 
          id="background-color-control"
          type="color"
          value={backgroundColor}
          onChange={handleBackground} 
        />
        <label htmlFor="color-control">Text Color</label>
        <input 
          id="color-control"
          type="color"
          value={color}
          onChange={handleColor} 
        />
      </>
    );
  }
}
