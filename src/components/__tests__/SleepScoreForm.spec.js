import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SleepScoreForm from '../SleepScoreForm';

describe('Sleep score form', () => {
  const scores = {
    durationAsleep: 8,
    durationInBed: 10,
  };
  describe('calculate button', () => {
    it('should save the sleep score', () => {
      const processSleepScore = jest.fn().mockName('processSleepScore');
      const mockApi = {
        saveSleepScore: () => {},
      };

      render(
        <SleepScoreForm
          scores={scores}
          processSleepScore={processSleepScore}
        />,
      );

      userEvent.click(screen.getByText('Calculate'));

      expect(processSleepScore).toHaveBeenCalled();
    });
  });
});
