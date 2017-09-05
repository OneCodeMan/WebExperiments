import { combineReducers } from 'redux';
import PopulationReducer from './reducer_population';

const rootReducer = combineReducers({
  population: PopulationReducer,
});

export default rootReducer;
