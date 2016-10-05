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
var common_1 = require('@angular/common');
var shared_module_1 = require('../shared/shared.module');
var pomodoro_component_1 = require('./pomodoro.component');
var steps_component_1 = require('./steps/steps.component');
var PomodoroModule = (function () {
    function PomodoroModule() {
    }
    PomodoroModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, shared_module_1.SharedModule],
            declarations: [pomodoro_component_1.PomodoroComponent, steps_component_1.StepsComponent],
            exports: [pomodoro_component_1.PomodoroComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PomodoroModule);
    return PomodoroModule;
}());
exports.PomodoroModule = PomodoroModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wb21vZG9yby9wb21vZG9yby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQyw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN6RCxnQ0FBK0IseUJBQXlCLENBQUMsQ0FBQTtBQVF6RDtJQUFBO0lBQThCLENBQUM7SUFOL0I7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLDRCQUFZLENBQUM7WUFDckMsWUFBWSxFQUFFLENBQUMsc0NBQWlCLEVBQUUsZ0NBQWMsQ0FBQztZQUNqRCxPQUFPLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztTQUMvQixDQUFDOztzQkFBQTtJQUU0QixxQkFBQztBQUFELENBQTlCLEFBQStCLElBQUE7QUFBbEIsc0JBQWMsaUJBQUksQ0FBQSIsImZpbGUiOiJhcHAvcG9tb2Rvcm8vcG9tb2Rvcm8ubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgUG9tb2Rvcm9Db21wb25lbnQgfSBmcm9tICcuL3BvbW9kb3JvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN0ZXBzQ29tcG9uZW50IH0gZnJvbSAnLi9zdGVwcy9zdGVwcy5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFNoYXJlZE1vZHVsZV0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtQb21vZG9yb0NvbXBvbmVudCwgU3RlcHNDb21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW1BvbW9kb3JvQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvbW9kb3JvTW9kdWxlIHsgfVxyXG4iXX0=
