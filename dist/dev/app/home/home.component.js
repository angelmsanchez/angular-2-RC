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
        this.activeSpinner = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.activeSpinner = false;
        }, 3000);
    };
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFXekM7SUFJSSx1QkFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGNUIsa0JBQWEsR0FBWSxJQUFJLENBQUM7SUFLckMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhHLFVBQVUsQ0FBQztZQUNQLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssUUFBZ0I7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUF4Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztTQUMxQixDQUFDOztxQkFBQTtJQXFCRixvQkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQlkscUJBQWEsZ0JBbUJ6QixDQUFBIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbi8vIGltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4vLi4vY29yZS90b2FzdC90b2FzdC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdob21lLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2hvbWUuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBkYXk6IHN0cmluZztcclxuICAgIHB1YmxpYyBhY3RpdmVTcGlubmVyOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlclxyXG4gICAgICAgIC8vIHByaXZhdGUgX3RvYXN0U2VydmljZTogVG9hc3RTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVTcGlubmVyID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29UbyhlbmRQb2ludDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtlbmRQb2ludF0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
