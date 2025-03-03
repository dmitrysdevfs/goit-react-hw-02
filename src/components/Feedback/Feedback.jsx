export default function Feedback({ feedback: { good, neutral, bad } }) {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      {/* <p>Total: {good + neutral + bad}</p>
      <p>Positive: {((good + neutral) / (good + neutral + bad)) * 100}%</p> */}
    </>
  );
}
