import React, { Component } from "react";
import "./Feedback.css";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickGood = () => {
    this.setState((prevGood) => ({
      good: prevGood.good + 1,
    }));
  };
  clickNeutral = () => {
    this.setState((prevNeutral) => ({
      neutral: prevNeutral.neutral + 1,
    }));
  };
  clickBad = () => {
    this.setState((prevBad) => ({
      bad: prevBad.bad + 1,
    }));
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total ? total : 0;
  }
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const percentege = Math.round((good / this.countTotalFeedback()) * 100);
    return percentege;
  }

  render() {
    const { good, neutral, bad } = this.state;

    const TotalFeedback = this.countTotalFeedback;
    const PositiveFeedbackPercentage = this.countPositiveFeedbackPercentage;

    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button className="button" type="button" onClick={this.clickGood}>
            Good
          </button>
          <button className="button" type="button" onClick={this.clickNeutral}>
            Neutral
          </button>
          <button className="button" type="button" onClick={this.clickBad}>
            Bad
          </button>
        </div>

        <div className="stat">
          <h2>Statistics</h2>
          <p className="comment">
            Good:
            <span>{this.state.good}</span>
          </p>
          <p className="comment">
            Neutral:
            <span>{this.state.neutral}</span>
          </p>
          <p className="comment">
            Bad:
            <span>{this.state.bad}</span>
          </p>
          <p className="comment">
            Total:
            <span>{TotalFeedback}</span>
          </p>
          <p className="comment">
            Positive feedback:
            <span>{PositiveFeedbackPercentage}%</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Feedback;
