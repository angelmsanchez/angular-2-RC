import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Constants } from '../shared/constants/index';

@Component({
    moduleId: module.id,
    selector: 'app-pomodoro',
    templateUrl: './pomodoro.html',
    styleUrls: ['./pomodoro.css']
})

export class PomodoroComponent implements OnInit {
    public steps: Object[];
    public actualStep: Object;
    public urlImg: String;
    public isEnabledStart: boolean = true;
    public contadorMin: String;
    public contadorSec: String = '00';
    public unitTime: String = 'Unidad Pomodoro';
    public isPair: boolean = false;

    private _intervalPomodoro: number[] = [25, 5, 25, 5, 25, 15];
    private _contadorInterval: number = 0;
    private _timeSelected: number = 0.1;

    ngOnInit() {
        this.urlImg = Constants.URL_IMG;
        this.contadorMin = this._intervalPomodoro[0].toString();
        this.steps = this.getSteps();
        this.actualStep = this.steps[0];
    }

    playPomodoro() {
        this.isEnabledStart = !this.isEnabledStart;
        this.getCountSeconds();
    }

    selectTime(time: number, timeTitle: String) {
        this._timeSelected = time;
        this.unitTime = timeTitle;
    }

    private getCountSeconds() {
        this.contadorMin = (Number(this.contadorMin) - 1).toString();
        this.contadorSec = '59';
        const SECOND_NUMBER: number = Number(this.contadorSec);
        Observable
            .interval(this._timeSelected)
            .take(60).map((x) => x + 1)
            .subscribe(
            (x) => {
                this.contadorSec = (SECOND_NUMBER - x).toString();
                this.contadorSec = this.contadorSec.length === 1 ? '0' + this.contadorSec : this.contadorSec;
            },
            (error) => {
                console.log('error', error);
            },
            () => {
                this.checkCountMin();
            });
    }

    private checkCountMin() {
        if (this.contadorMin !== '0') {
            this.getCountSeconds();
        } else {
            this._contadorInterval = this._contadorInterval === 5 ? 0 : this._contadorInterval + 1;
            this.contadorSec = '00';
            this.actualStep = this.steps[this._contadorInterval];
            this.isEnabledStart = !this.isEnabledStart;
            this.contadorMin = this._intervalPomodoro[this._contadorInterval].toString();
            this.isPair = (Number(this._contadorInterval + 1)) % 2 === 0;
        }
    }
    private getSteps() {
        return [
            {
                id: 0,
                name: '25:00'
            },
            {
                id: 1,
                name: '5:00'
            },
            {
                id: 2,
                name: '25:00'
            },
            {
                id: 3,
                name: '5:00'
            },
            {
                id: 4,
                name: '25:00'
            },
            {
                id: 5,
                name: '15:00'
            }
        ];
    }
}
