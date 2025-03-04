import { useState } from 'react';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification';
import css from './App.module.css';

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    feedbackType !== 'reset'
      ? setFeedback({
          ...feedback,
          [feedbackType]: feedback[feedbackType] + 1,
        })
      : setFeedback({
          good: 0,
          neutral: 0,
          bad: 0,
        });
  };

  return (
    <>
      <div className={css.container}>
        <Description />
        <Options onUpdate={updateFeedback} totalFeedback={totalFeedback} />

        {totalFeedback > 0 && <Feedback feedback={feedback} />}

        <Notification
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      </div>
    </>
  );
}
