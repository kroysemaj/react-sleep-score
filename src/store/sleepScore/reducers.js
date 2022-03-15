import { combineReducers } from 'redux';
import {
  UPDATE_DURATION_ASLEEP,
  UPDATE_DURATION_IN_BED,
  PUBLISH_SLEEP_SCORE,
} from './actions';

const initialState = {
  durationInBed: '',
  durationAsleep: '',
  sleepScore: -1,
};

const sleepScore = (state = initialState, action = {}) => {
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

export default combineReducers({ sleepScore });
