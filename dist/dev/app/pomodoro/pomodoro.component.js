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
        this.isEnabledStart = true;
        this.contadorSec = '00';
        this.unitTime = 'Unidad Pomodoro';
        this.isPair = false;
        this._intervalPomodoro = [25, 5, 25, 5, 25, 15];
        this._contadorInterval = 0;
        this._timeSelected = 0.1;
    }
    PomodoroComponent.prototype.ngOnInit = function () {
        this.urlImg = index_1.Constants.URL_IMG;
        this.contadorMin = this._intervalPomodoro[0].toString();
        this.steps = this.getSteps();
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
    PomodoroComponent.prototype.getSteps = function () {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wb21vZG9yby9wb21vZG9yby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxtQkFBMkIsU0FBUyxDQUFDLENBQUE7QUFFckMsc0JBQTBCLDJCQUEyQixDQUFDLENBQUE7QUFTdEQ7SUFBQTtRQUlXLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLGdCQUFXLEdBQVcsSUFBSSxDQUFDO1FBQzNCLGFBQVEsR0FBVyxpQkFBaUIsQ0FBQztRQUNyQyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBRXZCLHNCQUFpQixHQUFhLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyRCxzQkFBaUIsR0FBVyxDQUFDLENBQUM7UUFDOUIsa0JBQWEsR0FBVyxHQUFHLENBQUM7SUErRXhDLENBQUM7SUE3RUcsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsaUJBQVMsQ0FBQyxPQUFPLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDM0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxzQ0FBVSxHQUFWLFVBQVcsSUFBWSxFQUFFLFNBQWlCO1FBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FB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Q25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxpQkFBaUI7WUFDOUIsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7U0FDaEMsQ0FBQzs7eUJBQUE7SUE2RkYsd0JBQUM7QUFBRCxDQTNGQSxBQTJGQyxJQUFBO0FBM0ZZLHlCQUFpQixvQkEyRjdCLENBQUEiLCJmaWxlIjoiYXBwL3BvbW9kb3JvL3BvbW9kb3JvLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcclxuXHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uL3NoYXJlZC9jb25zdGFudHMvaW5kZXgnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdhcHAtcG9tb2Rvcm8nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BvbW9kb3JvLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcG9tb2Rvcm8uY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQb21vZG9yb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgc3RlcHM6IE9iamVjdFtdO1xyXG4gICAgcHVibGljIGFjdHVhbFN0ZXA6IE9iamVjdDtcclxuICAgIHB1YmxpYyB1cmxJbWc6IFN0cmluZztcclxuICAgIHB1YmxpYyBpc0VuYWJsZWRTdGFydDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgY29udGFkb3JNaW46IFN0cmluZztcclxuICAgIHB1YmxpYyBjb250YWRvclNlYzogU3RyaW5nID0gJzAwJztcclxuICAgIHB1YmxpYyB1bml0VGltZTogU3RyaW5nID0gJ1VuaWRhZCBQb21vZG9ybyc7XHJcbiAgICBwdWJsaWMgaXNQYWlyOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfaW50ZXJ2YWxQb21vZG9ybzogbnVtYmVyW10gPSBbMjUsIDUsIDI1LCA1LCAyNSwgMTVdO1xyXG4gICAgcHJpdmF0ZSBfY29udGFkb3JJbnRlcnZhbDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX3RpbWVTZWxlY3RlZDogbnVtYmVyID0gMC4xO1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMudXJsSW1nID0gQ29uc3RhbnRzLlVSTF9JTUc7XHJcbiAgICAgICAgdGhpcy5jb250YWRvck1pbiA9IHRoaXMuX2ludGVydmFsUG9tb2Rvcm9bMF0udG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnN0ZXBzID0gdGhpcy5nZXRTdGVwcygpO1xyXG4gICAgICAgIHRoaXMuYWN0dWFsU3RlcCA9IHRoaXMuc3RlcHNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcGxheVBvbW9kb3JvKCkge1xyXG4gICAgICAgIHRoaXMuaXNFbmFibGVkU3RhcnQgPSAhdGhpcy5pc0VuYWJsZWRTdGFydDtcclxuICAgICAgICB0aGlzLmdldENvdW50U2Vjb25kcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFRpbWUodGltZTogbnVtYmVyLCB0aW1lVGl0bGU6IFN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3RpbWVTZWxlY3RlZCA9IHRpbWU7XHJcbiAgICAgICAgdGhpcy51bml0VGltZSA9IHRpbWVUaXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvdW50U2Vjb25kcygpIHtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yTWluID0gKE51bWJlcih0aGlzLmNvbnRhZG9yTWluKSAtIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5jb250YWRvclNlYyA9ICc1OSc7XHJcbiAgICAgICAgY29uc3QgU0VDT05EX05VTUJFUjogbnVtYmVyID0gTnVtYmVyKHRoaXMuY29udGFkb3JTZWMpO1xyXG4gICAgICAgIE9ic2VydmFibGVcclxuICAgICAgICAgICAgLmludGVydmFsKHRoaXMuX3RpbWVTZWxlY3RlZClcclxuICAgICAgICAgICAgLnRha2UoNjApLm1hcCgoeCkgPT4geCArIDEpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICh4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhZG9yU2VjID0gKFNFQ09ORF9OVU1CRVIgLSB4KS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWRvclNlYyA9IHRoaXMuY29udGFkb3JTZWMubGVuZ3RoID09PSAxID8gJzAnICsgdGhpcy5jb250YWRvclNlYyA6IHRoaXMuY29udGFkb3JTZWM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQ291bnRNaW4oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0NvdW50TWluKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRhZG9yTWluICE9PSAnMCcpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRDb3VudFNlY29uZHMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9jb250YWRvckludGVydmFsID0gdGhpcy5fY29udGFkb3JJbnRlcnZhbCA9PT0gNSA/IDAgOiB0aGlzLl9jb250YWRvckludGVydmFsICsgMTtcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvclNlYyA9ICcwMCc7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsU3RlcCA9IHRoaXMuc3RlcHNbdGhpcy5fY29udGFkb3JJbnRlcnZhbF07XHJcbiAgICAgICAgICAgIHRoaXMuaXNFbmFibGVkU3RhcnQgPSAhdGhpcy5pc0VuYWJsZWRTdGFydDtcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvck1pbiA9IHRoaXMuX2ludGVydmFsUG9tb2Rvcm9bdGhpcy5fY29udGFkb3JJbnRlcnZhbF0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5pc1BhaXIgPSAoTnVtYmVyKHRoaXMuX2NvbnRhZG9ySW50ZXJ2YWwgKyAxKSkgJSAyID09PSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0U3RlcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnMjU6MDAnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJzU6MDAnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJzI1OjAwJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICc1OjAwJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICcyNTowMCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnMTU6MDAnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
