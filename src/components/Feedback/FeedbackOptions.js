import React from "react";
import s from "./Feedback.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option) => (
    <button
      key={option}
      type="button"
      className={s.button}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
};
export default FeedbackOptions;
