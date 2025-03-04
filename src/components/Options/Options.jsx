import css from './Options.module.css';

export default function Options({ onUpdate, totalFeedback }) {
  return (
    <div className={css.wrapper}>
      <button onClick={() => onUpdate('good')}>Good</button>
      <button onClick={() => onUpdate('neutral')}>Neutral</button>
      <button onClick={() => onUpdate('bad')}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={() => onUpdate('reset')}>Reset</button>
      )}
    </div>
  );
}
