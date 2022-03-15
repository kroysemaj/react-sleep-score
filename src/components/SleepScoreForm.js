import DurationSelect from './DurationSelect';
import api from '../api';

const SleepScoreForm = ({
  scores,
  updateDurationInBed,
  updateDurationAsleep,
  processSleepScore,
}) => {
  const formIsValid =
    scores.durationAsleep === '' || scores.durationInBed === '';

  const handleClick = e => {
    e.preventDefault();
    const sleepScore = 100 * (scores.durationInBed / scores.durationAsleep);
    processSleepScore(api, scores, sleepScore);
  };

  return (
    <form>
      <DurationSelect location="in-bed" handleSelect={updateDurationInBed} />
      <DurationSelect location="asleep" handleSelect={updateDurationAsleep} />
      <button disabled={formIsValid} onClick={handleClick}>
        Calculate
      </button>
    </form>
  );
};

export default SleepScoreForm;
