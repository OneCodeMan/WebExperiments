import { FETCH_POPULATION } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_POPULATION:
      return [action.payload.data, ...state];
  }

  return state;
}
