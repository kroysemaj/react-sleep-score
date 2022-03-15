import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DurationInBedSelect from '../DurationSelect/DurationSelect';

describe('Sleep Score', () => {
  it('update duration in bed value in store', () => {
    const updateDurationInBed = jest.fn().mockName('updateDurationInBed');

    render(
      <DurationInBedSelect
        handleSelect={updateDurationInBed}
        location="in-bed"
      />,
    );

    userEvent.selectOptions(screen.getByTestId('in-bed-select'), '1');
    expect(updateDurationInBed).toHaveBeenCalled();
  });

  // NOTE: This test is replicating the first test and could be removed,
  // I'm including it here for completeness.
  it('update duration asleep value in store', () => {
    const updateDurationAsleep = jest.fn().mockName('updateDurationAsleep');

    render(
      <DurationInBedSelect
        handleSelect={updateDurationAsleep}
        location="asleep"
      />,
    );

    userEvent.selectOptions(screen.getByTestId('asleep-select'), '1');
    expect(updateDurationAsleep).toHaveBeenCalled();
  });
});
