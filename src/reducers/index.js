import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import weather from './weather';
import comments from './comments';

const rootReducer = combineReducers({
  weather,
  comments,
  form,
});

export default rootReducer;
