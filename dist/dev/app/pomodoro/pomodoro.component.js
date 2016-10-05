"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var index_1 = require('../shared/constants/index');
var PomodoroComponent = (function () {
    function PomodoroComponent() {
        this._intervalPomodoro = [25, 5, 25, 5, 25, 15];
        this._contadorInterval = 0;
        this._timeSelected = 0.1;
        this.isEnabledStart = true;
        this.contadorMin = this._intervalPomodoro[0].toString();
        this.contadorSec = '00';
        this.unitTime = 'Unidad Pomodoro';
        this.isPair = false;
    }
    PomodoroComponent.prototype.ngOnInit = function () {
        this.urlImg = index_1.Constants.URL_IMG;
        this.steps = [
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
        this.actualStep = this.steps[0];
    };
    PomodoroComponent.prototype.playPomodoro = function () {
        this.isEnabledStart = !this.isEnabledStart;
        this.getCountSeconds();
    };
    PomodoroComponent.prototype.selectTime = function (time, timeTitle) {
        this._timeSelected = time;
        this.unitTime = timeTitle;
    };
    PomodoroComponent.prototype.getCountSeconds = function () {
        var _this = this;
        this.contadorMin = (Number(this.contadorMin) - 1).toString();
        this.contadorSec = '59';
        var SECOND_NUMBER = Number(this.contadorSec);
        Rx_1.Observable
            .interval(this._timeSelected)
            .take(60).map(function (x) { return x + 1; })
            .subscribe(function (x) {
            _this.contadorSec = (SECOND_NUMBER - x).toString();
            _this.contadorSec = _this.contadorSec.length === 1 ? '0' + _this.contadorSec : _this.contadorSec;
        }, function (error) {
            console.log('error', error);
        }, function () {
            _this.checkCountMin();
        });
    };
    PomodoroComponent.prototype.checkCountMin = function () {
        if (this.contadorMin !== '0') {
            this.getCountSeconds();
        }
        else {
            this._contadorInterval = this._contadorInterval === 5 ? 0 : this._contadorInterval + 1;
            this.contadorSec = '00';
            this.actualStep = this.steps[this._contadorInterval];
            this.isEnabledStart = !this.isEnabledStart;
            this.contadorMin = this._intervalPomodoro[this._contadorInterval].toString();
            this.isPair = (Number(this._contadorInterval + 1)) % 2 === 0;
        }
    };
    PomodoroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-pomodoro',
            templateUrl: './pomodoro.html',
            styleUrls: ['./pomodoro.css']
        }), 
        __metadata('design:paramtypes', [])
    ], PomodoroComponent);
    return PomodoroComponent;
}());
exports.PomodoroComponent = PomodoroComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wb21vZG9yby9wb21vZG9yby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxtQkFBMkIsU0FBUyxDQUFDLENBQUE7QUFJckMsc0JBQTBCLDJCQUEyQixDQUFDLENBQUE7QUFTdEQ7SUFBQTtRQUNZLHNCQUFpQixHQUFhLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyRCxzQkFBaUIsR0FBVyxDQUFDLENBQUM7UUFDOUIsa0JBQWEsR0FBVyxHQUFHLENBQUM7UUFLN0IsbUJBQWMsR0FBWSxJQUFJLENBQUM7UUFDL0IsZ0JBQVcsR0FBVyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0QsZ0JBQVcsR0FBVyxJQUFJLENBQUM7UUFDM0IsYUFBUSxHQUFXLGlCQUFpQixDQUFDO1FBQ3JDLFdBQU0sR0FBWSxLQUFLLENBQUM7SUEyRW5DLENBQUM7SUF6RUcsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsaUJBQVMsQ0FBQyxPQUFPLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNUO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2FBQ2hCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE1BQU07YUFDZjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2FBQ2hCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE1BQU07YUFDZjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2FBQ2hCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7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Q2hDLENBQUM7O3lCQUFBO0lBeUZGLHdCQUFDO0FBQUQsQ0F2RkEsQUF1RkMsSUFBQTtBQXZGWSx5QkFBaUIsb0JBdUY3QixDQUFBIiwiZmlsZSI6ImFwcC9wb21vZG9yby9wb21vZG9yby5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XHJcbi8vIGltcG9ydCB7IERST1BET1dOX0RJUkVDVElWRVMgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xyXG4vLyBpbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uL3NoYXJlZC9jb25zdGFudHMvaW5kZXgnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdhcHAtcG9tb2Rvcm8nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BvbW9kb3JvLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcG9tb2Rvcm8uY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQb21vZG9yb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIF9pbnRlcnZhbFBvbW9kb3JvOiBudW1iZXJbXSA9IFsyNSwgNSwgMjUsIDUsIDI1LCAxNV07XHJcbiAgICBwcml2YXRlIF9jb250YWRvckludGVydmFsOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfdGltZVNlbGVjdGVkOiBudW1iZXIgPSAwLjE7XHJcblxyXG4gICAgc3RlcHM6IE9iamVjdFtdO1xyXG4gICAgcHVibGljIGFjdHVhbFN0ZXA6IE9iamVjdDtcclxuICAgIHB1YmxpYyB1cmxJbWc6IFN0cmluZztcclxuICAgIHB1YmxpYyBpc0VuYWJsZWRTdGFydDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgY29udGFkb3JNaW46IFN0cmluZyA9IHRoaXMuX2ludGVydmFsUG9tb2Rvcm9bMF0udG9TdHJpbmcoKTtcclxuICAgIHB1YmxpYyBjb250YWRvclNlYzogU3RyaW5nID0gJzAwJztcclxuICAgIHB1YmxpYyB1bml0VGltZTogU3RyaW5nID0gJ1VuaWRhZCBQb21vZG9ybyc7XHJcbiAgICBwdWJsaWMgaXNQYWlyOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy51cmxJbWcgPSBDb25zdGFudHMuVVJMX0lNRztcclxuICAgICAgICB0aGlzLnN0ZXBzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICcyNTowMCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnNTowMCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnMjU6MDAnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJzU6MDAnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJzI1OjAwJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogNSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICcxNTowMCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5hY3R1YWxTdGVwID0gdGhpcy5zdGVwc1swXTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5UG9tb2Rvcm8oKSB7XHJcbiAgICAgICAgdGhpcy5pc0VuYWJsZWRTdGFydCA9ICF0aGlzLmlzRW5hYmxlZFN0YXJ0O1xyXG4gICAgICAgIHRoaXMuZ2V0Q291bnRTZWNvbmRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0VGltZSh0aW1lOiBudW1iZXIsIHRpbWVUaXRsZTogU3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fdGltZVNlbGVjdGVkID0gdGltZTtcclxuICAgICAgICB0aGlzLnVuaXRUaW1lID0gdGltZVRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q291bnRTZWNvbmRzKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFkb3JNaW4gPSAoTnVtYmVyKHRoaXMuY29udGFkb3JNaW4pIC0gMSkudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yU2VjID0gJzU5JztcclxuICAgICAgICBjb25zdCBTRUNPTkRfTlVNQkVSOiBudW1iZXIgPSBOdW1iZXIodGhpcy5jb250YWRvclNlYyk7XHJcbiAgICAgICAgT2JzZXJ2YWJsZVxyXG4gICAgICAgICAgICAuaW50ZXJ2YWwodGhpcy5fdGltZVNlbGVjdGVkKVxyXG4gICAgICAgICAgICAudGFrZSg2MCkubWFwKCh4KSA9PiB4ICsgMSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFkb3JTZWMgPSAoU0VDT05EX05VTUJFUiAtIHgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhZG9yU2VjID0gdGhpcy5jb250YWRvclNlYy5sZW5ndGggPT09IDEgPyAnMCcgKyB0aGlzLmNvbnRhZG9yU2VjIDogdGhpcy5jb250YWRvclNlYztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDb3VudE1pbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrQ291bnRNaW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGFkb3JNaW4gIT09ICcwJykge1xyXG4gICAgICAgICAgICB0aGlzLmdldENvdW50U2Vjb25kcygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRhZG9ySW50ZXJ2YWwgPSB0aGlzLl9jb250YWRvckludGVydmFsID09PSA1ID8gMCA6IHRoaXMuX2NvbnRhZG9ySW50ZXJ2YWwgKyAxO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yU2VjID0gJzAwJztcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxTdGVwID0gdGhpcy5zdGVwc1t0aGlzLl9jb250YWRvckludGVydmFsXTtcclxuICAgICAgICAgICAgdGhpcy5pc0VuYWJsZWRTdGFydCA9ICF0aGlzLmlzRW5hYmxlZFN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yTWluID0gdGhpcy5faW50ZXJ2YWxQb21vZG9yb1t0aGlzLl9jb250YWRvckludGVydmFsXS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmlzUGFpciA9IChOdW1iZXIodGhpcy5fY29udGFkb3JJbnRlcnZhbCArIDEpKSAlIDIgPT09IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
