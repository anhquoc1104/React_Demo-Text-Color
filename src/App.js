import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import SizeOption from './components/SizeOption';
import TextArea from './components/TextArea';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: { name: 'red', color: '#f00' },
      fontSize: '15'
    };
    // this.colorChange = this.colorChange.bind(this);
  };

  colorChange = (color) => {
    // console.log(color);
    this.setState({
      color: color
    });
    // console.log(this.state.color);
  };

  fontSizeChange = (fontSize) => {
    if(fontSize < 1 || fontSize > 50) return;
    this.setState({
      fontSize: fontSize
    });
  };

  reset = () => {
    this.setState({
      color: { name: 'red', color: '#f00' },
      fontSize: '15'
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <ColorPicker color={this.state.color} colorUpdate={this.colorChange} />
            </div>
            <div className="col col-lg-6 col-md-6 col-sm-6 col-xs-66">
              <SizeOption fontSize={this.state.fontSize} fontSizeUpdate={this.fontSizeChange}/>
              <Reset reset={this.reset} />
            </div>
          </div>
          <div className="row">
            <TextArea color={this.state.color} fontSize={this.state.fontSize} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
