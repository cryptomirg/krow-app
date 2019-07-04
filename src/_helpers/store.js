//libraries
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//root reducer
import rootReducer from '../_reducers';

export const store = createStore(rootReducer, applyMiddleware(thunk));
