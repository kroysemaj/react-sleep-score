import { useReducer } from 'react';
import SleepScoreForm from './SleepScoreForm';
import SleepScoreResult from './SleepScoreResult';
import {
  sleepScoreReducer,
  updateDurationAsleep,
  updateDurationInBed,
} from '../store/sleepScoreReducer';

const SleepScore = () => {
  const [state, dispatch] = useReducer(sleepScoreReducer, sleepScoreReducer());
  return (
    <div>
      <h1>Let's score your latest sleep!</h1>
      <SleepScoreForm
        scores={state}
        updateDurationAsleep={() => dispatch(updateDurationAsleep())}
        updateDurationInBed={() => dispatch(updateDurationInBed())}
      />
      <SleepScoreResult result={state} />
    </div>
  );
};

export default SleepScore;
