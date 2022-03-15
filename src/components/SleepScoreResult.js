import { connect } from 'react-redux';

const SleepScoreResult = ({ result }) => (
  <p>
    Calculated Sleep Score: <span>{result !== -1 ? result : ''}</span>
  </p>
);

const mapStateToProps = state => ({
  result: state.sleepScore.score,
});

export default connect(mapStateToProps)(SleepScoreResult);
