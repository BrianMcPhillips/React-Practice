import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ backgroundColor, color, text }) => (
  <div 
    data-testid="display"
    style={{ 
      backgroundColor,
      color 
    }}
  >
    {text}
  </div>
);

Display.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired

};

export default Display;
