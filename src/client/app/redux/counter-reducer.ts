import { Reducer, Action } from 'redux';

import { AppState } from './app-state';
import { INCREMENT, DECREMENT, RESTART } from './counter-action-creators';

let initialState: AppState = { counter: 0 };

export const counterReducer: Reducer<AppState> =
    (state: AppState = initialState, action: Action): AppState => {
        switch (action.type) {
            case INCREMENT:
                return Object.assign({}, state, { counter: state.counter + 1 });
            case DECREMENT:
                return Object.assign({}, state, { counter: state.counter - 1 });
            case RESTART:
                return Object.assign({}, state, { counter: 0 });
            default:
                return state;
        }
    };
