import React, { Component } from 'react';

class SizeOption extends Component {
  constructor(props) {
    super(props);

  };

  changeFontSize = (value) => {
    let size = parseInt(this.props.fontSize);
    size += value;
    this.props.fontSizeUpdate(size);
  };

  render() {
    return (
      <div className="card">
        <div className="card-header bg-danger">
          Size: {this.props.fontSize}px
        </div>
        <div className="card-body">
          <a href="#" className="btn btn-success mr-2" onClick={() => {this.changeFontSize(-1)}}>Giảm</a>
          <a href="#" className="btn btn-success" onClick={() => {this.changeFontSize(1)}}>Tăng</a>
        </div>
      </div>

    );
  };
};

export default SizeOption;