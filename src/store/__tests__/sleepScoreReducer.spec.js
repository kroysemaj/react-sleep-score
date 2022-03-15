/**
 * @jest-environment node
 */
import {
  sleepScoreReducer,
  updateDurationInBed,
  updateDurationAsleep,
  processSleepScore,
  publishSleepScore,
  initialState,
} from '../sleepScoreReducer';

describe('Sleep score reducer', () => {
  it('should return a valid initial state', () => {
    expect(sleepScoreReducer()).toEqual({
      durationInBed: '',
      durationAsleep: '',
      sleepScore: -1,
    });
  });

  it('should update duration in bed property', () => {
    expect(sleepScoreReducer(initialState, updateDurationInBed(3))).toEqual({
      durationInBed: 3,
      durationAsleep: '',
      sleepScore: -1,
    });
  });

  it('should update duration in bed property', () => {
    expect(sleepScoreReducer(initialState, updateDurationAsleep(5))).toEqual({
      durationInBed: '',
      durationAsleep: 5,
      sleepScore: -1,
    });
  });

  it('should update the sleep score property', () => {
    expect(
      sleepScoreReducer(
        {
          durationInBed: 10,
          durationAsleep: 6,
          sleepScore: -1,
        },
        publishSleepScore(60),
      ),
    ).toEqual({
      durationInBed: 10,
      durationAsleep: 6,
      sleepScore: 60,
    });
  });

  it('should derive and save the sleep score', async () => {
    const saveSleepScoreResponse = {
      status: 200,
      sleepScore: 90,
      status_message: 'Sleep Score Saved!',
    };

    const api = {
      saveSleepScore: () => Promise.resolve(saveSleepScoreResponse),
    };

    const expectedState = await processSleepScore(
      api,
      { durationInBed: 10, durationAsleep: 9 },
      90,
    );

    expect(expectedState).toEqual({
      durationInBed: 10,
      durationAsleep: 9,
      sleepScore: 90,
    });
  });
});
