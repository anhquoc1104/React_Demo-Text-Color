import React, { Component } from 'react';

class Reset extends Component {

  resetDefault = () => {
    // let obj = { name: 'red', color: '#f00' };
    this.props.reset();
    // this.props.colorUpdate('15')
  }

  render() {
    return (
      <div className="btn btn-primary mt-3" onClick={this.resetDefault}>reset</div>

    );
  };
};

export default Reset;