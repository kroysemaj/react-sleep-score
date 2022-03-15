const initialState = {
  durationInBed: '',
  durationAsleep: '',
  sleepScore: -1,
};

const UPDATE_DURATION_IN_BED = 'UPDATE_DURATION_IN_BED';
const UPDATE_DURATION_ASLEEP = 'UPDATE_DURATION_ASLEEP';
const PUBLISH_SLEEP_SCORE = 'PUBLISH_SLEEP_SCORE';

export const updateDurationInBed = duration => {
  console.log('#updateDurationInBed', duration);
  return {
    payload: duration,
    type: UPDATE_DURATION_IN_BED,
  };
};

export const updateDurationAsleep = duration => ({
  payload: duration,
  type: UPDATE_DURATION_ASLEEP,
});

export const processSleepScore = (api, state, score) =>
  api.saveSleepScore(score).then(res => {
    return sleepScoreReducer(state, publishSleepScore(res.sleepScore));
  });

export const publishSleepScore = sleepScore => ({
  payload: sleepScore,
  type: PUBLISH_SLEEP_SCORE,
});

export const sleepScoreReducer = (state = initialState, action = {}) => {
  console.log('reducer action:', action);
  switch (action.type) {
    case UPDATE_DURATION_IN_BED:
      return { ...state, durationInBed: action.payload };
    case UPDATE_DURATION_ASLEEP:
      return { ...state, durationAsleep: action.payload };
    case PUBLISH_SLEEP_SCORE:
      return { ...state, sleepScore: action.payload };
    default:
      return state;
  }
};
