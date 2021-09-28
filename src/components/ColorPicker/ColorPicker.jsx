import React, { Component } from 'react';
import Controls from './Controls/Controls';

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
        <Controls 
          text={text}
          backgroundColor={backgroundColor}
          color={color}
          handleChange={this.handleChange}
          handleBackground={this.handleBackground}
          handleColor={this.handleColor}
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
