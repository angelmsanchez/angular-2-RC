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
var contrib_service_1 = require('./contrib.service');
var core_1 = require('@angular/core');
var index_1 = require('./shared/index');
var AppComponent = (function () {
    function AppComponent(_contribService) {
        this._contribService = _contribService;
        console.log('Environment config', index_1.Config);
        _contribService.getContrib('app-component');
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'a2-app',
            templateUrl: 'app.component.html',
        }), 
        __metadata('design:paramtypes', [contrib_service_1.ContribService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUNuRCxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsc0JBQXVCLGdCQUFnQixDQUFDLENBQUE7QUFPeEM7SUFDSSxzQkFBb0IsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsY0FBTSxDQUFDLENBQUM7UUFDMUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBVEw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzs7b0JBQUE7SUFNRixtQkFBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBTFksb0JBQVksZUFLeEIsQ0FBQSIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyaWJTZXJ2aWNlIH0gZnJvbSAnLi9jb250cmliLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9zaGFyZWQvaW5kZXgnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdhMi1hcHAnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnRyaWJTZXJ2aWNlOiBDb250cmliU2VydmljZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFbnZpcm9ubWVudCBjb25maWcnLCBDb25maWcpO1xyXG4gICAgICAgIF9jb250cmliU2VydmljZS5nZXRDb250cmliKCdhcHAtY29tcG9uZW50Jyk7XHJcbiAgICB9XHJcbn1cclxuIl19
