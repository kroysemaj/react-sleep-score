import { connect } from 'react-redux';
import { Box, Button } from '@material-ui/core';
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
    const sleepScore = Math.floor(100 * (durationAsleep / durationInBed));
    processSleepScore(sleepScore);
  };

  return (
    <Box>
      <form>
        <Box sx={{ mt: 2, mb: 1 }}>
          <DurationSelect
            location="in-bed"
            handleSelect={updateDurationInBed}
          />
        </Box>
        <Box sx={{ my: 1 }}>
          <DurationSelect
            location="asleep"
            handleSelect={updateDurationAsleep}
          />
        </Box>
        <Box sx={{ mt: 1, mb: 2 }}>
          <Button
            variant="contained"
            color="primary"
            id="calc-btn"
            disabled={formIsValid}
            onClick={handleClick}
          >
            Calculate
          </Button>
        </Box>
      </form>
    </Box>
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
