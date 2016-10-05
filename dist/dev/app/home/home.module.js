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
var home_component_1 = require('./home.component');
var index_1 = require('../shared/name-list/index');
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, shared_module_1.SharedModule],
            declarations: [home_component_1.HomeComponent],
            exports: [home_component_1.HomeComponent],
            providers: [index_1.NameListService]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFDakQsc0JBQWdDLDJCQUEyQixDQUFDLENBQUE7QUFRNUQ7SUFBQTtJQUEwQixDQUFDO0lBTjNCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSw0QkFBWSxDQUFDO1lBQ3JDLFlBQVksRUFBRSxDQUFDLDhCQUFhLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsOEJBQWEsQ0FBQztZQUN4QixTQUFTLEVBQUUsQ0FBQyx1QkFBZSxDQUFDO1NBQzdCLENBQUM7O2tCQUFBO0lBQ3dCLGlCQUFDO0FBQUQsQ0FBMUIsQUFBMkIsSUFBQTtBQUFkLGtCQUFVLGFBQUksQ0FBQSIsImZpbGUiOiJhcHAvaG9tZS9ob21lLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYW1lTGlzdFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbmFtZS1saXN0L2luZGV4JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU2hhcmVkTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtIb21lQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbSG9tZUNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbTmFtZUxpc3RTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cclxuIl19
