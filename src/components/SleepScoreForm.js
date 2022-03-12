import { sleepScoreDropdownOptions } from './helpers/sleepScoreDropdownOptions';

const SleepScoreForm = () => {
  return (
    <form>
      <label for="duration-in-bed-select">Duration in bed:</label>
      <select name="duration-in-bed" id="duration-in-bed-select">
        <option value="">--Please choose an option--</option>
        {sleepScoreDropdownOptions.map(scoreOption => (
          <option value={scoreOption.sleepIncrements}>
            {scoreOption.text}
          </option>
        ))}
      </select>
      <label for="duration-asleep-select">Duration asleep:</label>
      <select name="duration-asleep" id="duration-asleep-select">
        <option value="">--Please choose an option--</option>
        {sleepScoreDropdownOptions.map(scoreOption => (
          <option value={scoreOption.sleepIncrements}>
            {scoreOption.text}
          </option>
        ))}
      </select>
      <button disabled>Calculate</button>
    </form>
  );
};

export default SleepScoreForm;
