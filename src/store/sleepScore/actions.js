export const UPDATE_DURATION_IN_BED = 'UPDATE_DURATION_IN_BED';
export const UPDATE_DURATION_ASLEEP = 'UPDATE_DURATION_ASLEEP';
export const PUBLISH_SLEEP_SCORE = 'PUBLISH_SLEEP_SCORE';

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
    console.log(res);
  });

export const publishSleepScore = sleepScore => ({
  payload: sleepScore,
  type: PUBLISH_SLEEP_SCORE,
});
