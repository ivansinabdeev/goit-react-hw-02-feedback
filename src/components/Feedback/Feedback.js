import React from "react";
import "./Feedback.css";

class Feedback extends React.Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  clickGood = () => {
    console.log("its good");
  };
  clickNeutral = () => {
    console.log("its neutral");
  };
  clickBad = () => {
    console.log("its bad");
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button" onClick={this.clickGood}>
            Good
          </button>
          <button type="button" onClick={this.clickNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.clickBad}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <div className="stat">
          <span className="comment">
            Good:
            <span>{this.state.good}</span>
          </span>
          <span className="comment">
            Neutral:
            <span>{this.state.neutral}</span>
          </span>
          <span className="comment">
            Bad:
            <span>{this.state.bad}</span>
          </span>
        </div>
      </div>
    );
  }
}

export default Feedback;
