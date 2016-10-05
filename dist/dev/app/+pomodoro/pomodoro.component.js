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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var common_1 = require('@angular/common');
var index_1 = require('../shared/constants/index');
var index_2 = require('../shared/components/index');
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
            selector: 'app-pomodoro',
            moduleId: module.id,
            templateUrl: './pomodoro.html',
            styleUrls: ['./pomodoro.css'],
            directives: [ng2_bootstrap_1.DROPDOWN_DIRECTIVES, index_2.StepsComponent, common_1.NgClass]
        }), 
        __metadata('design:paramtypes', [])
    ], PomodoroComponent);
    return PomodoroComponent;
}());
exports.PomodoroComponent = PomodoroComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rcG9tb2Rvcm8vcG9tb2Rvcm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsbUJBQTJCLFNBQVMsQ0FBQyxDQUFBO0FBQ3JDLDhCQUFvQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ2xFLHVCQUF3QixpQkFBaUIsQ0FBQyxDQUFBO0FBRTFDLHNCQUEwQiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3RELHNCQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBVTVEO0lBQUE7UUFDWSxzQkFBaUIsR0FBYSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckQsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBQzlCLGtCQUFhLEdBQVcsR0FBRyxDQUFDO1FBSzdCLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLGdCQUFXLEdBQVcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNELGdCQUFXLEdBQVcsSUFBSSxDQUFDO1FBQzNCLGFBQVEsR0FBVyxpQkFBaUIsQ0FBQztRQUNyQyxXQUFNLEdBQVksS0FBSyxDQUFDO0lBMkVuQyxDQUFDO0lBekVHLG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLGlCQUFTLENBQUMsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVDtnQkFDSSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsT0FBTzthQUNoQjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxNQUFNO2FBQ2Y7WUFDRDtnQkFDSSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsT0FBTzthQUNoQjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFB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YztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGlCQUFpQjtZQUM5QixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3QixVQUFVLEVBQUUsQ0FBQyxtQ0FBbUIsRUFBRSxzQkFBYyxFQUFFLGdCQUFPLENBQUM7U0FDN0QsQ0FBQzs7eUJBQUE7SUF5RkYsd0JBQUM7QUFBRCxDQXZGQSxBQXVGQyxJQUFBO0FBdkZZLHlCQUFpQixvQkF1RjdCLENBQUEiLCJmaWxlIjoiYXBwLytwb21vZG9yby9wb21vZG9yby5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7IERST1BET1dOX0RJUkVDVElWRVMgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uL3NoYXJlZC9jb25zdGFudHMvaW5kZXgnO1xyXG5pbXBvcnQgeyBTdGVwc0NvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9jb21wb25lbnRzL2luZGV4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtcG9tb2Rvcm8nLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9wb21vZG9yby5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3BvbW9kb3JvLmNzcyddLFxyXG4gICAgZGlyZWN0aXZlczogW0RST1BET1dOX0RJUkVDVElWRVMsIFN0ZXBzQ29tcG9uZW50LCBOZ0NsYXNzXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvbW9kb3JvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgX2ludGVydmFsUG9tb2Rvcm86IG51bWJlcltdID0gWzI1LCA1LCAyNSwgNSwgMjUsIDE1XTtcclxuICAgIHByaXZhdGUgX2NvbnRhZG9ySW50ZXJ2YWw6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF90aW1lU2VsZWN0ZWQ6IG51bWJlciA9IDAuMTtcclxuXHJcbiAgICBwdWJsaWMgc3RlcHM6IE9iamVjdFtdO1xyXG4gICAgcHVibGljIGFjdHVhbFN0ZXA6IE9iamVjdDtcclxuICAgIHB1YmxpYyB1cmxJbWc6IFN0cmluZztcclxuICAgIHB1YmxpYyBpc0VuYWJsZWRTdGFydDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgY29udGFkb3JNaW46IFN0cmluZyA9IHRoaXMuX2ludGVydmFsUG9tb2Rvcm9bMF0udG9TdHJpbmcoKTtcclxuICAgIHB1YmxpYyBjb250YWRvclNlYzogU3RyaW5nID0gJzAwJztcclxuICAgIHB1YmxpYyB1bml0VGltZTogU3RyaW5nID0gJ1VuaWRhZCBQb21vZG9ybyc7XHJcbiAgICBwdWJsaWMgaXNQYWlyOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy51cmxJbWcgPSBDb25zdGFudHMuVVJMX0lNRztcclxuICAgICAgICB0aGlzLnN0ZXBzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICcyNTowMCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnNTowMCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnMjU6MDAnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJzU6MDAnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJzI1OjAwJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogNSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICcxNTowMCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5hY3R1YWxTdGVwID0gdGhpcy5zdGVwc1swXTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5UG9tb2Rvcm8oKSB7XHJcbiAgICAgICAgdGhpcy5pc0VuYWJsZWRTdGFydCA9ICF0aGlzLmlzRW5hYmxlZFN0YXJ0O1xyXG4gICAgICAgIHRoaXMuZ2V0Q291bnRTZWNvbmRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0VGltZSh0aW1lOiBudW1iZXIsIHRpbWVUaXRsZTogU3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fdGltZVNlbGVjdGVkID0gdGltZTtcclxuICAgICAgICB0aGlzLnVuaXRUaW1lID0gdGltZVRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q291bnRTZWNvbmRzKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFkb3JNaW4gPSAoTnVtYmVyKHRoaXMuY29udGFkb3JNaW4pIC0gMSkudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yU2VjID0gJzU5JztcclxuICAgICAgICBjb25zdCBTRUNPTkRfTlVNQkVSOiBudW1iZXIgPSBOdW1iZXIodGhpcy5jb250YWRvclNlYyk7XHJcbiAgICAgICAgT2JzZXJ2YWJsZVxyXG4gICAgICAgICAgICAuaW50ZXJ2YWwodGhpcy5fdGltZVNlbGVjdGVkKVxyXG4gICAgICAgICAgICAudGFrZSg2MCkubWFwKCh4KSA9PiB4ICsgMSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFkb3JTZWMgPSAoU0VDT05EX05VTUJFUiAtIHgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhZG9yU2VjID0gdGhpcy5jb250YWRvclNlYy5sZW5ndGggPT09IDEgPyAnMCcgKyB0aGlzLmNvbnRhZG9yU2VjIDogdGhpcy5jb250YWRvclNlYztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDb3VudE1pbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrQ291bnRNaW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGFkb3JNaW4gIT09ICcwJykge1xyXG4gICAgICAgICAgICB0aGlzLmdldENvdW50U2Vjb25kcygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRhZG9ySW50ZXJ2YWwgPSB0aGlzLl9jb250YWRvckludGVydmFsID09PSA1ID8gMCA6IHRoaXMuX2NvbnRhZG9ySW50ZXJ2YWwgKyAxO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yU2VjID0gJzAwJztcclxuICAgICAgICAgICAgdGhpcy5hY3R1YWxTdGVwID0gdGhpcy5zdGVwc1t0aGlzLl9jb250YWRvckludGVydmFsXTtcclxuICAgICAgICAgICAgdGhpcy5pc0VuYWJsZWRTdGFydCA9ICF0aGlzLmlzRW5hYmxlZFN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yTWluID0gdGhpcy5faW50ZXJ2YWxQb21vZG9yb1t0aGlzLl9jb250YWRvckludGVydmFsXS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmlzUGFpciA9IChOdW1iZXIodGhpcy5fY29udGFkb3JJbnRlcnZhbCArIDEpKSAlIDIgPT09IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
