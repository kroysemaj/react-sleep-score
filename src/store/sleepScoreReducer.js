const initialState = {
  durationInBed: '',
  durationAsleep: '',
};

const UPDATE_DURATION_IN_BED = 'UPDATE_DURATION_IN_BED';
const UPDATE_DURATION_ASLEEP = 'UPDATE_DURATION_ASLEEP';

export const updateDurationInBed = duration => ({
  payload: duration,
  type: UPDATE_DURATION_IN_BED,
});

export const updateDurationAsleep = duration => ({
  payload: duration,
  type: UPDATE_DURATION_ASLEEP,
});

export const sleepScoreReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_DURATION_IN_BED:
      return { ...state, durationInBed: action.payload };
    case UPDATE_DURATION_ASLEEP:
      return { ...state, durationAsleep: action.payload };
    default:
      return state;
  }
};
