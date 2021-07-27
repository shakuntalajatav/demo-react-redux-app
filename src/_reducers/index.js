import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { ticker, book } from './ticker.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  ticker,
  book
});

export default rootReducer;