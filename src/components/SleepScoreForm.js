import { sleepScoreDropdownOptions } from './helpers/sleepScoreDropdownOptions';

const SleepScoreForm = () => {
  const populateDropdown = () =>
    sleepScoreDropdownOptions.map(scoreOption => {
      const { sleepIncrements, text } = scoreOption;
      return (
        <option value={sleepIncrements} key={sleepIncrements}>
          {text}
        </option>
      );
    });

  return (
    <form>
      <label htmlFor="duration-in-bed-select">Duration in bed:</label>
      <select name="duration-in-bed" id="duration-in-bed-select">
        <option value="" key="-1">
          --Please choose an option--
        </option>
        {populateDropdown()}
      </select>
      <label htmlFor="duration-asleep-select">Duration asleep:</label>
      <select name="duration-asleep" id="duration-asleep-select">
        <option value="" key="-1">
          --Please choose an option--
        </option>
        {populateDropdown()}
      </select>
      <button disabled>Calculate</button>
    </form>
  );
};

export default SleepScoreForm;
