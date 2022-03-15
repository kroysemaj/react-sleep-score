import { useReducer } from 'react';
import SleepScoreForm from './SleepScoreForm';
import SleepScoreResult from './SleepScoreResult';

const SleepScore = () => {
  return (
    <div>
      <h1>Let's score your latest sleep!</h1>
      <SleepScoreForm />
      <SleepScoreResult />
    </div>
  );
};

export default SleepScore;
