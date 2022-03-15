import { sleepScoreDropdownOptions } from './helpers/sleepScoreDropdownOptions';
import DurationInBedSelect from './DurationSelect/DurationSelect';

const SleepScoreForm = () => {
  return (
    <form>
      <DurationSelect location="in-bed" />
      <DurationSelect location="asleep" />
      <button disabled>Calculate</button>
    </form>
  );
};

export default SleepScoreForm;
