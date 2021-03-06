import { combineReducers } from 'redux';
import {
  UPDATE_DURATION_ASLEEP,
  UPDATE_DURATION_IN_BED,
  PUBLISH_SLEEP_SCORE,
  START_LOADING,
} from './actions';

const initialState = {
  durationInBed: '',
  durationAsleep: '',
  score: -1,
};

const sleepScore = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_DURATION_IN_BED:
      return { ...state, durationInBed: action.payload };
    case UPDATE_DURATION_ASLEEP:
      return { ...state, durationAsleep: action.payload };
    case PUBLISH_SLEEP_SCORE:
      return { ...state, score: action.payload };
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case START_LOADING:
      return true;
    case PUBLISH_SLEEP_SCORE:
      return false;
    default:
      return state;
  }
};

export default combineReducers({ sleepScore, loading });
