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
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.contribComun();
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
        __metadata('design:paramtypes', [router_1.Router, contrib_service_1.ContribService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFFekMsZ0NBQStCLG9DQUFvQyxDQUFDLENBQUE7QUFXcEU7SUFLSSx1QkFBb0IsT0FBZSxFQUN2QixlQUErQjtRQUR2QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ3ZCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUd2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFFcEMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFFSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVPLG9DQUFZLEdBQXBCO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsZUFBZTthQUNmLFVBQVUsQ0FBQyxPQUFPLENBQUM7YUFFbkIsU0FBUyxDQUFDLFVBQUMsSUFBUztZQUNqQixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxRQUFnQjtRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQXRDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLFdBQVc7WUFDeEIsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO1NBQzFCLENBQUM7O3FCQUFBO0lBbUNGLG9CQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtBQWpDWSxxQkFBYSxnQkFpQ3pCLENBQUEiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQ29udHJpYlNlcnZpY2UgfSBmcm9tICcuLy4uL2NvcmUvc2VydmljZXMvY29udHJpYi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi8uLi9jb3JlL3RvYXN0L3RvYXN0LnNlcnZpY2UnO1xyXG4vLyBpbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdob21lLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2hvbWUuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBkYXk6IHN0cmluZztcclxuICAgIC8vIHB1YmxpYyBhY3RpdmVTcGlubmVyOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBoZWFkZXJDb250ZW50OiBPYmplY3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfY29udHJpYlNlcnZpY2U6IENvbnRyaWJTZXJ2aWNlLFxyXG4gICAgICAgIC8vIHByaXZhdGUgX3RvYXN0U2VydmljZTogVG9hc3RTZXJ2aWNcclxuICAgICkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3RvciBob21lJyk7XHJcbiAgICAgICAgLy8gKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB0aGlzLmFjdGl2ZVNwaW5uZXIgPSBmYWxzZSwgNTAwMCk7XHJcbiAgICAgICAgdGhpcy5jb250cmliQ29tdW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbnRyaWJDb211bigpIHtcclxuICAgICAgICB0aGlzLl9jb250cmliU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0Q29udHJpYignY29tdW4nKVxyXG4gICAgICAgICAgICAvLyAuZG8oKCkgPT4gdGhpcy5fdG9hc3RTZXJ2aWNlLmFjdGl2YXRlKCdwcnVlYmEgYW5nZWwnKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlckNvbnRlbnQgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1YnNjcmliZSBjb250cmliQ29tdW4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hvbWUgaG9tZSBob21lIGNvbnRyaWJDb211bicpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG8oZW5kUG9pbnQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbZW5kUG9pbnRdKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
