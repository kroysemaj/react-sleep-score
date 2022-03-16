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
  let store;
  beforeEach(() => {
    const api = {
      saveSleepScore: () => new Promise(() => {}),
    };

    const initialState = {};

    store = createStore(
      sleepScoreReducer,
      initialState,
      applyMiddleware(thunk.withExtraArgument(api)),
    );
  });
  describe('updateDurationInBed action', () => {
    it('stores the sleep increment value for duration in bed', () => {
      store.dispatch(updateDurationInBed(8));

      expect(store.getState().sleepScore.durationInBed).toEqual(8);
    });
  });

  describe('updateDurationAsleep action', () => {
    it('stores the sleep increment value for duration asleep', () => {
      store.dispatch(updateDurationAsleep(10));

      expect(store.getState().sleepScore.durationAsleep).toEqual(10);
    });
  });

  describe('publishSleepScore action', () => {
    it('stores the derived sleep score value', () => {
      store.dispatch(publishSleepScore(66));

      expect(store.getState().sleepScore.score).toEqual(66);
    });
  });

  describe('while loading', () => {
    it('sets a loading flag', () => {
      store.dispatch(processSleepScore());

      expect(store.getState().loading).toBe(true);
    });
    it('clears a loading flag', () => {
      store.dispatch(processSleepScore());
      store.dispatch(publishSleepScore());

      expect(store.getState().loading).toBe(false);
    });
  });

  xdescribe('saveSleepScore action', () => {
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
