import { Action, ActionCreator } from 'redux';

export const INCREMENT: string = 'INCREMENT';
export const increment: ActionCreator<Action> = () => ({
    type: INCREMENT
});

export const DECREMENT: string = 'DECREMENT';
export const decrement: ActionCreator<Action> = () => ({
    type: DECREMENT
});

export const RESTART: string = 'RESTART';
export const restart: ActionCreator<Action> = () => ({
    type: RESTART
});
