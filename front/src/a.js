import { combineReducers } from 'redux';
import calendarReducer from './redux/calender/reducer';

const rootReducer = combineReducers({ calendar: calendarReducer });

export default rootReducer;
