import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import sleepScoreReducer from '../sleepScore/reducers';
import {
  updateDurationInBed,
  updateDurationAsleep,
  publishSleepScore,
  processSleepScore,
} from '../sleepScore/actions';

describe('Sleep score store', () => {
  describe('updateDurationInBed action', () => {
    it('stores the sleep increment value for duration in bed', () => {
      const initialState = {
        sleepScore: {},
      };

      const store = createStore(sleepScoreReducer, initialState);

      store.dispatch(updateDurationInBed(8));

      expect(store.getState().durationInBed).toEqual(8);
    });
  });
  describe('updateDurationAsleep action', () => {
    it('stores the sleep increment value for duration asleep', () => {
      const initialState = {
        sleepScore: {},
      };

      const store = createStore(sleepScoreReducer, initialState);

      store.dispatch(updateDurationAsleep(10));

      expect(store.getState().durationAsleep).toEqual(10);
    });
  });
  describe('publishSleepScore action', () => {
    it('stores the derived sleep score value', () => {
      const initialState = {
        sleepScore: {},
      };

      const store = createStore(sleepScoreReducer, initialState);

      store.dispatch(publishSleepScore(66));

      expect(store.getState().score).toEqual(66);
    });
  });
  describe('saveSleepScore action', () => {
    it('posts the derived sleep score value to an external API', async () => {
      const expected = {
        score: 90,
      };

      const saveResponse = {
        status: 200,
        status_message: 'Sleep Score Saved!',
      };

      const api = {
        saveSleepScore: () => Promise.resolve(saveResponse),
      };

      const initialState = {
        sleepScore: {},
      };

      const store = createStore(
        sleepScoreReducer,
        initialState,
        applyMiddleware(thunk.withExtraArgument(api)),
      );

      await store.dispatch(processSleepScore(90));

      expect(store.getState().sleepScore).toEqual(expected);
    });
  });
});
