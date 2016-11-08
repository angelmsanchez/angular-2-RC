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
var contrib_service_1 = require('./../core/services/contrib.service');
var toast_service_1 = require('./../core/toast/toast.service');
var HomeComponent = (function () {
    function HomeComponent(_router, _contribService, _toastService) {
        this._router = _router;
        this._contribService = _contribService;
        this._toastService = _toastService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.contribComun();
    };
    HomeComponent.prototype.contribComun = function () {
        var _this = this;
        this._contribService
            .getContrib('comun')
            .do(function () { return _this._toastService.activate('prueba angel'); })
            .subscribe(function (data) {
            _this.headerContent = data;
            console.log('subscribe contribComun');
        });
        console.log('home home home contribComun');
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
        __metadata('design:paramtypes', [router_1.Router, contrib_service_1.ContribService, toast_service_1.ToastService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFFekMsZ0NBQStCLG9DQUFvQyxDQUFDLENBQUE7QUFDcEUsOEJBQTZCLCtCQUErQixDQUFDLENBQUE7QUFVN0Q7SUFLSSx1QkFBb0IsT0FBZSxFQUN2QixlQUErQixFQUMvQixhQUEyQjtRQUZuQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ3ZCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUV2QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUVJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8sb0NBQVksR0FBcEI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxlQUFlO2FBQ2YsVUFBVSxDQUFDLE9BQU8sQ0FBQzthQUNuQixFQUFFLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDO2FBQ3JELFNBQVMsQ0FBQyxVQUFDLElBQVM7WUFDakIsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssUUFBZ0I7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFwQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztTQUMxQixDQUFDOztxQkFBQTtJQWlDRixvQkFBQztBQUFELENBL0JBLEFBK0JDLElBQUE7QUEvQlkscUJBQWEsZ0JBK0J6QixDQUFBIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IENvbnRyaWJTZXJ2aWNlIH0gZnJvbSAnLi8uLi9jb3JlL3NlcnZpY2VzL2NvbnRyaWIuc2VydmljZSc7XHJcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4vLi4vY29yZS90b2FzdC90b2FzdC5zZXJ2aWNlJztcclxuLy8gaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydob21lLmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgZGF5OiBzdHJpbmc7XHJcbiAgICAvLyBwdWJsaWMgYWN0aXZlU3Bpbm5lcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgaGVhZGVyQ29udGVudDogT2JqZWN0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgX2NvbnRyaWJTZXJ2aWNlOiBDb250cmliU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF90b2FzdFNlcnZpY2U6IFRvYXN0U2VydmljZSkge1xyXG4gICAgICAgIC8vICkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmVTcGlubmVyID0gZmFsc2UsIDUwMDApO1xyXG4gICAgICAgIHRoaXMuY29udHJpYkNvbXVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb250cmliQ29tdW4oKSB7XHJcbiAgICAgICAgdGhpcy5fY29udHJpYlNlcnZpY2VcclxuICAgICAgICAgICAgLmdldENvbnRyaWIoJ2NvbXVuJylcclxuICAgICAgICAgICAgLmRvKCgpID0+IHRoaXMuX3RvYXN0U2VydmljZS5hY3RpdmF0ZSgncHJ1ZWJhIGFuZ2VsJykpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJDb250ZW50ID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJzY3JpYmUgY29udHJpYkNvbXVuJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdob21lIGhvbWUgaG9tZSBjb250cmliQ29tdW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBnb1RvKGVuZFBvaW50OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2VuZFBvaW50XSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
