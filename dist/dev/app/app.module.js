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
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var home_module_1 = require('./home/home.module');
var shared_module_1 = require('./shared/shared.module');
var pomodoro_module_1 = require('./pomodoro/pomodoro.module');
var film_module_1 = require('./film/film.module');
require('rxjs/Rx');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                shared_module_1.SharedModule,
                home_module_1.HomeModule,
                pomodoro_module_1.PomodoroModule,
                film_module_1.FilmModule],
            declarations: [
                app_component_1.AppComponent],
            providers: [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                }],
            bootstrap: [
                app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELDhCQUE2Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3RELGdDQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELFFBQU8sU0FBUyxDQUFDLENBQUE7QUFxQmpCO0lBQUE7SUFBeUIsQ0FBQztJQW5CMUI7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsZ0NBQWE7Z0JBQ2IsaUJBQVU7Z0JBQ1YsNEJBQVk7Z0JBQ1osd0JBQVU7Z0JBQ1YsZ0NBQWM7Z0JBQ2Qsd0JBQVUsQ0FBQztZQUNmLFlBQVksRUFBRTtnQkFDViw0QkFBWSxDQUFDO1lBQ2pCLFNBQVMsRUFBRSxDQUFDO29CQUNSLE9BQU8sRUFBRSxzQkFBYTtvQkFDdEIsUUFBUSxFQUFFLGlCQUFpQjtpQkFDOUIsQ0FBQztZQUNGLFNBQVMsRUFBRTtnQkFDUCw0QkFBWSxDQUFDO1NBRXBCLENBQUM7O2lCQUFBO0lBRXVCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJhcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvbWVNb2R1bGUgfSBmcm9tICcuL2hvbWUvaG9tZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgUG9tb2Rvcm9Nb2R1bGUgfSBmcm9tICcuL3BvbW9kb3JvL3BvbW9kb3JvLm1vZHVsZSc7XHJcbmltcG9ydCB7IEZpbG1Nb2R1bGUgfSBmcm9tICcuL2ZpbG0vZmlsbS5tb2R1bGUnO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgICAgIEh0dHBNb2R1bGUsXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgIEhvbWVNb2R1bGUsXHJcbiAgICAgICAgUG9tb2Rvcm9Nb2R1bGUsXHJcbiAgICAgICAgRmlsbU1vZHVsZV0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbe1xyXG4gICAgICAgIHByb3ZpZGU6IEFQUF9CQVNFX0hSRUYsXHJcbiAgICAgICAgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nXHJcbiAgICB9XSxcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudF1cclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=
