import {
  sleepScoreReducer,
  updateDurationInBed,
  updateDurationAsleep,
  initialState,
} from '../sleepScoreReducer';

describe('Sleep score reducer', () => {
  it('should return a valid initial state', () => {
    expect(sleepScoreReducer()).toEqual({
      durationInBed: -1,
      durationAsleep: -1,
    });
  });

  it('should update duration in bed property', () => {
    expect(sleepScoreReducer(initialState, updateDurationInBed(3))).toEqual({
      durationInBed: 3,
      durationAsleep: -1,
    });
  });

  it('should update duration in bed property', () => {
    expect(sleepScoreReducer(initialState, updateDurationAsleep(5))).toEqual({
      durationInBed: -1,
      durationAsleep: 5,
    });
  });
});
