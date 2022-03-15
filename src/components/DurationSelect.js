import { Box } from '@material-ui/core';
import { sleepScoreDropdownOptions } from './helpers/sleepScoreDropdownOptions';

const DurationSelect = ({ handleSelect, location }) => {
  const populateDropdown = () =>
    sleepScoreDropdownOptions.map(scoreOption => {
      const { sleepIncrements, text } = scoreOption;
      return (
        <option value={sleepIncrements} key={sleepIncrements}>
          {text}
        </option>
      );
    });

  const handleChange = e => handleSelect(e.target.value);

  return (
    <>
      <Box sx={{ pb: 0.5 }}>
        <label htmlFor={`${location}-select"`}>{`Duration ${
          location === 'asleep' ? 'asleep:' : 'in bed:'
        }`}</label>
      </Box>
      <select
        name={location}
        id={`${location}-select`}
        data-testid={`${location}-select`}
        onChange={handleChange}
      >
        <option value="-1" key="-1">
          Select one
        </option>
        {populateDropdown()}
      </select>
    </>
  );
};

export default DurationSelect;
