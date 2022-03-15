import DurationSelect from './DurationSelect';

const SleepScoreForm = ({
  scores,
  updateDurationInBed,
  updateDurationAsleep,
}) => {
  return (
    <form>
      <DurationSelect location="in-bed" handleSelect={updateDurationInBed} />
      <DurationSelect location="asleep" handleSelect={updateDurationAsleep} />
      <button disabled>Calculate</button>
    </form>
  );
};

export default SleepScoreForm;
