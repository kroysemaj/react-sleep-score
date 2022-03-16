export const UPDATE_DURATION_IN_BED = 'UPDATE_DURATION_IN_BED';
export const UPDATE_DURATION_ASLEEP = 'UPDATE_DURATION_ASLEEP';
export const PUBLISH_SLEEP_SCORE = 'PUBLISH_SLEEP_SCORE';
export const START_LOADING = 'START_LOADING';

export const updateDurationInBed = duration => {
  return {
    payload: duration,
    type: UPDATE_DURATION_IN_BED,
  };
};

export const updateDurationAsleep = duration => ({
  payload: duration,
  type: UPDATE_DURATION_ASLEEP,
});

export const startLoading = () => ({
  type: START_LOADING,
});

export const processSleepScore = score => async (dispatch, getState, api) => {
  dispatch(startLoading());
  return api.saveSleepScore(score).then(() => {
    console.log(score);
    dispatch(publishSleepScore(score));
  });
};

export const publishSleepScore = sleepScore => ({
  payload: sleepScore,
  type: PUBLISH_SLEEP_SCORE,
});
