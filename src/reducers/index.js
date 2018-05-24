import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import weather from './weather';
import comments from './comments';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
  weather,
  comments,
  form,
});

export default rootReducer;
