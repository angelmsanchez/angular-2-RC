import { Component, Inject } from '@angular/core';
import { Store } from 'redux';

import { AppState } from './../../../redux/app-state';
import { AppStore } from './../../../redux/app-store';
import * as CounterActions from './../../../redux/counter-action-creators';

@Component({
    moduleId: module.id,
    selector: 'app-counter',
    templateUrl: 'counter.html',
    styleUrls: ['counter.css']

})
export class CounterComponent {
    counter: number;

    constructor( @Inject(AppStore) private store: Store<AppState>) {
        store.subscribe(() => this.readState());
        this.readState();
    }

    readState() {
        let state: AppState = this.store.getState() as AppState;
        this.counter = state.counter;
    }

    increment() {
        this.store.dispatch(CounterActions.increment());
    }

    decrement() {
        this.store.dispatch(CounterActions.decrement());
    }

    restart() {
        this.store.dispatch(CounterActions.restart());
    }
}
