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
var router_1 = require('@angular/router');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var shared_module_1 = require('../shared/shared.module');
var pomodoro_component_1 = require('./pomodoro.component');
var steps_component_1 = require('./steps/steps.component');
var pomodoro_routes_1 = require('./pomodoro.routes');
var PomodoroModule = (function () {
    function PomodoroModule() {
    }
    PomodoroModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule,
                ng2_bootstrap_1.DropdownModule,
                router_1.RouterModule.forChild(pomodoro_routes_1.PomodoroRoutes)],
            declarations: [
                pomodoro_component_1.PomodoroComponent,
                steps_component_1.StepsComponent],
            exports: [
                pomodoro_component_1.PomodoroComponent,
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PomodoroModule);
    return PomodoroModule;
}());
exports.PomodoroModule = PomodoroModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wb21vZG9yby9wb21vZG9yby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQyw4QkFBK0IsNkJBQTZCLENBQUMsQ0FBQTtBQUU3RCw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN6RCxnQ0FBK0IseUJBQXlCLENBQUMsQ0FBQTtBQUN6RCxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQWlCbkQ7SUFBQTtJQUE4QixDQUFDO0lBZi9CO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNaLDRCQUFZO2dCQUNaLDhCQUFjO2dCQUNkLHFCQUFZLENBQUMsUUFBUSxDQUFDLGdDQUFjLENBQUMsQ0FBQztZQUMxQyxZQUFZLEVBQUU7Z0JBQ1Ysc0NBQWlCO2dCQUNqQixnQ0FBYyxDQUFDO1lBQ25CLE9BQU8sRUFBRTtnQkFDTCxzQ0FBaUI7Z0JBQ2pCLHFCQUFZO2FBQ2Y7U0FDSixDQUFDOztzQkFBQTtJQUU0QixxQkFBQztBQUFELENBQTlCLEFBQStCLElBQUE7QUFBbEIsc0JBQWMsaUJBQUksQ0FBQSIsImZpbGUiOiJhcHAvcG9tb2Rvcm8vcG9tb2Rvcm8ubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgUG9tb2Rvcm9Db21wb25lbnQgfSBmcm9tICcuL3BvbW9kb3JvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN0ZXBzQ29tcG9uZW50IH0gZnJvbSAnLi9zdGVwcy9zdGVwcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb21vZG9yb1JvdXRlcyB9IGZyb20gJy4vcG9tb2Rvcm8ucm91dGVzJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcclxuICAgICAgICBEcm9wZG93bk1vZHVsZSxcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoUG9tb2Rvcm9Sb3V0ZXMpXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFBvbW9kb3JvQ29tcG9uZW50LFxyXG4gICAgICAgIFN0ZXBzQ29tcG9uZW50XSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBQb21vZG9yb0NvbXBvbmVudCxcclxuICAgICAgICBSb3V0ZXJNb2R1bGVcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQb21vZG9yb01vZHVsZSB7IH1cclxuIl19
