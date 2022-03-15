import { sleepScoreDropdownOptions } from '../helpers/sleepScoreDropdownOptions';

const DurationInBedSelect = ({ handleSelect, location }) => {
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
    <>
      <label htmlFor={`${location}-select"`}>Duration in bed:</label>
      <select
        name={location}
        id={`${location}-select`}
        data-testid={`${location}-select`}
        onChange={handleSelect}
      >
        <option value="-1" key="-1" role="option">
          Select one
        </option>
        {populateDropdown()}
      </select>
    </>
  );
};

export default DurationInBedSelect;
