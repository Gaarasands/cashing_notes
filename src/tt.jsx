import React, { Component } from 'react';

class TimeTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTracking: false,
      entryTime: null,
      leavingTime: null,
    };
  }

  handleButtonClick = () => {
    if (!this.state.isTracking) {
      // Start tracking time
      this.setState({
        isTracking: true,
        entryTime: new Date(),
      });
    } else {
      // Stop tracking time
      this.setState({
        isTracking: false,
        leavingTime: new Date(),
      });
    }
  };

  calculateTimeDifference = () => {
    const { entryTime, leavingTime } = this.state;
    if (entryTime && leavingTime) {
      const diffInMilliseconds = leavingTime - entryTime;
      const diffInMinutes = Math.floor((diffInMilliseconds *1000) / (1000 * 60));
      return diffInMinutes;
    }
    return 0;
  };

  render() {
    const { isTracking, entryTime, leavingTime } = this.state;

    return (
      <div>
        <div>
          Entry Time: {entryTime ? entryTime.toLocaleTimeString() : 'N/A'}
        </div>
        <div>
          Leaving Time: {leavingTime ? leavingTime.toLocaleTimeString() : 'N/A'}
        </div>
        <div>
          Time between in minutes: {this.calculateTimeDifference()}
        </div>
        <button onClick={this.handleButtonClick}>
          {isTracking ? 'Leave' : 'Start'}
        </button>
      </div>
    );
  }
}

export default TimeTracker;
