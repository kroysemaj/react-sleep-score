import { connect } from 'react-redux';
import {
  processSleepScore,
  updateDurationAsleep,
  updateDurationInBed,
} from '../store/sleepScore/actions';
import DurationSelect from './DurationSelect';

export const SleepScoreForm = ({
  durationAsleep,
  durationInBed,
  processSleepScore,
  updateDurationAsleep,
  updateDurationInBed,
}) => {
  const formIsValid = durationAsleep === '' || durationInBed === '';

  const handleClick = e => {
    e.preventDefault();
    const sleepScore = 100 * (durationAsleep / durationInBed);
    processSleepScore(sleepScore);
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

const mapStateToProps = state => ({
  durationInBed: state.sleepScore.durationInBed,
  durationAsleep: state.sleepScore.durationAsleep,
});

const mapDispatchToProps = {
  processSleepScore,
  updateDurationAsleep,
  updateDurationInBed,
};

export default connect(mapStateToProps, mapDispatchToProps)(SleepScoreForm);
