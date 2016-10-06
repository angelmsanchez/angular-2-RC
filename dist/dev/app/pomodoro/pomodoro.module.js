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
var PomodoroModule = (function () {
    function PomodoroModule() {
    }
    PomodoroModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, shared_module_1.SharedModule, ng2_bootstrap_1.DropdownModule],
            declarations: [pomodoro_component_1.PomodoroComponent, steps_component_1.StepsComponent],
            exports: [pomodoro_component_1.PomodoroComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PomodoroModule);
    return PomodoroModule;
}());
exports.PomodoroModule = PomodoroModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wb21vZG9yby9wb21vZG9yby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQyw4QkFBK0IsNkJBQTZCLENBQUMsQ0FBQTtBQUU3RCw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN6RCxnQ0FBK0IseUJBQXlCLENBQUMsQ0FBQTtBQVF6RDtJQUFBO0lBQThCLENBQUM7SUFOL0I7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLDRCQUFZLEVBQUUsOEJBQWMsQ0FBQztZQUNyRCxZQUFZLEVBQUUsQ0FBQyxzQ0FBaUIsRUFBRSxnQ0FBYyxDQUFDO1lBQ2pELE9BQU8sRUFBRSxDQUFDLHNDQUFpQixDQUFDO1NBQy9CLENBQUM7O3NCQUFBO0lBRTRCLHFCQUFDO0FBQUQsQ0FBOUIsQUFBK0IsSUFBQTtBQUFsQixzQkFBYyxpQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9wb21vZG9yby9wb21vZG9yby5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQb21vZG9yb0NvbXBvbmVudCB9IGZyb20gJy4vcG9tb2Rvcm8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3RlcHNDb21wb25lbnQgfSBmcm9tICcuL3N0ZXBzL3N0ZXBzLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU2hhcmVkTW9kdWxlLCBEcm9wZG93bk1vZHVsZV0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtQb21vZG9yb0NvbXBvbmVudCwgU3RlcHNDb21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW1BvbW9kb3JvQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvbW9kb3JvTW9kdWxlIHsgfVxyXG4iXX0=
