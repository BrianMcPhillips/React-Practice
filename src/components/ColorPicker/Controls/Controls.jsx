import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({
  text,
  backgroundColor,
  color,
  handleChange,
  handleBackground,
  handleColor
}) => (
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

Controls.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBackground: PropTypes.func.isRequired,
  handleColor: PropTypes.func.isRequired
};

export default Controls;
