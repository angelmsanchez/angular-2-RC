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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var shared_module_1 = require('../shared/shared.module');
var pomodoro_component_1 = require('./pomodoro.component');
var steps_component_1 = require('./steps/steps.component');
var pomodoro_routing_module_1 = require('./pomodoro.routing.module');
var PomodoroModule = (function () {
    function PomodoroModule() {
    }
    PomodoroModule = __decorate([
        core_1.NgModule({
            imports: [
                pomodoro_routing_module_1.PomodoroRoutingModule,
                shared_module_1.SharedModule,
                ng2_bootstrap_1.DropdownModule
            ],
            declarations: [
                pomodoro_component_1.PomodoroComponent,
                steps_component_1.StepsComponent
            ],
            exports: [
                pomodoro_component_1.PomodoroComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PomodoroModule);
    return PomodoroModule;
}());
exports.PomodoroModule = PomodoroModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wb21vZG9yby9wb21vZG9yby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUd6Qyw4QkFBK0IsNkJBQTZCLENBQUMsQ0FBQTtBQUU3RCw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN6RCxnQ0FBK0IseUJBQXlCLENBQUMsQ0FBQTtBQUN6RCx3Q0FBc0MsMkJBQTJCLENBQUMsQ0FBQTtBQWlCbEU7SUFBQTtJQUE4QixDQUFDO0lBZi9CO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLCtDQUFxQjtnQkFDckIsNEJBQVk7Z0JBQ1osOEJBQWM7YUFDakI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysc0NBQWlCO2dCQUNqQixnQ0FBYzthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxzQ0FBaUI7YUFDcEI7U0FDSixDQUFDOztzQkFBQTtJQUU0QixxQkFBQztBQUFELENBQTlCLEFBQStCLElBQUE7QUFBbEIsc0JBQWMsaUJBQUksQ0FBQSIsImZpbGUiOiJhcHAvcG9tb2Rvcm8vcG9tb2Rvcm8ubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgUG9tb2Rvcm9Db21wb25lbnQgfSBmcm9tICcuL3BvbW9kb3JvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN0ZXBzQ29tcG9uZW50IH0gZnJvbSAnLi9zdGVwcy9zdGVwcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb21vZG9yb1JvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3BvbW9kb3JvLnJvdXRpbmcubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgUG9tb2Rvcm9Sb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcclxuICAgICAgICBEcm9wZG93bk1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFBvbW9kb3JvQ29tcG9uZW50LFxyXG4gICAgICAgIFN0ZXBzQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFBvbW9kb3JvQ29tcG9uZW50XHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUG9tb2Rvcm9Nb2R1bGUgeyB9XHJcbiJdfQ==
