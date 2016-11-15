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
var HomeComponent = (function () {
    function HomeComponent(_router, _contribService) {
        this._router = _router;
        this._contribService = _contribService;
        console.log('constructor home');
        _contribService.getContrib('home-component');
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.contribComun();
    };
    HomeComponent.prototype.goTo = function (endPoint) {
        this._router.navigate([endPoint]);
    };
    HomeComponent.prototype.contribComun = function () {
        var _this = this;
        this._contribService
            .getContrib('comun')
            .subscribe(function (data) {
            _this.headerContent = data;
            console.log('subscribe contribComun');
        });
        console.log('home home home contribComun');
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-home',
            templateUrl: 'home.html',
            styleUrls: ['home.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, contrib_service_1.ContribService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFFekMsZ0NBQStCLG9DQUFvQyxDQUFDLENBQUE7QUFXcEU7SUFLSSx1QkFBb0IsT0FBZSxFQUN2QixlQUErQjtRQUR2QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ3ZCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUd2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDaEMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBR2pELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBRUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssUUFBZ0I7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTyxvQ0FBWSxHQUFwQjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLGVBQWU7YUFDZixVQUFVLENBQUMsT0FBTyxDQUFDO2FBRW5CLFNBQVMsQ0FBQyxVQUFDLElBQVM7WUFDakIsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUF4Q0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztTQUMxQixDQUFDOztxQkFBQTtJQXFDRixvQkFBQztBQUFELENBbkNBLEFBbUNDLElBQUE7QUFuQ1kscUJBQWEsZ0JBbUN6QixDQUFBIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IENvbnRyaWJTZXJ2aWNlIH0gZnJvbSAnLi8uLi9jb3JlL3NlcnZpY2VzL2NvbnRyaWIuc2VydmljZSc7XHJcbi8vIGltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4vLi4vY29yZS90b2FzdC90b2FzdC5zZXJ2aWNlJztcclxuLy8gaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydob21lLmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgZGF5OiBzdHJpbmc7XHJcbiAgICAvLyBwdWJsaWMgYWN0aXZlU3Bpbm5lcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgaGVhZGVyQ29udGVudDogT2JqZWN0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgX2NvbnRyaWJTZXJ2aWNlOiBDb250cmliU2VydmljZVxyXG4gICAgICAgIC8vIHByaXZhdGUgX3RvYXN0U2VydmljZTogVG9hc3RTZXJ2aWNcclxuICAgICkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3RvciBob21lJyk7XHJcbiAgICAgICAgX2NvbnRyaWJTZXJ2aWNlLmdldENvbnRyaWIoJ2hvbWUtY29tcG9uZW50Jyk7XHJcblxyXG4gICAgICAgIC8vICkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmVTcGlubmVyID0gZmFsc2UsIDUwMDApO1xyXG4gICAgICAgIHRoaXMuY29udHJpYkNvbXVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29UbyhlbmRQb2ludDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtlbmRQb2ludF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29udHJpYkNvbXVuKCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRyaWJTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRDb250cmliKCdjb211bicpXHJcbiAgICAgICAgICAgIC8vIC5kbygoKSA9PiB0aGlzLl90b2FzdFNlcnZpY2UuYWN0aXZhdGUoJ3BydWViYSBhbmdlbCcpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyQ29udGVudCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3Vic2NyaWJlIGNvbnRyaWJDb211bicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnaG9tZSBob21lIGhvbWUgY29udHJpYkNvbXVuJyk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
