import { render } from '@testing-library/react';
import SleepScore from '../SleepScore';

describe('Sleep Score', () => {
  it('update duration in bed value in store', () => {
    const updateDurationInBed = jest.fn().mockName('updateDurationInBed');

    render(<SleepScore updateDurationInBed={updateDurationInBed} />);

    expect(updateDurationInBed).toHaveBeenCalled();
  });
});
