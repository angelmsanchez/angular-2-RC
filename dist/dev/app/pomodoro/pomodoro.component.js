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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wb21vZG9yby9wb21vZG9yby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxtQkFBMkIsU0FBUyxDQUFDLENBQUE7QUFFckMsc0JBQTBCLDJCQUEyQixDQUFDLENBQUE7QUFTdEQ7SUFBQTtRQUlXLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLGdCQUFXLEdBQVcsSUFBSSxDQUFDO1FBQzNCLGFBQVEsR0FBVyxpQkFBaUIsQ0FBQztRQUNyQyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBRXZCLHNCQUFpQixHQUFhLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyRCxzQkFBaUIsR0FBVyxDQUFDLENBQUM7UUFDOUIsa0JBQWEsR0FBVyxHQUFHLENBQUM7SUErRXhDLENBQUM7SUE3RUcsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsaUJBQVMsQ0FBQyxPQUFPLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDM0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxzQ0FBVSxHQUFWLFVBQVcsSUFBWSxFQUFFLFNBQWlCO1FBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FB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Q25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxpQkFBaUI7WUFDOUIsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7U0FDaEMsQ0FBQzs7eUJBQUE7SUE2RkYsd0JBQUM7QUFBRCxDQTNGQSxBQTJGQyxJQUFBO0FBM0ZZLHlCQUFpQixvQkEyRjdCLENBQUEiLCJmaWxlIjoiYXBwL3BvbW9kb3JvL3BvbW9kb3JvLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uL3NoYXJlZC9jb25zdGFudHMvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXBwLXBvbW9kb3JvJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcG9tb2Rvcm8uaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcG9tb2Rvcm8uY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBQb21vZG9yb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHN0ZXBzOiBPYmplY3RbXTtcbiAgICBwdWJsaWMgYWN0dWFsU3RlcDogT2JqZWN0O1xuICAgIHB1YmxpYyB1cmxJbWc6IFN0cmluZztcbiAgICBwdWJsaWMgaXNFbmFibGVkU3RhcnQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBjb250YWRvck1pbjogU3RyaW5nO1xuICAgIHB1YmxpYyBjb250YWRvclNlYzogU3RyaW5nID0gJzAwJztcbiAgICBwdWJsaWMgdW5pdFRpbWU6IFN0cmluZyA9ICdVbmlkYWQgUG9tb2Rvcm8nO1xuICAgIHB1YmxpYyBpc1BhaXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgX2ludGVydmFsUG9tb2Rvcm86IG51bWJlcltdID0gWzI1LCA1LCAyNSwgNSwgMjUsIDE1XTtcbiAgICBwcml2YXRlIF9jb250YWRvckludGVydmFsOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3RpbWVTZWxlY3RlZDogbnVtYmVyID0gMC4xO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXJsSW1nID0gQ29uc3RhbnRzLlVSTF9JTUc7XG4gICAgICAgIHRoaXMuY29udGFkb3JNaW4gPSB0aGlzLl9pbnRlcnZhbFBvbW9kb3JvWzBdLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuc3RlcHMgPSB0aGlzLmdldFN0ZXBzKCk7XG4gICAgICAgIHRoaXMuYWN0dWFsU3RlcCA9IHRoaXMuc3RlcHNbMF07XG4gICAgfVxuXG4gICAgcGxheVBvbW9kb3JvKCkge1xuICAgICAgICB0aGlzLmlzRW5hYmxlZFN0YXJ0ID0gIXRoaXMuaXNFbmFibGVkU3RhcnQ7XG4gICAgICAgIHRoaXMuZ2V0Q291bnRTZWNvbmRzKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0VGltZSh0aW1lOiBudW1iZXIsIHRpbWVUaXRsZTogU3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3RpbWVTZWxlY3RlZCA9IHRpbWU7XG4gICAgICAgIHRoaXMudW5pdFRpbWUgPSB0aW1lVGl0bGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDb3VudFNlY29uZHMoKSB7XG4gICAgICAgIHRoaXMuY29udGFkb3JNaW4gPSAoTnVtYmVyKHRoaXMuY29udGFkb3JNaW4pIC0gMSkudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5jb250YWRvclNlYyA9ICc1OSc7XG4gICAgICAgIGNvbnN0IFNFQ09ORF9OVU1CRVI6IG51bWJlciA9IE51bWJlcih0aGlzLmNvbnRhZG9yU2VjKTtcbiAgICAgICAgT2JzZXJ2YWJsZVxuICAgICAgICAgICAgLmludGVydmFsKHRoaXMuX3RpbWVTZWxlY3RlZClcbiAgICAgICAgICAgIC50YWtlKDYwKS5tYXAoKHgpID0+IHggKyAxKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICh4KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWRvclNlYyA9IChTRUNPTkRfTlVNQkVSIC0geCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhZG9yU2VjID0gdGhpcy5jb250YWRvclNlYy5sZW5ndGggPT09IDEgPyAnMCcgKyB0aGlzLmNvbnRhZG9yU2VjIDogdGhpcy5jb250YWRvclNlYztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDb3VudE1pbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0NvdW50TWluKCkge1xuICAgICAgICBpZiAodGhpcy5jb250YWRvck1pbiAhPT0gJzAnKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvdW50U2Vjb25kcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY29udGFkb3JJbnRlcnZhbCA9IHRoaXMuX2NvbnRhZG9ySW50ZXJ2YWwgPT09IDUgPyAwIDogdGhpcy5fY29udGFkb3JJbnRlcnZhbCArIDE7XG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yU2VjID0gJzAwJztcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsU3RlcCA9IHRoaXMuc3RlcHNbdGhpcy5fY29udGFkb3JJbnRlcnZhbF07XG4gICAgICAgICAgICB0aGlzLmlzRW5hYmxlZFN0YXJ0ID0gIXRoaXMuaXNFbmFibGVkU3RhcnQ7XG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yTWluID0gdGhpcy5faW50ZXJ2YWxQb21vZG9yb1t0aGlzLl9jb250YWRvckludGVydmFsXS50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5pc1BhaXIgPSAoTnVtYmVyKHRoaXMuX2NvbnRhZG9ySW50ZXJ2YWwgKyAxKSkgJSAyID09PSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0U3RlcHMoKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgICAgbmFtZTogJzI1OjAwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnNTowMCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgbmFtZTogJzI1OjAwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnNTowMCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICAgICAgbmFtZTogJzI1OjAwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnMTU6MDAnXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxufVxuIl19
