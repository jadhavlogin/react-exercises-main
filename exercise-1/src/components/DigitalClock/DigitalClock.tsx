import React, { Component } from 'react';
import { render } from 'react-dom';

import "../../index.css";

interface AppProps { }
interface AppState {
  digitalClock: Date;
}

class DigitalClock extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      digitalClock: new Date()
    };
  }

  setClockTime = () => {
    this.setState({
      digitalClock: new Date()
    });
  }

  componentDidMount () {
    setInterval(this.setClockTime, 1000)
  }

  render() {
    return (
      <div className="clockContainer">
        <p>{this.state.digitalClock.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default DigitalClock;
