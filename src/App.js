import React, { Component } from "react";
import FeedbackOptions from "./components/Feedback/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notifications from "./components/Notifications/Notifications";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getOptionsValues = () => Object.keys(this.state);

  onLeaveFeedback = (option) => {
    this.setState((prevState) => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    //общеe количествo собранных отзывов из всех категорий
    let totalFeedback = Object.values(this.state).reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const percentege = Math.round((good / this.countTotalFeedback()) * 100);
    return percentege || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    // const totalFeedbacks = this.countTotalFeedback;
    // const positivePercentage = this.countPositiveFeedbackPercentage;

    return (
      <div>
        <section title="Please leave feedback">
          <FeedbackOptions
            options={this.getOptionsValues()}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </section>
        <section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positiveFeedback={this.countPositiveFeedbackPercentage}
            ></Statistics>
          ) : (
            <Notifications message="No feedback given" />
          )}
        </section>
      </div>
    );
  }
}

export default App;
