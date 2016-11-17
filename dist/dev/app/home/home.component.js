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
var toast_service_1 = require('./../core/toast/toast.service');
var HomeComponent = (function () {
    function HomeComponent(_router, _toastService) {
        this._router = _router;
        this._toastService = _toastService;
        this.activeSpinner = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.activeSpinner = false;
            _this._toastService.activate('Home Component');
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
        __metadata('design:paramtypes', [router_1.Router, toast_service_1.ToastService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFFekMsOEJBQTZCLCtCQUErQixDQUFDLENBQUE7QUFTN0Q7SUFJSSx1QkFBb0IsT0FBZSxFQUN2QixhQUEyQjtRQURuQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBSGhDLGtCQUFhLEdBQVksSUFBSSxDQUFDO0lBSXJDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssUUFBZ0I7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUF4Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztTQUMxQixDQUFDOztxQkFBQTtJQXFCRixvQkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQlkscUJBQWEsZ0JBbUJ6QixDQUFBIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4vLi4vY29yZS90b2FzdC90b2FzdC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdob21lLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2hvbWUuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBkYXk6IHN0cmluZztcclxuICAgIHB1YmxpYyBhY3RpdmVTcGlubmVyOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIF90b2FzdFNlcnZpY2U6IFRvYXN0U2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVNwaW5uZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fdG9hc3RTZXJ2aWNlLmFjdGl2YXRlKCdIb21lIENvbXBvbmVudCcpO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG8oZW5kUG9pbnQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbZW5kUG9pbnRdKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
