import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../reducers';

// Setup a normal redux index for test
function createNormalStore() {
  const emptyStore = applyMiddleware(thunk)(createStore);
  return emptyStore(rootReducer);
}

export default createNormalStore;
