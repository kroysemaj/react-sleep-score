import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SleepScoreForm } from '../SleepScoreForm';

describe('Sleep score form', () => {
  let context;
  let processSleepScore;
  const renderWithProps = (propOverrides = {}) => {
    const props = {
      processSleepScore: jest.fn().mockName('processSleepScore'),
      loading: false,
      ...propOverrides,
    };
    processSleepScore = props.processSleepScore;

    context = render(<SleepScoreForm {...props} />);
  };

  describe('calculate button', () => {
    it('processes the inputs when the calculate button is clicked', () => {
      renderWithProps();
      userEvent.click(screen.getByText('Calculate'));
      expect(processSleepScore).toHaveBeenCalled();
    });
  });

  describe('loading indicator', () => {
    it('displays the loading indicator while loading', () => {
      renderWithProps({ loading: true });
      const { queryByText } = context;
      expect(
        queryByText('Calculate').className.includes('-loading'),
      ).toBeTruthy();
    });

    it('does not display the loading indicator while not loading', () => {
      renderWithProps();
      const { queryByText } = context;
      expect(
        queryByText('Calculate').className.includes('-loading'),
      ).toBeFalsy();
    });
  });
});
