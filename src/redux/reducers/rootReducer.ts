
import { combineReducers } from 'redux';
import userDataReducer from './userData';

const rootReducer = combineReducers({
    userDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
