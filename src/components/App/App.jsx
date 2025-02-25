import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import css from './App.module.css';

export default function App() {
  return (
    <>
      <div className={css.container}>
        <Description />
        <Options />
        <Feedback />
      </div>
    </>
  );
}
