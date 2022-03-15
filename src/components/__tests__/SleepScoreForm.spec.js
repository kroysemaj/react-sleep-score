import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SleepScoreForm } from '../SleepScoreForm';

describe('Sleep score form', () => {
  describe('calculate button', () => {
    it('processes the inputs when the calculate button is clicked', () => {
      const processSleepScore = jest.fn().mockName('processSleepScore');

      render(<SleepScoreForm processSleepScore={processSleepScore} />);

      userEvent.click(screen.getByText('Calculate'));

      expect(processSleepScore).toHaveBeenCalled();
    });
  });
});
