import { connect } from 'react-redux';
import { Box, Typography } from '@material-ui/core';

const SleepScoreResult = ({ result }) => (
  <Box>
    <Typography variant="h6">Calculated Sleep Score:</Typography>
    <Typography variant="h5" color={result > 50 ? 'primary' : 'error'}>
      {result !== -1 ? result : ''}
    </Typography>
  </Box>
);

const mapStateToProps = state => ({
  result: state.sleepScore.sleepScore.score,
});

export default connect(mapStateToProps)(SleepScoreResult);
