import css from './Options.module.css';

export default function Options({ onUpdate }) {
  return (
    <div className={css.wrapper}>
      <button onClick={() => onUpdate('good')}>Good</button>
      <button onClick={() => onUpdate('neutral')}>Neutral</button>
      <button onClick={() => onUpdate('bad')}>Bad</button>
      {/* <button>Reset</button> */}
    </div>
  );
}
