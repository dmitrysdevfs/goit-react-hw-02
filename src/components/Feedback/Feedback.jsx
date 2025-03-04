import css from './Feedback.module.css';

export default function Feedback({
  feedback: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div className={css.wrapper}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      {totalFeedback > 0 && (
        <>
          <p>Total: {totalFeedback}</p>
          <p>Positive: {positiveFeedback}%</p>
        </>
      )}
    </div>
  );
}
