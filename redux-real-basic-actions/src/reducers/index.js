import { combineReducers } from 'redux';
import HeroesReducer from './reducer_heroes';
import ActiveHero from './reducer_active_hero';

const rootReducer = combineReducers({
  heroes: HeroesReducer,
  activeHero: ActiveHero,
})

export default rootReducer;
