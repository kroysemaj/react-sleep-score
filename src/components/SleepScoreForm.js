import DurationSelect from './DurationSelect';

const SleepScoreForm = ({
  scores,
  updateDurationInBed,
  updateDurationAsleep,
}) => {
  const formIsValid =
    scores.durationAsleep === '' || scores.durationInBed === '';

  return (
    <form>
      <DurationSelect location="in-bed" handleSelect={updateDurationInBed} />
      <DurationSelect location="asleep" handleSelect={updateDurationAsleep} />
      <button disabled={formIsValid}>Calculate</button>
    </form>
  );
};

export default SleepScoreForm;
