import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [
        { name: 'red', color: '#f00' },
        { name: 'yellow', color: '#ff0' },
        { name: 'green', color: '#0f0' },
        { name: 'blue', color: '#00f' },
        { name: 'violet', color: '#ee82ee' },
        { name: 'pink', color: '#ff1493' },
      ]
    };
  };

  showColor = (color) => {
    if (color === this.props.color.color) {
      return {
        border: '2px solid #000',
        backgroundColor: color,
        display: 'inline-block',
        margin: '1px',
        width: '50px',
        height: '50px'
      };
    }
    return {
      backgroundColor: color,
      display: 'inline-block',
      margin: '1px',
      width: '50px',
      height: '50px'
    };
  };

  selectColor = (color) => {
    // console.log(color);
    this.props.colorUpdate(color);
  };

  render() {
    return (
      <div className="card">
        <div className="card-header bg-primary text-light">
          Color Picker
        </div>
        <div className="card-body">
          {
            this.state.color.map((elm, index) => {
              return <span
                key={index}
                style={this.showColor(elm.color)}
                onClick={() => { this.selectColor(elm) }}
              >
              </span>
            })
          }
        </div>
      </div>

    );
  };
};

export default ColorPicker;