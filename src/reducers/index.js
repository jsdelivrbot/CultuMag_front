import { combineReducers } from 'redux';
import articleReducer from './reducer_article'

const rootReducer = combineReducers({
  article:articleReducer,
});

export default rootReducer;
