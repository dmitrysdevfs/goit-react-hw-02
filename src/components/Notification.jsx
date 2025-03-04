export default function Notification({ totalFeedback, positiveFeedback }) {
  return (
    <>
      {totalFeedback > 0 ? (
        <div>
          <p>Total: {totalFeedback}</p>
          <p>Positive: {positiveFeedback}%</p>
        </div>
      ) : (
        <p>No feedback yet</p>
      )}
    </>
  );
}
