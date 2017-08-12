import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
        //concats the state object with the new data
        return [ action.payload.data, ...state ];
    }
    return state;
}
