import React from "react";
import s from "../Feedback/Feedback.module.css";

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <div className={s.stat}>
    <h2>Statistics</h2>
    <p className={s.comment}>
      Good:
      <span>{good}</span>
    </p>
    <p className={s.comment}>
      Neutral:
      <span>{neutral}</span>
    </p>
    <p className={s.comment}>
      Bad:
      <span>{bad}</span>
    </p>
    <p className={s.comment}>
      Total:
      <span>{total}</span>
    </p>
    <p className={s.comment}>
      Positive feedback:
      <span>{positiveFeedback}%</span>
    </p>
  </div>
);

export default Statistics;
