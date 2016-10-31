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
var router_1 = require('@angular/router');
var HomeComponent = (function () {
    function HomeComponent(_router) {
        this._router = _router;
    }
    HomeComponent.prototype.goTo = function (endPoint) {
        this._router.navigate([endPoint]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-home',
            templateUrl: 'home.html',
            styleUrls: ['home.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFXekM7SUFJSSx1QkFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFDbkMsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxRQUFnQjtRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQWhCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLFdBQVc7WUFDeEIsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO1NBQzFCLENBQUM7O3FCQUFBO0lBWUYsb0JBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQVZZLHFCQUFhLGdCQVV6QixDQUFBIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBpbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2hvbWUuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2hvbWUuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgZGF5OiBzdHJpbmc7XG4gICAgcHVibGljIHZhbHVlTG9jYWxTdG9yYWdlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xuICAgIH1cblxuICAgIGdvVG8oZW5kUG9pbnQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2VuZFBvaW50XSk7XG4gICAgfVxufVxuIl19
