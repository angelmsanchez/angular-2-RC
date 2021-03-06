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
                common_1.CommonModule,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wb21vZG9yby9wb21vZG9yby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQyw4QkFBK0IsNkJBQTZCLENBQUMsQ0FBQTtBQUU3RCw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN6RCxnQ0FBK0IseUJBQXlCLENBQUMsQ0FBQTtBQUN6RCx3Q0FBc0MsMkJBQTJCLENBQUMsQ0FBQTtBQWtCbEU7SUFBQTtJQUE4QixDQUFDO0lBaEIvQjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxxQkFBWTtnQkFDWiwrQ0FBcUI7Z0JBQ3JCLDRCQUFZO2dCQUNaLDhCQUFjO2FBQ2pCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHNDQUFpQjtnQkFDakIsZ0NBQWM7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsc0NBQWlCO2FBQ3BCO1NBQ0osQ0FBQzs7c0JBQUE7SUFFNEIscUJBQUM7QUFBRCxDQUE5QixBQUErQixJQUFBO0FBQWxCLHNCQUFjLGlCQUFJLENBQUEiLCJmaWxlIjoiYXBwL3BvbW9kb3JvL3BvbW9kb3JvLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcbmltcG9ydCB7IFBvbW9kb3JvQ29tcG9uZW50IH0gZnJvbSAnLi9wb21vZG9yby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdGVwc0NvbXBvbmVudCB9IGZyb20gJy4vc3RlcHMvc3RlcHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9tb2Rvcm9Sb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9wb21vZG9yby5yb3V0aW5nLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBQb21vZG9yb1JvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgIERyb3Bkb3duTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgUG9tb2Rvcm9Db21wb25lbnQsXHJcbiAgICAgICAgU3RlcHNDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgUG9tb2Rvcm9Db21wb25lbnRcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQb21vZG9yb01vZHVsZSB7IH1cclxuIl19
