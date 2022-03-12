const SleepScoreForm = () => (
  <form>
    <label for="duration-in-bed-select">Duration in bed:</label>
    <select name="duration-in-bed" id="duration-in-bed-select">
      <option value="">--Please choose an option--</option>
      <option value="zero">0-30 minutes</option>
      <option value="four">3.5 - 4 hours</option>
      <option value="six">5.5 - 6 hours</option>
      <option value="eight">7.5 - 8 hours</option>
    </select>
    <label for="duration-asleep-select">Duration asleep:</label>
    <select name="duration-asleep" id="duration-asleep-select">
      <option value="">--Please choose an option--</option>
      <option value="zero">0-30 minutes</option>
      <option value="four">3.5 - 4 hours</option>
      <option value="six">5.5 - 6 hours</option>
      <option value="eight">7.5 - 8 hours</option>
    </select>
    <button disabled>Calculate</button>
  </form>
);

export default SleepScoreForm;
