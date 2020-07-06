import React, { Component } from 'react';

class TextArea extends Component {
  constructor(props) {
    super(props);
    this.propsColor = this.props.color;
  }

  setStyle(){
    return {
      borderWidth: '3px',
      borderStyle: 'solid',
      borderColor: this.props.color.color,
      color: this.props.color.color,
      fontSize: this.props.fontSize + 'px'
    }
  };

  setColor(){
    return {
      color: this.props.color.color
    }
  };

  render() {
    return (
      <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <p>Color: <span style={this.setColor()} >{this.props.color.name}</span> - Fontsize: {this.props.fontSize}px</p>
        <div className="d-flex justify-content-center align-items-center" style={this.setStyle()}>
          <span>Text Area</span>
        </div>
      </div>
    );
  };
};

export default TextArea;
