import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SleepScoreForm } from '../SleepScoreForm';

describe('Sleep score form', () => {
  let context;
  let processSleepScore;
  const renderWithProps = () => {
    processSleepScore = jest.fn().mockName('processSleepScore');

    context = render(<SleepScoreForm processSleepScore={processSleepScore} />);
  };

  describe('calculate button', () => {
    it('processes the inputs when the calculate button is clicked', () => {
      renderWithProps();
      userEvent.click(screen.getByText('Calculate'));
      expect(processSleepScore).toHaveBeenCalled();
    });
  });
});
