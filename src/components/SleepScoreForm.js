import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import LoadingButton from '@mui/lab/LoadingButton';
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
  loading,
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
          <LoadingButton
            variant="contained"
            color="primary"
            id="calc-btn"
            data-testid="calc-btn"
            disabled={formIsValid}
            onClick={handleClick}
            loading={loading}
          >
            Calculate
          </LoadingButton>
        </Box>
      </form>
    </Box>
  );
};

const mapStateToProps = state => ({
  durationInBed: state.sleepScore.sleepScore.durationInBed,
  durationAsleep: state.sleepScore.sleepScore.durationAsleep,
  loading: state.sleepScore.loading,
});

const mapDispatchToProps = {
  processSleepScore,
  updateDurationAsleep,
  updateDurationInBed,
};

export default connect(mapStateToProps, mapDispatchToProps)(SleepScoreForm);
