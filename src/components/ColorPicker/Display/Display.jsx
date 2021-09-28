import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Display extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired

  }
  render() {
    const {
      backgroundColor,
      color,
      text
    } = this.props;
    return (
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
  }
}
